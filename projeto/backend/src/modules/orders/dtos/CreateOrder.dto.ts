import { Type } from "class-transformer";
import { IsIn, IsNotEmpty, IsString, IsUUID, ValidateNested } from "class-validator";

import Order from "../entities/Order";
import OrderItem from "../entities/OrderItem";
import CreateOrderItemDTO from "./CreateOrderItem.dto";

export default class CreateOrderDTO implements Partial<Order> {
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	clientId!: string;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	sellerId!: string;

	@IsNotEmpty()
	@ValidateNested({ each: true })
	@Type(() => CreateOrderItemDTO)
	items!: OrderItem[];

	@IsNotEmpty()
	@IsString()
	@IsIn(["Berry", "Boleto", "Cartão", "Pix"])
	paymentMethod!: string;
}
