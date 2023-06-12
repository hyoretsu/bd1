import { Inject } from "@nestjs/common";
import { Pool } from "pg";

import CreateOrderDTO from "@modules/orders/dtos/CreateOrder.dto";
import CreateOrderPaymentDTO from "@modules/orders/dtos/CreateOrderPayment.dto";
import Order from "@modules/orders/entities/Order";
import OrderItem from "@modules/orders/entities/OrderItem";
import OrderPayment from "@modules/orders/entities/OrderPayment";
import OrdersRepository, { CreateOrderItemPayload } from "@modules/orders/repositories/orders.repository";

export default class PostgresOrdersRepository implements OrdersRepository {
	constructor(@Inject("PG_CONNECTION") private pg: Pool) {
		this.setup();
	}

	private async setup(): Promise<void> {
		await this.pg.query(`
            CREATE TABLE IF NOT EXISTS "Order" (
                "id" VARCHAR(36) PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
                "clientId" VARCHAR(36) NOT NULL;
                "sellerId" VARCHAR(36) NOT NULL;
                "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                CONSTRAINT "Order_clientId_fkey" FOREIGN KEY("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                CONSTRAINT "Order_sellerId_fkey" FOREIGN KEY("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE
            );
        `);

		await this.pg.query(`
            CREATE TABLE IF NOT EXISTS "OrderItem" (
                "orderId" VARCHAR(36) NOT NULL,
                "itemId" VARCHAR(36) NOT NULL,
                "amount" INTEGER NOT NULL CHECK(amount > 0),
                "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                PRIMARY KEY("orderId", "itemId"),
                CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
                CONSTRAINT "OrderItem_itemId_fkey" FOREIGN KEY("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE
            );
        `);

		await this.pg.query(`
            CREATE TABLE IF NOT EXISTS "OrderPayment" (
                "orderId" VARCHAR(36) NOT NULL UNIQUE,
                "method" TEXT NOT NULL,
                "completed" BOOLEAN NOT NULL DEFAULT FALSE,
                "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                PRIMARY KEY("orderId", "method"),
                CONSTRAINT "OrderPayment_orderId_fkey" FOREIGN KEY("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE
            );
        `);
	}

	public async create(data: Omit<CreateOrderDTO, "items" | "paymentMethod">): Promise<Order> {
		const {
			rows: [order],
		} = await this.pg.query<Order>(`
                INSERT INTO
                    "Order" (
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

		return order;
	}

	public async createItem(data: CreateOrderItemPayload): Promise<OrderItem> {
		const {
			rows: [orderItem],
		} = await this.pg.query<OrderItem>(`
                INSERT INTO
                    "OrderItem" (
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

		return orderItem;
	}

	public async createPayment(data: CreateOrderPaymentDTO): Promise<OrderPayment> {
		const {
			rows: [orderPayment],
		} = await this.pg.query<OrderPayment>(`
                INSERT INTO
                    "OrderPayment" (
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

		return orderPayment;
	}
}
