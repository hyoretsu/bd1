import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import Item from "../entities/Item";
import ItemsRepository from "../repositories/items.repository";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class ListItems {
	constructor(private itemsRepository: ItemsRepository, private sellersRepository: SellersRepository) {}

	public async execute(sellerId: string): Promise<Item[]> {
		const seller = await this.sellersRepository.findById(sellerId);
		if (!seller) {
			throw new HttpException("This seller does not exist", HttpStatus.NOT_FOUND);
		}

		const items = await this.itemsRepository.findAllBySeller(sellerId);

		return items;
	}
}
