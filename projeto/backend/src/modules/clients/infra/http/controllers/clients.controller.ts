import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";

import CreateClientDTO from "@modules/clients/dtos/CreateClient.dto";
import DeleteClientDTO from "@modules/clients/dtos/DeleteClient.dto";
import EditClientDTO from "@modules/clients/dtos/EditClient.dto";
import FindClientDTO from "@modules/clients/dtos/FindClients.dto";
import Client from "@modules/clients/entities/Client";
import CreateClient from "@modules/clients/services/CreateClient.service";
import DeleteClient from "@modules/clients/services/DeleteClient.service";
import EditClient from "@modules/clients/services/EditClient.service";
import FindClients from "@modules/clients/services/FindClients.service";
import GenerateReport from "@modules/clients/services/GenerateReport.service";
import ListClients from "@modules/clients/services/ListClients.service";

@Controller("clients")
export default class ClientsController {
	constructor(
		private createClient: CreateClient,
		private deleteClient: DeleteClient,
		private editClient: EditClient,
		private findClients: FindClients,
		private generateReport: GenerateReport,
		private listClients: ListClients,
	) {}

	@Delete()
	async deleteClients(@Body() body: DeleteClientDTO): Promise<void> {
		await this.deleteClient.execute(body);
	}

	@Get()
	async getClients(): Promise<Client[]> {
		const clients = await this.listClients.execute();

		return clients;
	}

	@Patch()
	async patchClients(@Body() body: EditClientDTO): Promise<Client> {
		const client = await this.editClient.execute(body);

		return client;
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

	@Get("report")
	async getClientsReport(): Promise<any> {
		const report = await this.generateReport.execute();

		return report;
	}
}
