import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import ClientsModule from "@modules/clients/clients.module";
import DatabaseModule from "@modules/database/database.module";
import ProductModule from "@modules/product/products.module";

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
		ClientsModule,
		ProductModule,
		DatabaseModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
