import CreateClientDTO from "../dtos/CreateClient.dto";
import Client from "../entities/Client";

export default abstract class ClientsRepository {
	abstract create(data: CreateClientDTO): Promise<Client>;
	abstract findByCpf(cpf: string): Promise<Client | null>;
	abstract findByEmail(email: string): Promise<Client | null>;
	abstract findByName(name: string): Promise<Client[]>;
	abstract findByPhoneNumber(phoneNumber: string): Promise<Client | null>;
}
