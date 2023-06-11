import CreateSellerDTO from "../dtos/CreateSeller.dto";
import EditSellerDTO from "../dtos/EditSeller.dto";
import Seller from "../entities/Seller";

export type UpdateSellerPayload = Omit<EditSellerDTO, "newPassword" | "oldPassword"> & {
	password?: string;
};

export default abstract class SellersRepository {
	abstract create(data: CreateSellerDTO): Promise<Seller>;
	abstract delete(id: string): Promise<void>;
	abstract findAll(): Promise<Seller[]>;
	abstract findByEmail(email: string): Promise<Seller | null>;
	abstract findById(id: string): Promise<Seller | null>;
	abstract findByPhoneNumber(phoneNumber: string): Promise<Seller | null>;
	abstract update(data: UpdateSellerPayload): Promise<Seller>;
}
