import { Module, ValueProvider } from "@nestjs/common";
import { Pool } from "pg";

const dbProvider: ValueProvider = {
	provide: "PG_CONNECTION",
	useValue: new Pool({
		host: process.env.DB_HOST || "localhost",
		port: Number(process.env.POSTGRES_PORT) || 5432,
		user: process.env.POSTGRES_USER || "postgres",
		password: process.env.POSTGRES_PASS || "postgres",
		database: process.env.DB_NAME || "thousand-sunny",
	}),
};

@Module({
	providers: [dbProvider],
	exports: [dbProvider],
})
export default class DatabaseModule {}
