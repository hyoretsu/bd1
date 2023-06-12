import { Inject } from "@nestjs/common";
import { Pool } from "pg";

import CreateItemDTO from "@modules/sellers/dtos/CreateItem.dto";
import Item from "@modules/sellers/entities/Item";
import ItemsRepository from "@modules/sellers/repositories/items.repository";

export default class PostgresSellersRepository implements ItemsRepository {
	constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(`
                CREATE TABLE IF NOT EXISTS "Item" (
                    "id" VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
                    "productId": VARCHAR(36),
                    "sellerId": VARCHAR(36),
                    "amount": INTEGER NOT NULL CHECK(amount >= 0),
                    "price": FLOAT NOT NULL CHECK(price >= 0),
                    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                    CONSTRAINT "Item_productId_fkey" FOREIGN KEY("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                    CONSTRAINT "Item_sellerId_fkey" FOREIGN KEY("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE
                );
            `);
	}

	public async create(data: CreateItemDTO): Promise<Item> {
		const {
			rows: [item],
		} = await this.pg.query<Item>(`
                INSERT INTO
                    "Item" (
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

		return item;
	}

	public async findExisting({
		productId,
		sellerId,
	}: Pick<CreateItemDTO, "productId" | "sellerId">): Promise<Item | null> {
		const {
			rows: [item],
		} = await this.pg.query<Item>(`
            SELECT
                *
            FROM
                "Seller"
            WHERE
                "productId" = '${productId}'
                AND "sellerId" = '${sellerId}'
        `);

		return item;
	}
}
