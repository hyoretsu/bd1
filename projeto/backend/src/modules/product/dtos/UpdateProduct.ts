import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export default class UpdateProductDTO {
	@IsNotEmpty()
	@IsString()
	@IsUUID()
	id!: string;

	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	category?: string;

	@IsOptional()
	@IsString()
	cityOrigin?: string;
}
