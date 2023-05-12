import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { hash } from "bcrypt";

import CreateClientDTO from "../dtos/CreateClient.dto";
import Client from "../entities/Client";
import HashProvider from "../providers/HashProvider";
import ClientsRepository from "../repositories/clients.repository";

@Injectable()
export default class CreateClient {
	constructor(private clientsRepository: ClientsRepository, private hashProvider: HashProvider) {}

	public async execute({ cpf, email, password, phoneNumber, ...data }: CreateClientDTO): Promise<Client> {
		const sameCpf = await this.clientsRepository.findByCpf(cpf);
		if (sameCpf) {
			throw new HttpException("There is already a client with this CPF", HttpStatus.CONFLICT);
		}
		const sameEmail = await this.clientsRepository.findByEmail(email);
		if (sameEmail) {
			throw new HttpException("There is already a client with this email", HttpStatus.CONFLICT);
		}
		const samePhoneNumber = await this.clientsRepository.findByPhoneNumber(phoneNumber);
		if (samePhoneNumber) {
			throw new HttpException("There is already a client with this phone number", HttpStatus.CONFLICT);
		}

		const client = await this.clientsRepository.create({
			...data,
			cpf,
			email,
			password: await this.hashProvider.generateHash(password),
			phoneNumber,
		});

		return client;
	}
}
