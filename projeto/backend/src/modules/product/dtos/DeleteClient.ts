import { IsOptional, IsString, IsUUID } from "class-validator";

export default class DeleteProductDTO {

	@IsOptional()
	@IsString()
	@IsUUID()
	id?: string;

	@IsOptional()
	@IsString()
	name?: string;
}