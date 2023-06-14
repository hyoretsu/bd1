import { IsDateString, IsNotEmpty, IsString, IsUUID } from "class-validator";

export default class GenerateReportDTO {
	@IsNotEmpty()
	@IsDateString()
	month!: Date;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	sellerId!: string;
}
