import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import EditClientDTO from "../dtos/EditClient.dto";
import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class EditClient {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute({ id, newPassword, oldPassword, ...data }: EditClientDTO): Promise<Client> {
		let client = await this.clientsRepository.findById(id);
		if (!client) {
			throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
		}

		if ((oldPassword || newPassword) && oldPassword !== client.password) {
			throw new HttpException("Invalid password", HttpStatus.FORBIDDEN);
		}

		client = await this.clientsRepository.update({
			...data,
			id,
			password: newPassword,
		});

		return client;
	}
}
