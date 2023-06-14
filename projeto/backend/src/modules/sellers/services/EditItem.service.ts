import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import EditItemDTO from "../dtos/EditItem.dto";
import Item from "../entities/Item";
import ItemRepository from "../repositories/items.repository";

@Injectable()
export default class EditItem {
	constructor(private itemRepository: ItemRepository) {}

	public async execute({ itemId, ...data }: EditItemDTO): Promise<Item> {
		let item = await this.itemRepository.findById(itemId);
		if (!item) {
			throw new HttpException("This item does not exist", HttpStatus.NOT_FOUND);
		}

		item = await this.itemRepository.update({
			...data,
			itemId,
		});

		return item;
	}
}
