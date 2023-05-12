import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";

import ClientsController from "./infra/http/controllers/clients.controller";
import PostgresClientsRepository from "./infra/postgres/repositories/clients.repository";
import ClientsRepository from "./repositories/clients.repository";
import CreateClient from "./services/CreateClient.service";
import FindClient from "./services/FindClients.service";

@Module({
	imports: [DatabaseModule],
	controllers: [ClientsController],
	providers: [
		{
			provide: ClientsRepository,
			useClass: PostgresClientsRepository,
		},
		...[CreateClient, FindClient],
	],
})
export default class ClientsModule {}
