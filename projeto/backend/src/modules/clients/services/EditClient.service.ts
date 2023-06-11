import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import HashProvider from "../../shared/providers/HashProvider";
import EditClientDTO from "../dtos/EditClient.dto";
import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class EditClient {
	constructor(private clientsRepository: ClientsRepository, private hashProvider: HashProvider) {}

	public async execute({ id, newPassword, oldPassword, ...data }: EditClientDTO): Promise<Client> {
		let client = await this.clientsRepository.findById(id);
		if (!client) {
			throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
		}

		if (newPassword) {
			if (!oldPassword) {
				throw new HttpException(
					"You need to confirm your old password in order to change it",
					HttpStatus.FORBIDDEN,
				);
			}

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
