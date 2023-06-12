import { QueryRequired } from "@hyoretsu/decorators";
import { Body, Controller, Get, Post } from "@nestjs/common";

import CreateOrderDTO from "@modules/orders/dtos/CreateOrder.dto";
import Order from "@modules/orders/entities/Order";
import CreateOrder from "@modules/orders/services/CreateOrder.service";
import ListOrders from "@modules/orders/services/ListOrders.service";

@Controller("orders")
export default class OrdersController {
	constructor(private createOrder: CreateOrder, private listOrders: ListOrders) {}

	@Get()
	async getOrders(@QueryRequired("sellerId") sellerId: string): Promise<Order[]> {
		const orders = await this.listOrders.execute(sellerId);

		return orders;
	}

	@Post()
	async postOrders(@Body() body: CreateOrderDTO): Promise<Order> {
		const order = await this.createOrder.execute(body);

		return order;
	}
}
