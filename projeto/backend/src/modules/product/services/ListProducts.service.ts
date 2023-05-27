import { Injectable } from "@nestjs/common";
import Product from "../entities/Product";
import ProductRepository from "../repositories/products.repository";


@Injectable()
export default class ListProducts {
	constructor(private productsRepository: ProductRepository) {}

	public async execute(): Promise<Product[]> {
		const products = await this.productsRepository.findAll();

		return products;
	}
}