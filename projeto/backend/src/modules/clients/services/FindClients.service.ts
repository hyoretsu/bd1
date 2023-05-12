import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import FindClientsDTO from "../dtos/FindClients.dto";
import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class FindClient {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute({ name }: FindClientsDTO): Promise<Client[]> {
		let clients: Client[] = [];

		if (name) {
			clients = await this.clientsRepository.findByName(name);
		} else {
			throw new HttpException("Please send at least one search parameter", HttpStatus.BAD_REQUEST);
		}

		return clients;
	}
}
