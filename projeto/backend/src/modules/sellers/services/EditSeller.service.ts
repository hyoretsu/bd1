import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import HashProvider from "../../shared/providers/HashProvider";
import EditSellerDTO from "../dtos/EditSeller.dto";
import Seller from "../entities/Seller";
import SellersRepository from "../repositories/sellers.repository";

@Injectable()
export default class EditSeller {
	constructor(private sellersRepository: SellersRepository, private hashProvider: HashProvider) {}

	public async execute({ id, newPassword, oldPassword, ...data }: EditSellerDTO): Promise<Seller> {
		let seller = await this.sellersRepository.findById(id);
		if (!seller) {
			throw new HttpException("This seller does not exist", HttpStatus.NOT_FOUND);
		}

		if (newPassword) {
			if (!oldPassword) {
				throw new HttpException(
					"You need to confirm your old password in order to change it",
					HttpStatus.FORBIDDEN,
				);
			}

			const samePassword = await this.hashProvider.compareHash(oldPassword, seller.password);
			if (!samePassword) {
				throw new HttpException("Invalid password", HttpStatus.FORBIDDEN);
			}
		}

		seller = await this.sellersRepository.update({
			...data,
			id,
			...(newPassword && { password: await this.hashProvider.generateHash(newPassword) }),
		});

		return seller;
	}
}
