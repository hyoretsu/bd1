import { Injectable } from "@nestjs/common";

import Seller from "../entities/Seller";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class ListSellers {
	constructor(private sellersRepository: SellersRepository) {}

	public async execute(): Promise<Seller[]> {
		const sellers = await this.sellersRepository.findAll();

		return sellers;
	}
}
