import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

import Item from "../entities/Item";

export default class CreateItemDTO implements Partial<Item> {
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	productId!: string;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	sellerId!: string;

	@IsNotEmpty()
	@IsNumber()
	amount!: number;

	@IsNotEmpty()
	@IsNumber()
	price!: number;
}
