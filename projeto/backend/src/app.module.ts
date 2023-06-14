import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import ClientsModule from "@modules/clients/clients.module";
import DatabaseModule from "@modules/database/database.module";
import OrdersModule from "@modules/orders/orders.module";
import ProductModule from "@modules/product/products.module";
import SellersModule from "@modules/sellers/sellers.module";

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
		DatabaseModule,
		OrdersModule,
		ProductModule,
		SellersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
