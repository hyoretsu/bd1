import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

import CreateProductDTO from "@modules/product/dtos/CreateProduct";
import DeleteProductDTO from "@modules/product/dtos/DeleteClient";
import FindProductDTO from "@modules/product/dtos/FindProduct";
import UpdateProductDTO from "@modules/product/dtos/UpdateProduct";
import Product from "@modules/product/entities/Product";
import CreateProduct from "@modules/product/services/CreateProduct.service";
import DeleteProduct from "@modules/product/services/DeleteProduct.service";
import EditProduct from "@modules/product/services/EditProduct.service";
import FindProduct from "@modules/product/services/FindProducts.service";
import GenerateReportProduct from "@modules/product/services/GenerateReportProducts.service";
import ListProducts from "@modules/product/services/ListProducts.service";

@Controller("products")
export default class ProductsController {
	constructor(
		private createProduct: CreateProduct,
		private deleteProducts: DeleteProduct,
		private editProduct: EditProduct,
		private findProduct: FindProduct,
		private generateReport: GenerateReportProduct,
		private listProduct: ListProducts,
	) {}

	@Delete()
	async deleteProduct(@Body() body: DeleteProductDTO): Promise<void> {
		await this.deleteProducts.execute(body);
	}

	@Get()
	async getProduct(): Promise<Product[]> {
		const product = await this.listProduct.execute();

		return product;
	}

	@Patch()
	async patchProduct(@Body() body: UpdateProductDTO): Promise<Product> {
		const product = await this.editProduct.execute(body);

		return product;
	}

	@Post()
	async postProduct(@Body() body: CreateProductDTO): Promise<Product> {
		const product = await this.createProduct.execute(body);

		return product;
	}

	@Post("find")
	async postProductFind(@Body() body: FindProductDTO): Promise<Product[]> {
		const product = await this.findProduct.execute(body);

		return product;
	}

	@Get("report")
	async getProductsReport(): Promise<any> {
		const report = await this.generateReport.execute();

		return report;
	}
}
