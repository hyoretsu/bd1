import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";

import EditClientDTO from "../dtos/EditClient.dto";
import Client from "../entities/Client";
import HashProvider from "../providers/HashProvider";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class EditClient {
	constructor(private clientsRepository: ClientsRepository, private hashProvider: HashProvider) {}

	public async execute({ id, newPassword, oldPassword, ...data }: EditClientDTO): Promise<Client> {
		let client = await this.clientsRepository.findById(id);
		if (!client) {
			throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
		}

		if (oldPassword && newPassword) {
			const samePassword = await this.hashProvider.compareHash(oldPassword, client.password);
			if (!samePassword) {
				throw new HttpException("Invalid password", HttpStatus.FORBIDDEN);
			}
		}

		client = await this.clientsRepository.update({
			...data,
			id,
			...(newPassword && { password: await this.hashProvider.generateHash(newPassword) }),
		});

		return client;
	}
}
