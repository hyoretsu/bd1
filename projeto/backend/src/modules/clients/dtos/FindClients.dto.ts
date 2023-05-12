import { IsOptional } from "@hyoretsu/decorators";
import { IsString } from "class-validator";

import DeleteClientDTO from "./DeleteClient.dto";

export default class FindClientsDTO extends DeleteClientDTO {
	@IsOptional()
	@IsString()
	name?: string;
}
