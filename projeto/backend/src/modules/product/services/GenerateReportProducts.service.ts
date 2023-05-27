import { Injectable } from "@nestjs/common";
import ProductRepository from "../repositories/products.repository";

export interface ProductReport {
	cityOrigin: Record<string, number>;
	category: Record<string, number>;
	total: number;
};

@Injectable()
export default class GenerateReportProduct {
	constructor(private productsRepository: ProductRepository) {}

	public async execute(): Promise<ProductReport> {
		const { originCityCount, categoryCount, total } =
			await this.productsRepository.generateReportData();

		const report = {
			total: Number(total),
			cityOrigin: originCityCount.reduce(
				(obj, value) => ({
					...obj,
					[value.cityOrigin]: Number(value.count),
				}),
				{},
			),
			category: categoryCount.reduce(
				(obj, value) => ({
					...obj,
					[value.category]: Number(value.count),
				}),
				{},
			),
		} as ProductReport;;

		return report;
	}
}