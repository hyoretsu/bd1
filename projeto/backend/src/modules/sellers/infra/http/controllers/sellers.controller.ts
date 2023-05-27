import { Body, Controller, Delete, Get, Post } from "@nestjs/common";

import CreateSellerDTO from "@modules/sellers/dtos/CreateSeller.dto";
import DeleteSellerDTO from "@modules/sellers/dtos/DeleteSeller.dto";
import Seller from "@modules/sellers/entities/Seller";
import CreateSeller from "@modules/sellers/services/CreateSeller.service";
import DeleteSeller from "@modules/sellers/services/DeleteSeller.service";
import ListSellers from "@modules/sellers/services/ListSellers.service";

@Controller("sellers")
export default class SellersController {
	constructor(
		private createSeller: CreateSeller,
		private deleteSeller: DeleteSeller,
		private listSellers: ListSellers,
	) {}

	@Delete()
	async deleteSellers(@Body() body: DeleteSellerDTO): Promise<void> {
		await this.deleteSeller.execute(body);
	}

	@Get()
	async getSellers(): Promise<Seller[]> {
		const sellers = await this.listSellers.execute();

		return sellers;
	}

	@Post()
	async postSellers(@Body() body: CreateSellerDTO): Promise<Seller> {
		const seller = await this.createSeller.execute(body);

		return seller;
	}
}
