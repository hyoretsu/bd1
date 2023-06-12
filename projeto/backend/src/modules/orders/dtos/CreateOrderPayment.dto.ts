import { IsIn, IsNotEmpty, IsString, IsUUID } from "class-validator";

import OrderPayment from "../entities/OrderPayment";

export default class CreateOrderPaymentDTO implements Partial<OrderPayment> {
	@IsNotEmpty()
	@IsString()
	@IsIn(["Berry", "Boleto", "Cartão", "Pix"])
	method!: string;

	@IsNotEmpty()
	@IsString()
	@IsUUID()
	orderId!: string;
}
