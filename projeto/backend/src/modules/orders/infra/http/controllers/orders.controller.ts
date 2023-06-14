import { QueryRequired } from "@hyoretsu/decorators";
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import CreateOrderDTO from "@modules/orders/dtos/CreateOrder.dto";
import GenerateReportDTO from "@modules/orders/dtos/GenerateReport.dto";
import Order from "@modules/orders/entities/Order";
import CreateOrder from "@modules/orders/services/CreateOrder.service";
import DeleteOrder from "@modules/orders/services/DeleteOrder.service";
import GenerateReport, { OrdersReport } from "@modules/orders/services/GenerateReport.service";
import ListOrders from "@modules/orders/services/ListOrders.service";

@Controller("orders")
export default class OrdersController {
	constructor(
		private createOrder: CreateOrder,
		private deleteOrder: DeleteOrder,
		private generateReport: GenerateReport,
		private listOrders: ListOrders,
	) {}

	@Delete(":id")
	async deleteOrders(@Param("id") id: string): Promise<void> {
		await this.deleteOrder.execute(id);
	}

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

	@Post("report")
	async postOrdersReport(@Body() body: GenerateReportDTO): Promise<OrdersReport> {
		const order = await this.generateReport.execute(body);

		return order;
	}
}
