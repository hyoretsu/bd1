import { Injectable } from "@nestjs/common";

import CreateSellerDTO from "../dtos/CreateSeller.dto";
import Seller from "../entities/Seller";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class CreateSeller {
	constructor(private sellersRepository: SellersRepository) {}

	public async execute({ email, phoneNumber, ...data }: CreateSellerDTO): Promise<Seller> {
		const seller = await this.sellersRepository.create({
			...data,
			email,
			phoneNumber,
		});

		return seller;
	}
}
