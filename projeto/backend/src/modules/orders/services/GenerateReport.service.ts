import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { isSameMonth, isSameYear } from "date-fns";

import SellersRepository from "@modules/sellers/repositories/sellers.repository";

import GenerateReportDTO from "../dtos/GenerateReport.dto";
import OrdersRepository from "../repositories/orders.repository";

export interface OrdersReport {
	totalOrders: number;
	salesResult: number;
	month: Date;
}

@Injectable()
export default class GenerateReport {
	constructor(private ordersRepository: OrdersRepository, private sellersRepository: SellersRepository) {}

	public async execute({ month, sellerId }: GenerateReportDTO): Promise<OrdersReport> {
		const seller = await this.sellersRepository.findById(sellerId);
		if (!seller) {
			throw new HttpException("Este vendedor não existe", HttpStatus.NOT_FOUND);
		}

		const reportData = await this.ordersRepository.generateReportData(sellerId);
		const singleReportData = reportData.find(
			data => isSameYear(data.month, new Date(month)) && isSameMonth(data.month, new Date(month)),
		);
		if (!singleReportData) {
			throw new HttpException("Não há vendas para este período", 400);
		}

		return {
			...singleReportData,
			salesResult: singleReportData.salesResult / 2,
			totalOrders: singleReportData.totalOrders / 2,
		};
	}
}
