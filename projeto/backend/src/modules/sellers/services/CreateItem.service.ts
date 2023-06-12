import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import ProductRepository from "@modules/product/repositories/products.repository";

import CreateItemDTO from "../dtos/CreateItem.dto";
import Item from "../entities/Item";
import ItemsRepository from "../repositories/items.repository";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class CreateItem {
	constructor(
		private itemsRepository: ItemsRepository,
		private productsRepository: ProductRepository,
		private sellersRepository: SellersRepository,
	) {}

	public async execute({ productId, sellerId, ...data }: CreateItemDTO): Promise<Item> {
		const seller = await this.sellersRepository.findById(sellerId);
		if (!seller) {
			throw new HttpException("Esse vendedor não existe", HttpStatus.NOT_FOUND);
		}

		const product = await this.productsRepository.findById(productId);
		if (!product) {
			throw new HttpException("Esse produto não existe", HttpStatus.NOT_FOUND);
		}

		const existingItem = await this.itemsRepository.findExisting({ productId, sellerId });
		if (existingItem) {
			throw new HttpException("Esse item já consta no estoque", HttpStatus.FORBIDDEN);
		}

		const item = await this.itemsRepository.create({
			...data,
			productId,
			sellerId,
		});

		return item;
	}
}
