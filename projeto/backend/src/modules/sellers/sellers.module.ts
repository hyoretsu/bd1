import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";

import SellersController from "./infra/http/controllers/sellers.controller";
import PostgresSellersRepository from "./infra/postgres/repositories/sellers.repository";
import SellersRepository from "./repositories/sellers.repository";
import CreateSeller from "./services/CreateSeller.service";
import ListSellers from "./services/ListSellers.service";

@Module({
	imports: [DatabaseModule],
	controllers: [SellersController],
	providers: [
		{
			provide: SellersRepository,
			useClass: PostgresSellersRepository,
		},
		...[CreateSeller, ListSellers],
	],
})
export default class SellersModule {}
