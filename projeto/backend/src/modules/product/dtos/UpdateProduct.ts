import { IsEmail, IsNumber, IsOptional, IsString, IsUUID, Min } from "class-validator";

export default class UpdateProductDTO {

	@IsOptional()
	@IsString()
	@IsUUID()
	id?: string;

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