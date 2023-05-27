import { Inject } from "@nestjs/common";
import ProductRepository, { ReportData } from "src/modules/product/repositories/products.repository";
import { Pool } from 'pg';
import CreateProductDTO from "src/modules/product/dtos/CreateProduct";
import Product from "src/modules/product/entities/Product";
import UpdateProductDTO from "src/modules/product/dtos/UpdateProduct";




export default class PostgresProductRepository implements ProductRepository {

    constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(`
                CREATE TABLE IF NOT EXISTS "Product" (
                    "id" VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
                    "name" TEXT UNIQUE NOT NULL,
                    "category" TEXT NOT NULL,
                    "cityOrigin" TEXT NOT NULL,
                    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
	}

	public async create(data: CreateProductDTO): Promise<Product> {
		const {
			rows: [product],
		} = await this.pg.query<Product>(`
                INSERT INTO
                    "Product" (
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

		return product;
	}

	public async delete(id: string): Promise<void> {
		await this.pg.query(`DELETE FROM "Product" WHERE id = '${id}'`);
	}

	public async findAll(): Promise<Product[]> {
		const { rows: products } = await this.pg.query<Product>(`SELECT * FROM "Product"`);

		return products;
	}

	public async findById(id: string): Promise<Product | null> {
		const {
			rows: [product],
		} = await this.pg.query<Product>(`SELECT * FROM "Product" WHERE id = '${id}'`);

		return product;
	}

	public async findByName(name: string): Promise<Product | null> {

		const {
			rows: [product],
		} = await this.pg.query<Product>(`SELECT * FROM "Product" WHERE "name" ILIKE '${name}'`);

		return product;
	}

	public async findByNameAll(name: string): Promise<Product[]> {
		const { rows: products } = await this.pg.query<Product>(
			`SELECT * FROM "Product" WHERE "name" ILIKE '%${name}%'`,
		);

		return products;
	}

	public async findByCategory(category: string): Promise<Product[]> {
		const { rows: products } = await this.pg.query<Product>(
			`SELECT * FROM "Product" WHERE "category" ILIKE '%${category}%'`,
		);

		return products;
	}

	public async findByCityOrigin(cityOrigin: string): Promise<Product[]> {
		const { rows: products } = await this.pg.query<Product>(
			`SELECT * FROM "Product" WHERE "cityOrigin" ILIKE '%${cityOrigin}%'`,
		);

		return products;
	}

	public async generateReportData(): Promise<ReportData> {
		const {
			rows: [{ total }],
		} = await this.pg.query(`SELECT COUNT(*) as "total" FROM "Product"`);

		const { rows: originCityCount } = await this.pg.query(
			`SELECT "cityOrigin", COUNT(*) FROM "Product" GROUP BY "cityOrigin"`,
		);

		const { rows: categoryCount } = await this.pg.query(
			`SELECT "category", COUNT(*) FROM "Product" GROUP BY "category"`,
		);

		return { originCityCount, categoryCount, total };
	}

	public async update({ id, ...data }: UpdateProductDTO): Promise<Product> {
		const {
			rows: [product],
		} = await this.pg.query<Product>(`
                UPDATE
                    "Product"
                SET
                    ${Object.entries(data)
						.map(([key, value]) => `"${key}" = '${value}'`)
						.join(",")}
                WHERE
                    "id" = '${id}' RETURNING *
            `);

		return product;
	}

}