import { IsOptional } from "@hyoretsu/decorators";
import { IsNotEmpty, IsPhoneNumber, IsString, IsUrl } from "class-validator";

import Seller from "../entities/Seller";

export default class CreateSellerDTO implements Partial<Seller> {
	@IsNotEmpty()
	@IsString()
	email!: string;

	@IsOptional()
	@IsString()
	@IsUrl()
	logoUrl?: string;

	@IsNotEmpty()
	@IsString()
	name!: string;

	@IsNotEmpty()
	@IsString()
	password!: string;

	@IsNotEmpty()
	@IsString()
	@IsPhoneNumber("BR")
	phoneNumber!: string;
}
