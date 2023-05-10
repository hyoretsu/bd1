import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import DatabaseModule from "@modules/database/database.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [
				".env.local",
				".env",
				...(process.env.NODE_ENV === "production"
					? [".env.production.local", ".env.prodution"]
					: [".env.development.local", ".env.development"]),
			],
		}),
		DatabaseModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
