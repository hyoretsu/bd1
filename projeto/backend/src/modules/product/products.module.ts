import { Module } from "@nestjs/common";
import ProductController from "./infra/http/controllers/products.module";
import ProductRepository from "./repositories/products.repository";
import PostgresProductRepository from "./infra/postgres/repositories/products.repository";
import CreateProduct from "./services/CreateProduct.service";
import DeleteProduct from "./services/DeleteProduct.service";
import EditProduct from "./services/EditProduct.service";
import FindProduct from "./services/FindProducts.service";
import ListProducts from "./services/ListProducts.service";
import DatabaseModule from "../database/database.module";
import GenerateReportProduct from "./services/GenerateReportProducts.service";




@Module({
	imports: [DatabaseModule],
    controllers: [ProductController],
	providers: [
		{
			provide: ProductRepository,
			useClass: PostgresProductRepository,
		},
		...[CreateProduct, DeleteProduct, EditProduct, FindProduct, GenerateReportProduct, ListProducts],
	],
})
export default class ProductModule {}