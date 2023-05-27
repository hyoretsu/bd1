import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import Product from "../entities/Product";
import ProductRepository from "../repositories/products.repository";
import FindProductDTO from "../dtos/FindProduct";

@Injectable()
export default class FindProduct {
	constructor(private productsRepository: ProductRepository) {}


	public async execute({ category, cityOrigin, id, name }: FindProductDTO): Promise<Product[]> {

        let products: Product[] = [];

        if (id) {
            let product: Product | null;
            product = await this.productsRepository.findById(id);
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