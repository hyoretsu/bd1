import { IsOptional } from "@hyoretsu/decorators";
import { IsString } from "class-validator";

export default class FindClientsDTO {
	@IsOptional()
	@IsString()
	name?: string;
}
