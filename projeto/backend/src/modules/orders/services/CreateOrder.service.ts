import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import ClientsRepository from "@modules/clients/repositories/clients.repository";
import Item from "@modules/sellers/entities/Item";
import ItemsRepository from "@modules/sellers/repositories/items.repository";
import SellersRepository from "@modules/sellers/repositories/sellers.repository";

import CreateOrderDTO from "../dtos/CreateOrder.dto";
import Order from "../entities/Order";
import OrdersRepository from "../repositories/orders.repository";

@Injectable()
export default class CreateOrder {
	constructor(
		private clientsRepository: ClientsRepository,
		private itemsRepository: ItemsRepository,
		private ordersRepository: OrdersRepository,
		private sellersRepository: SellersRepository,
	) {}

	public async execute({ clientId, items, paymentMethod, sellerId }: CreateOrderDTO): Promise<Order> {
		const client = await this.clientsRepository.findById(clientId);
		if (!client) {
			throw new HttpException("Este cliente não existe", HttpStatus.NOT_FOUND);
		}

		const seller = await this.sellersRepository.findById(sellerId);
		if (!seller) {
			throw new HttpException("Este vendedor não existe", HttpStatus.NOT_FOUND);
		}

		items.forEach(async item => {
			const existingItem = await this.itemsRepository.findById(item.itemId);
			if (!existingItem) {
				throw new HttpException("Este produto não existe", HttpStatus.NOT_FOUND);
			}

			if (existingItem.sellerId !== sellerId) {
				throw new HttpException("Este produto não pertence a esse vendedor", HttpStatus.BAD_REQUEST);
			}

			if (existingItem.amount === 0) {
				throw new HttpException("Este produto está esgotado", HttpStatus.BAD_REQUEST);
			}

			if (existingItem.amount < item.amount) {
				throw new HttpException(
					"Não há unidades suficientes deste produto em estoque",
					HttpStatus.BAD_REQUEST,
				);
			}
		});

		const order = await this.ordersRepository.create({ clientId, sellerId });
		order.items = [];

		let clientHasDiscount = false;
		if (client.soccerTeam === "Flamengo" || client.onePiece === true || client.birthCity === "Sousa") {
			clientHasDiscount = true;
		}

		for (const item of items) {
			// Update amount purchased from stock
			const sellerItem = (await this.itemsRepository.findById(item.itemId)) as Item;
			await this.itemsRepository.update({
				itemId: sellerItem.id,
				amount: sellerItem.amount - item.amount,
			});

			const orderItem = await this.ordersRepository.createItem({
				amount: item.amount,
				totalPrice: sellerItem.price * (Number(clientHasDiscount) * 0.9) * item.amount,
				itemId: item.itemId,
				orderId: order.id,
			});

			order.items.push(orderItem);
		}

		order.payment = await this.ordersRepository.createPayment({
			method: paymentMethod,
			orderId: order.id,
		});

		return order;
	}
}
