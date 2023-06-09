import { Inject } from "@nestjs/common";
import { Pool } from "pg";

import CreateSellerDTO from "@modules/sellers/dtos/CreateSeller.dto";
import Seller from "@modules/sellers/entities/Seller";
import SellersRepository, { UpdateSellerPayload } from "@modules/sellers/repositories/sellers.repository";

export default class PostgresSellersRepository implements SellersRepository {
	constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(`
                CREATE TABLE IF NOT EXISTS "Seller" (
                    "id" VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
                    "email" TEXT UNIQUE NOT NULL,
                    "logoUrl" TEXT,
                    "name" TEXT NOT NULL,
                    "password" TEXT NOT NULL,
                    "phoneNumber" VARCHAR(15) UNIQUE NOT NULL,
                    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
	}

	public async create(data: CreateSellerDTO): Promise<Seller> {
		const {
			rows: [seller],
		} = await this.pg.query<Seller>(`
                INSERT INTO
                    "Seller" (
                        ${Object.keys(data)
							.map(key => `"${key}"`)
							.join(",")}
                    )
                VALUES
                    (
                        ${Object.values(data)
							.map(value => `'${value}'`)
							.join(",")}
                    ) RETURNING *
        `);

		return seller;
	}

	public async delete(id: string): Promise<void> {
		await this.pg.query(`DELETE FROM "Seller" WHERE id = '${id}'`);
	}

	public async findAll(): Promise<Seller[]> {
		const { rows: sellers } = await this.pg.query<Seller>(`SELECT * FROM "Seller"`);

		return sellers;
	}

	public async findByEmail(email: string): Promise<Seller | null> {
		const {
			rows: [seller],
		} = await this.pg.query<Seller>(`SELECT * FROM "Seller" WHERE email = '${email}'`);

		return seller;
	}

	public async findById(id: string): Promise<Seller | null> {
		const {
			rows: [seller],
		} = await this.pg.query<Seller>(`SELECT * FROM "Seller" WHERE id = '${id}'`);

		return seller;
	}

	public async findByPhoneNumber(phoneNumber: string): Promise<Seller | null> {
		const {
			rows: [seller],
		} = await this.pg.query<Seller>(`SELECT * FROM "Seller" WHERE "phoneNumber" = '${phoneNumber}'`);

		return seller;
	}

	public async update({ id, ...data }: UpdateSellerPayload): Promise<Seller> {
		const {
			rows: [seller],
		} = await this.pg.query<Seller>(`
                UPDATE
                    "Seller"
                SET
                    ${Object.entries(data)
						.map(([key, value]) => `"${key}" = '${value}'`)
						.join(",")}
                WHERE
                    "id" = '${id}' RETURNING *
            `);

		return seller;
	}
}
