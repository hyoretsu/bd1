import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import DeleteSellerDTO from "../dtos/DeleteSeller.dto";
import Seller from "../entities/Seller";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class DeleteSeller {
	constructor(private sellersRepository: SellersRepository) {}

	public async execute({ email, id, phoneNumber }: DeleteSellerDTO): Promise<void> {
		let seller: Seller | null;

		if (!id) {
			if (email) {
				seller = await this.sellersRepository.findByEmail(email);
			} else if (phoneNumber) {
				seller = await this.sellersRepository.findByPhoneNumber(phoneNumber);
			} else {
				throw new HttpException(
					"Please send at least one deletion parameter",
					HttpStatus.BAD_REQUEST,
				);
			}
		} else {
			seller = await this.sellersRepository.findById(id);
		}

		if (!seller) {
			throw new HttpException("This seller does not exist", HttpStatus.NOT_FOUND);
		}

		if (!id) {
			({ id } = seller);
		}

		await this.sellersRepository.delete(id);
	}
}
