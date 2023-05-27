import { IsOptional } from "@hyoretsu/decorators";
import { IsEmail, IsString, IsUUID } from "class-validator";

export default class DeleteSellerDTO {
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
