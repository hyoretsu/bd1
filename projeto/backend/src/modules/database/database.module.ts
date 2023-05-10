import { Module, ValueProvider } from "@nestjs/common";
import { Pool } from "pg";

const dbProvider: ValueProvider = {
	provide: "PG_CONNECTION",
	useValue: new Pool({
		host: process.env.DB_HOST,
		port: Number(process.env.POSTGRES_PORT),
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASS,
		database: process.env.DB_NAME,
	}),
};

@Module({
	providers: [dbProvider],
	exports: [dbProvider],
})
export default class DatabaseModule {}
