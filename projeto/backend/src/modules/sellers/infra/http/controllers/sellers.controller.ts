import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import CreateItemDTO from "@modules/sellers/dtos/CreateItem.dto";
import CreateSellerDTO from "@modules/sellers/dtos/CreateSeller.dto";
import DeleteSellerDTO from "@modules/sellers/dtos/DeleteSeller.dto";
import Item from "@modules/sellers/entities/Item";
import Seller from "@modules/sellers/entities/Seller";
import { UpdateSellerPayload } from "@modules/sellers/repositories/sellers.repository";
import CreateItem from "@modules/sellers/services/CreateItem.service";
import CreateSeller from "@modules/sellers/services/CreateSeller.service";
import DeleteSeller from "@modules/sellers/services/DeleteSeller.service";
import EditSeller from "@modules/sellers/services/EditSeller.service";
import ListItems from "@modules/sellers/services/ListItems.service";
import ListSellers from "@modules/sellers/services/ListSellers.service";

@Controller("sellers")
export default class SellersController {
	constructor(
		private createItem: CreateItem,
		private createSeller: CreateSeller,
		private deleteSeller: DeleteSeller,
		private editSeller: EditSeller,
		private listItems: ListItems,
		private listSellers: ListSellers,
	) {}

	@Delete()
	async deleteSellers(@Body() body: DeleteSellerDTO): Promise<void> {
		await this.deleteSeller.execute(body);
	}

	@Get()
	async getSellers(): Promise<Seller[]> {
		const sellers = await this.listSellers.execute();

		return sellers;
	}

	@Patch()
	async patchSellers(@Body() body: UpdateSellerPayload): Promise<Seller> {
		const updatedSeller = await this.editSeller.execute(body);

		return updatedSeller;
	}

	@Post()
	async postSellers(@Body() body: CreateSellerDTO): Promise<Seller> {
		const seller = await this.createSeller.execute(body);

		return seller;
	}

	@Get("items")
	async getSellersItems(): Promise<Item[]> {
		const items = await this.listItems.execute();

		return items;
	}

	@Get("items/:id")
	async getSellersItemsId(@Param("id") id: string): Promise<Item[]> {
		const items = await this.listItems.execute(id);

		return items;
	}

	@Post("items")
	async postSellersItems(@Body() body: CreateItemDTO): Promise<Item> {
		const item = await this.createItem.execute(body);

		return item;
	}
}
