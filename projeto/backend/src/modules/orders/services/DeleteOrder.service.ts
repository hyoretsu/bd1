import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import OrdersRepository from "../repositories/orders.repository";

@Injectable()
export default class DeleteOrder {
	constructor(private ordersRepository: OrdersRepository) {}

	public async execute(orderId: string): Promise<void> {
		const order = await this.ordersRepository.findById(orderId);
		if (!order) {
			throw new HttpException("Esse pedido não existe", HttpStatus.NOT_FOUND);
		}

		await this.ordersRepository.delete(orderId);
	}
}
