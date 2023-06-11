import { IsOptional } from "@hyoretsu/decorators";
import { IsEmail, IsNotEmpty, IsString, IsUUID, IsUrl } from "class-validator";

import Seller from "../entities/Seller";

export default class EditSellerDTO implements Partial<Seller> {
	@IsOptional()
	@IsString()
	@IsEmail()
	email?: string;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	id!: string;

	@IsOptional()
	@IsString()
	@IsUrl()
	logoUrl?: string;

	@IsOptional()
	@IsString()
	name?: string;

	@IsOptional()
	@IsString()
	newPassword?: string;

	@IsOptional()
	@IsString()
	oldPassword?: string;

	@IsOptional()
	@IsString()
	phoneNumber?: string;
}
