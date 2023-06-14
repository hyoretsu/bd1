import { IsOptional } from "@hyoretsu/decorators";
import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from "class-validator";

import Item from "../entities/Item";

export default class EditItemDTO implements Partial<Item> {
	@IsOptional()
	@IsNumber()
	@Min(0)
	amount?: number;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	itemId!: string;

	@IsOptional()
	@IsNumber()
	@Min(0)
	price?: number;
}
