import { IsOptional } from "@hyoretsu/decorators";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export default class EditClientDTO {
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
	name?: string;

	@IsOptional()
	@IsString()
	newPassword?: string;

	@IsOptional()
	@IsString()
	oldPassword?: string;

	@IsOptional()
	@IsBoolean()
	onePiece?: boolean;

	@IsOptional()
	@IsString()
	phoneNumber?: string;

	@IsOptional()
	@IsString()
	soccerTeam?: string;
}
