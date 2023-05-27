import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import ProductRepository from "../repositories/products.repository";
import Product from "../entities/Product";
import DeleteProductDTO from "../dtos/DeleteClient";

@Injectable()
export default class DeleteProduct {
	constructor(private productRepository: ProductRepository) {}

	public async execute({ name, id }: DeleteProductDTO): Promise<void> {
		let product: Product | null;

		if (!id) {
			if (name) {
				product = await this.productRepository.findByName(name);
			} else {
				throw new HttpException(
					"Please send at least one deletion parameter",
					HttpStatus.BAD_REQUEST,
				);
			}
		} else {
			product = await this.productRepository.findById(id);
		}

		if (!product) {
			throw new HttpException("This product does not exist", HttpStatus.NOT_FOUND);
		}

		if (!id) {
			({ id } = product);
		}

		await this.productRepository.delete(id);
	}
}