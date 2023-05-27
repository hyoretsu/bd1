import CreateSellerDTO from "../dtos/CreateSeller.dto";
import Seller from "../entities/Seller";

export default abstract class SellersRepository {
	abstract create(data: CreateSellerDTO): Promise<Seller>;
	abstract findByEmail(email: string): Promise<Seller | null>;
	abstract findByPhoneNumber(phoneNumber: string): Promise<Seller | null>;
}
