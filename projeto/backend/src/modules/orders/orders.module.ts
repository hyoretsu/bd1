import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";

import OrdersController from "./infra/http/controllers/orders.controller";
import PostgresOrdersRepository from "./infra/postgres/repositories/orders.repository";
import OrdersRepository from "./repositories/orders.repository";
import CreateOrder from "./services/CreateOrder.service";

@Module({
	imports: [DatabaseModule],
	controllers: [OrdersController],
	providers: [
		{
			provide: OrdersRepository,
			useClass: PostgresOrdersRepository,
		},
		...[CreateOrder],
	],
})
export default class OrdersModule {}
