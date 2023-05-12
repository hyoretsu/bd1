import { IsOptional } from "@hyoretsu/decorators";
import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export default class DeleteClientDTO {
	@IsOptional()
	@IsString()
	cpf?: string;

	@IsOptional()
	@IsString()
	@IsEmail()
	email?: string;

	@IsOptional()
	@IsString()
	@IsUUID()
	id?: string;

	@IsOptional()
	@IsString()
	phoneNumber?: string;
}
