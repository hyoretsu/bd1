import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import SellersRepository from "@modules/sellers/repositories/sellers.repository";

import Order from "../entities/Order";
import OrdersRepository from "../repositories/orders.repository";

@Injectable()
export default class ListOrders {
	constructor(private ordersRepository: OrdersRepository, private sellersRepository: SellersRepository) {}

	public async execute(sellerId: string): Promise<Order[]> {
		const seller = await this.sellersRepository.findById(sellerId);
		if (!seller) {
			throw new HttpException("Este vendedor não existe", HttpStatus.NOT_FOUND);
		}

		const orders = await this.ordersRepository.findOrdersBySeller(sellerId);

		return orders;
	}
}
