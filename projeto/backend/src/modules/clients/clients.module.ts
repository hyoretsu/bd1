import { Module } from "@nestjs/common";

import DatabaseModule from "@modules/database/database.module";

import ClientsController from "./infra/http/controllers/clients.controller";
import PostgresClientsRepository from "./infra/postgres/repositories/clients.repository";
import HashProvider, { hashProviderImplementations } from "./providers/HashProvider";
import ClientsRepository from "./repositories/clients.repository";
import CreateClient from "./services/CreateClient.service";
import DeleteClient from "./services/DeleteClient.service";
import EditClient from "./services/EditClient.service";
import FindClient from "./services/FindClients.service";
import GenerateReport from "./services/GenerateReport.service";
import ListClients from "./services/ListClients.service";

@Module({
	imports: [DatabaseModule],
	controllers: [ClientsController],
	providers: [
		{
			provide: ClientsRepository,
			useClass: PostgresClientsRepository,
		},
		{
			provide: HashProvider,
			useClass: hashProviderImplementations["bcrypt"],
		},
		...[CreateClient, DeleteClient, EditClient, FindClient, GenerateReport, ListClients],
	],
})
export default class ClientsModule {}
