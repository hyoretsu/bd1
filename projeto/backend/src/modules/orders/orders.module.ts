import { Module } from "@nestjs/common";

import PostgresClientsRepository from "@modules/clients/infra/postgres/repositories/clients.repository";
import ClientsRepository from "@modules/clients/repositories/clients.repository";
import DatabaseModule from "@modules/database/database.module";
import PostgresItemsRepository from "@modules/sellers/infra/postgres/repositories/items.repository";
import PostgresSellersRepository from "@modules/sellers/infra/postgres/repositories/sellers.repository";
import ItemsRepository from "@modules/sellers/repositories/items.repository";
import SellersRepository from "@modules/sellers/repositories/sellers.repository";

import OrdersController from "./infra/http/controllers/orders.controller";
import PostgresOrdersRepository from "./infra/postgres/repositories/orders.repository";
import OrdersRepository from "./repositories/orders.repository";
import CreateOrder from "./services/CreateOrder.service";
import DeleteOrder from "./services/DeleteOrder.service";
import GenerateReport from "./services/GenerateReport.service";
import ListOrders from "./services/ListOrders.service";

@Module({
	imports: [DatabaseModule],
	controllers: [OrdersController],
	providers: [
		{
			provide: ClientsRepository,
			useClass: PostgresClientsRepository,
		},
		{
			provide: ItemsRepository,
			useClass: PostgresItemsRepository,
		},
		{
			provide: OrdersRepository,
			useClass: PostgresOrdersRepository,
		},
		{
			provide: SellersRepository,
			useClass: PostgresSellersRepository,
		},
		...[CreateOrder, DeleteOrder, GenerateReport, ListOrders],
	],
})
export default class OrdersModule {}
