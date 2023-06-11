import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";

import HashProvider, { hashProviderImplementations } from "../shared/providers/HashProvider";
import SellersController from "./infra/http/controllers/sellers.controller";
import PostgresSellersRepository from "./infra/postgres/repositories/sellers.repository";
import SellersRepository from "./repositories/sellers.repository";
import CreateSeller from "./services/CreateSeller.service";
import DeleteSeller from "./services/DeleteSeller.service";
import EditSeller from "./services/EditSeller.service";
import ListSellers from "./services/ListSellers.service";

@Module({
	imports: [DatabaseModule],
	controllers: [SellersController],
	providers: [
		{
			provide: SellersRepository,
			useClass: PostgresSellersRepository,
		},
		{
			provide: HashProvider,
			useClass: hashProviderImplementations["bcrypt"],
		},
		...[CreateSeller, DeleteSeller, EditSeller, ListSellers],
	],
})
export default class SellersModule {}
