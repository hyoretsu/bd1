import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import DeleteClientDTO from "../dtos/DeleteClient.dto";
import Client from "../entities/Client";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class DeleteClient {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute({ cpf, email, id, phoneNumber }: DeleteClientDTO): Promise<void> {
		let client: Client | null;

		if (!id) {
			if (cpf) {
				client = await this.clientsRepository.findByCpf(cpf);
			} else if (email) {
				client = await this.clientsRepository.findByEmail(email);
			} else if (phoneNumber) {
				client = await this.clientsRepository.findByPhoneNumber(phoneNumber);
			} else {
				throw new HttpException(
					"Please send at least one deletion parameter",
					HttpStatus.BAD_REQUEST,
				);
			}
		} else {
			client = await this.clientsRepository.findById(id);
		}

		if (!client) {
			throw new HttpException("This user does not exist", HttpStatus.NOT_FOUND);
		}

		if (!id) {
			({ id } = client);
		}

		await this.clientsRepository.delete(id);
	}
}
