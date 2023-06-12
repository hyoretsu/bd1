import Item from "./Item";

export default class Seller {
	id!: string;
	email!: string;
	logoUrl!: string;
	name!: string;
	password!: string;
	phoneNumber!: string;
	stock!: Item[];
	createdAt!: Date;
}
