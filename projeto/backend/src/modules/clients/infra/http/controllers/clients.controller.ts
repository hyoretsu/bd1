import { Body, Controller, Delete, Post } from "@nestjs/common";

import CreateClientDTO from "@modules/clients/dtos/CreateClient.dto";
import DeleteClientDTO from "@modules/clients/dtos/DeleteClient.dto";
import FindClientDTO from "@modules/clients/dtos/FindClients.dto";
import Client from "@modules/clients/entities/Client";
import CreateClient from "@modules/clients/services/CreateClient.service";
import DeleteClient from "@modules/clients/services/DeleteClient.service";
import FindClients from "@modules/clients/services/FindClients.service";

@Controller("clients")
export default class ClientsController {
	constructor(
		private createClient: CreateClient,
		private deleteClient: DeleteClient,
		private findClients: FindClients,
	) {}

	@Delete()
	async deleteClients(@Body() body: DeleteClientDTO): Promise<void> {
		await this.deleteClient.execute(body);
	}

	@Post()
	async postClients(@Body() body: CreateClientDTO): Promise<Client> {
		const client = await this.createClient.execute(body);

		return client;
	}

	@Post("find")
	async postClientsFind(@Body() body: FindClientDTO): Promise<Client[]> {
		const clients = await this.findClients.execute(body);

		return clients;
	}
}
