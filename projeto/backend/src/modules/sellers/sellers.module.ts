import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";
import PostgresProductRepository from "@modules/product/infra/postgres/repositories/products.repository";
import ProductRepository from "@modules/product/repositories/products.repository";

import HashProvider, { hashProviderImplementations } from "../shared/providers/HashProvider";
import SellersController from "./infra/http/controllers/sellers.controller";
import PostgresItemsRepository from "./infra/postgres/repositories/items.repository";
import PostgresSellersRepository from "./infra/postgres/repositories/sellers.repository";
import ItemsRepository from "./repositories/items.repository";
import SellersRepository from "./repositories/sellers.repository";
import CreateItem from "./services/CreateItem.service";
import CreateSeller from "./services/CreateSeller.service";
import DeleteSeller from "./services/DeleteSeller.service";
import EditSeller from "./services/EditSeller.service";
import ListItems from "./services/ListItems.service";
import ListSellers from "./services/ListSellers.service";

@Module({
	imports: [DatabaseModule],
	controllers: [SellersController],
	providers: [
		{
			provide: ItemsRepository,
			useClass: PostgresItemsRepository,
		},
		{
			provide: ProductRepository,
			useClass: PostgresProductRepository,
		},
		{
			provide: SellersRepository,
			useClass: PostgresSellersRepository,
		},
		{
			provide: HashProvider,
			useClass: hashProviderImplementations["bcrypt"],
		},
		...[CreateItem, CreateSeller, DeleteSeller, EditSeller, ListItems, ListSellers],
	],
})
export default class SellersModule {}
