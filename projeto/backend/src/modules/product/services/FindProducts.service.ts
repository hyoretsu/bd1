import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import FindProductDTO from "../dtos/FindProduct";
import Product from "../entities/Product";
import ProductRepository from "../repositories/products.repository";

@Injectable()
export default class FindProduct {
	constructor(private productsRepository: ProductRepository) {}

	public async execute({ category, cityOrigin, id, name }: FindProductDTO): Promise<Product[]> {
		let products: Product[] = [];

		if (id) {
			const product = await this.productsRepository.findById(id);
			if (!product) {
				throw new HttpException("There is no product with the given ID", HttpStatus.NOT_FOUND);
			}

			products.push(product);
		} else if (category) {
			products = await this.productsRepository.findByCategory(category);
		} else if (cityOrigin) {
			products = await this.productsRepository.findByCityOrigin(cityOrigin);
		} else if (name) {
			products = await this.productsRepository.findByNameAll(name);
		} else {
			throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
		}
		return products;
	}
}
