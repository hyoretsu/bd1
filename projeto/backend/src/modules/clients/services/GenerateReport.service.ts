import { Injectable } from "@nestjs/common";

import ClientsRepository from "../repositories/clients.repository";

export interface ClientReport {
	birthCity: Array<[string, number]>;
	onePiece: Record<"yes" | "no", number>;
	soccerTeam: Array<[string, number]>;
	total: number;
}

@Injectable()
export default class GenerateReport {
	constructor(private clientsRepository: ClientsRepository) {}

	public async execute(): Promise<ClientReport> {
		const { birthCityCount, onePieceCount, soccerTeamCount, total } =
			await this.clientsRepository.generateReportData();

		const report = {
			total: Number(total),
			birthCity: birthCityCount.map(value => [value.birthCity, Number(value.count)]),
			onePiece: onePieceCount.reduce(
				(obj, value) => ({
					...obj,
					[value.onePiece ? "yes" : "no"]: Number(value.count),
				}),
				{},
			),
			soccerTeam: soccerTeamCount.map(value => [value.soccerTeam, Number(value.count)]),
		} as ClientReport;

		return report;
	}
}
