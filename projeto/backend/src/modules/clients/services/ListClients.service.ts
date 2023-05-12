import { Injectable } from "@nestjs/common";

import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class ListClients {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute(): Promise<Client[]> {
		const clients = await this.clientsRepository.findAll();

		return clients;
	}
}
