import CreateOrderDTO from "../dtos/CreateOrder.dto";
import CreateOrderItemDTO from "../dtos/CreateOrderItem.dto";
import CreateOrderPaymentDTO from "../dtos/CreateOrderPayment.dto";
import Order from "../entities/Order";
import OrderItem from "../entities/OrderItem";
import OrderPayment from "../entities/OrderPayment";
import { OrdersReport } from "../services/GenerateReport.service";

export interface CreateOrderItemPayload extends CreateOrderItemDTO {
	orderId: string;
	totalPrice: number;
}

export default abstract class OrdersRepository {
	abstract create(data: Omit<CreateOrderDTO, "items" | "paymentMethod">): Promise<Order>;
	abstract createItem(data: CreateOrderItemPayload): Promise<OrderItem>;
	abstract createPayment(data: CreateOrderPaymentDTO): Promise<OrderPayment>;
	abstract delete(id: string): Promise<void>;
	abstract findById(id: string): Promise<Order | null>;
	abstract findOrdersBySeller(id: string): Promise<Order[]>;
	abstract generateReportData(sellerId: string): Promise<OrdersReport[]>;
}
