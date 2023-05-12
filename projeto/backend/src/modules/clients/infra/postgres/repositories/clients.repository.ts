import { Inject } from "@nestjs/common";
import { Pool } from "pg";

import CreateClientDTO from "@modules/clients/dtos/CreateClient.dto";
import Client from "@modules/clients/entities/Client";
import ClientsRepository, { UpdateClientPayload } from "@modules/clients/repositories/clients.repository";

export default class PostgresClientsRepository implements ClientsRepository {
	constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(`
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
            `);
	}

	public async create(data: CreateClientDTO): Promise<Client> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`
                INSERT INTO
                    "Client" (
                        ${Object.keys(data)
							.map(key => '"key"')
							.join(",")}
                    )
                VALUES
                    (
                        ${Object.values(data)
							.map(value => `'${value}'`)
							.join(",")}
                    ) RETURNING *
            `);

		return client;
	}

	public async delete(id: string): Promise<void> {
		await this.pg.query(`DELETE FROM "Client" WHERE id = '${id}'`);
	}

	public async findAll(): Promise<Client[]> {
		const { rows: clients } = await this.pg.query<Client>(`SELECT * FROM "Client"`);

		return clients;
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

	public async findById(id: string): Promise<Client | null> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`SELECT * FROM "Client" WHERE id = '${id}'`);

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

	public async update({ id, ...data }: UpdateClientPayload): Promise<Client> {
		const {
			rows: [client],
		} = await this.pg.query<Client>(`
                UPDATE
                    "Client"
                SET
                    ${Object.entries(data)
						.map(([key, value]) => `"${key}" = '${value}'`)
						.join(",")}
                WHERE
                    "id" = '${id}' RETURNING *
            `);

		return client;
	}
}
