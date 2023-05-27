import { Body, Controller, Post } from "@nestjs/common";

import CreateSellerDTO from "@modules/sellers/dtos/CreateSeller.dto";
import Seller from "@modules/sellers/entities/Seller";
import CreateSeller from "@modules/sellers/services/CreateSeller.service";

@Controller("sellers")
export default class SellersController {
	constructor(private createSeller: CreateSeller) {}

	@Post()
	async postSellers(@Body() body: CreateSellerDTO): Promise<Seller> {
		const seller = await this.createSeller.execute(body);

		return seller;
	}
}
