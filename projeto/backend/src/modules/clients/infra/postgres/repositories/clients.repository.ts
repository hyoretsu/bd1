import { Inject } from "@nestjs/common";
import { Pool } from "pg";

import CreateClientDTO from "@modules/clients/dtos/CreateClient.dto";
import Client from "@modules/clients/entities/Client";
import ClientsRepository from "@modules/clients/repositories/clients.repository";

export default class PostgresClientsRepository implements ClientsRepository {
	constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(
			`
            CREATE TABLE IF NOT EXISTS "Client" (
                "id" VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
                "birthCity" TEXT,
                "cpf" VARCHAR(15) UNIQUE NOT NULL,
                "email" TEXT UNIQUE NOT NULL,
                "name" TEXT NOT NULL,
                "onePiece" BOOLEAN,
                "password" TEXT NOT NULL,
                "phoneNumber" VARCHAR(15) UNIQUE NOT NULL,
                "soccerTeam" TEXT,
                "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `,
		);
	}

	public async create({
		birthCity,
		cpf,
		email,
		name,
		onePiece,
		password,
		phoneNumber,
		soccerTeam,
	}: CreateClientDTO): Promise<Client> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(
			`INSERT INTO
                "Client" (
                    ${birthCity ? '"birthCity",' : ""}
                    cpf,
                    email,
                    name,
                    ${onePiece ? '"onePiece",' : ""}
                    password,
                    "phoneNumber"
                    ${soccerTeam ? ',"soccerTeam"' : ""}
                )
            VALUES
                (
                    ${birthCity ? `'${birthCity}',` : ""}
                    '${cpf}',
                    '${email}',
                    '${name}',
                    ${onePiece ? `'${onePiece}',` : ""}
                    '${password}',
                    '${phoneNumber}'
                    ${soccerTeam ? `,'${soccerTeam}'` : ""}
                ) RETURNING *
            `,
		);

		return client;
	}

	public async findByCpf(cpf: string): Promise<Client | null> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`SELECT * FROM "Client" WHERE cpf = '${cpf}'`);

		return client;
	}

	public async findByEmail(email: string): Promise<Client | null> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`SELECT * FROM "Client" WHERE email = '${email}'`);

		return client;
	}

	public async findByName(name: string): Promise<Client[]> {
		const { rows: clients } = await this.pg.query<Client>(
			`SELECT * FROM "Client" WHERE "name" ILIKE '%${name}%'`,
		);

		return clients;
	}

	public async findByPhoneNumber(phoneNumber: string): Promise<Client | null> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`SELECT * FROM "Client" WHERE "phoneNumber" = '${phoneNumber}'`);

		return client;
	}
}
