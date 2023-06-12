import CreateItemDTO from "../dtos/CreateItem.dto";
import Item from "../entities/Item";

export default abstract class ItemsRepository {
	abstract create(data: CreateItemDTO): Promise<Item>;
	abstract findById(id: string): Promise<Item | null>;
	abstract findExisting(data: Pick<CreateItemDTO, "productId" | "sellerId">): Promise<Item | null>;
}
