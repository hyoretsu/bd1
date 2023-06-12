import OrderItem from "./OrderItem";
import OrderPayment from "./OrderPayment";

export default class Order {
	id!: string;
	clientId!: string;
	sellerId!: string;
	items!: OrderItem[];
	payment!: OrderPayment;
	createdAt!: Date;
}
