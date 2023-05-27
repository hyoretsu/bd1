import Product from "../entities/Product";
import CreateProductDTO from "../dtos/CreateProduct";
import UpdateProductDTO from "../dtos/UpdateProduct";


export type ReportData = {
	originCityCount: Record<"cityOrigin" | "count", string>[];
	categoryCount: Record<"category" | "count", string>[];
	total: string;
};

export default abstract class ProductRepository {
	abstract create(data: CreateProductDTO): Promise<Product>;
	abstract delete(id: string): Promise<void>;
	abstract findAll(): Promise<Product[]>;
	abstract findById(id: string): Promise<Product | null>;
	abstract findByName(name: string): Promise<Product | null>;
	abstract findByNameAll(name: string): Promise<Product[]>;
	abstract findByCategory(category: string): Promise<Product[]>;
    abstract findByCityOrigin(cityOrigin: string): Promise<Product[]>;
	abstract generateReportData(): Promise<ReportData>;
	abstract update(data: UpdateProductDTO): Promise<Product>;
}