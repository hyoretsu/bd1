import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import ProductRepository from "../repositories/products.repository";
import CreateProductDTO from "../dtos/CreateProduct";
import Product from "../entities/Product";



@Injectable()
export default class CreateProduct {
	constructor(private productRepository: ProductRepository) {}

	public async execute({ name, category, cityOrigin, ...data }: CreateProductDTO): Promise<Product> {

		const sameName = await this.productRepository.findByName(name);
		if (sameName) {
			throw new HttpException("There is already a product with this name", HttpStatus.CONFLICT);
		}

		const product = await this.productRepository.create({
			...data,
			name,
			category,
			cityOrigin
		});

		return product;
	}

}