import { Body, Controller, Post } from "@nestjs/common";

import CreateClientDTO from "@modules/clients/dtos/CreateClient.dto";
import Client from "@modules/clients/entities/Client";
import CreateClient from "@modules/clients/services/CreateClient.service";

@Controller("clients")
export default class ClientsController {
	constructor(private createClient: CreateClient) {}

	@Post()
	async postClients(@Body() body: CreateClientDTO): Promise<Client> {
		const client = await this.createClient.execute(body);

		return client;
	}
}
