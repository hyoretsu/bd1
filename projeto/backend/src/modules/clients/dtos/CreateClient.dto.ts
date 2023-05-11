import { IsOptional } from "@hyoretsu/decorators";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class CreateClientDTO {
	@IsOptional()
	@IsString()
	birthCity?: string;

	@IsNotEmpty()
	@IsString()
	cpf!: string;

	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email!: string;

	@IsNotEmpty()
	@IsString()
	name!: string;

	@IsOptional()
	@IsBoolean()
	onePiece?: boolean;

	@IsNotEmpty()
	@IsString()
	password!: string;

	@IsNotEmpty()
	@IsString()
	phoneNumber!: string;

	@IsOptional()
	@IsString()
	soccerTeam?: string;
}
