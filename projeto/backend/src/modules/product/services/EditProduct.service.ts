import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import UpdateProductDTO from "../dtos/UpdateProduct";
import Product from "../entities/Product";
import ProductRepository from "../repositories/products.repository";

@Injectable()
export default class EditProduct {
	constructor(private productRepository: ProductRepository) {}

	public async execute({ id, name, category, ...data }: UpdateProductDTO): Promise<Product> {
		let product = await this.productRepository.findById(id);
		if (!product) {
			throw new HttpException("This product does not exist", HttpStatus.NOT_FOUND);
		}

		product = await this.productRepository.update({
			...data,
			id,
			name,
			category,
		});

		return product;
	}
}
