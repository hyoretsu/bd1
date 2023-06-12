import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from "class-validator";

import OrderItem from "../entities/OrderItem";

export default class CreateOrderItemDTO implements Partial<OrderItem> {
	@IsNotEmpty()
	@IsNumber()
	@Min(1)
	amount!: number;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	itemId!: string;
}
