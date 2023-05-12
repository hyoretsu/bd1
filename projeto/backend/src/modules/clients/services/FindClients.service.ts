import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import FindClientsDTO from "../dtos/FindClients.dto";
import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class FindClient {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute({ cpf, email, id, name, phoneNumber }: FindClientsDTO): Promise<Client[]> {
		let clients: Client[] = [];

		if (!name) {
			let client: Client | null;

			if (cpf) {
				client = await this.clientsRepository.findByCpf(cpf);
			} else if (email) {
				client = await this.clientsRepository.findByEmail(email);
			} else if (id) {
				client = await this.clientsRepository.findById(id);
			} else if (phoneNumber) {
				client = await this.clientsRepository.findByPhoneNumber(phoneNumber);
			} else {
				throw new HttpException("Please send at least one search parameter", HttpStatus.BAD_REQUEST);
			}

			if (!client) {
				throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
			}

			clients.push(client);
		} else {
			clients = await this.clientsRepository.findByName(name);
		}

		return clients;
	}
}
