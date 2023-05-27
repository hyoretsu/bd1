import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export default class CreateProductDTO {

	@IsNotEmpty()
	@IsString()
	name!: string;

	@IsNotEmpty()
	@IsString()
	category!: string;

	@IsNotEmpty()
	@IsString()
	cityOrigin!: string;;
}