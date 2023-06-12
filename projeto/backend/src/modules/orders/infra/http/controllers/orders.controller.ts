import { Body, Controller, Post } from "@nestjs/common";

import CreateOrderDTO from "@modules/orders/dtos/CreateOrder.dto";
import Order from "@modules/orders/entities/Order";
import CreateOrder from "@modules/orders/services/CreateOrder.service";

@Controller("orders")
export default class OrdersController {
	constructor(private createOrder: CreateOrder) {}

	@Post()
	async postOrders(@Body() body: CreateOrderDTO): Promise<Order> {
		const order = await this.createOrder.execute(body);

		return order;
	}
}
