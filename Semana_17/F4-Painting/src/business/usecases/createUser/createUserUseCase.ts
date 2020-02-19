import { UserGateway } from "../../gateways/userGateway";
import { idGenerator } from "../createOrder/createOrderUseCase";
import { User } from "../../entities/User";
import { EncryptGateway } from "../../gateways/cryptography/encryptGateway";

export class CreateUserUseCase {

    private userGateway: UserGateway;
    private encryptGateway: EncryptGateway;
    private idGenerator: idGenerator;

    constructor(userGateway: UserGateway, encryptGateway: EncryptGateway, idGenerator: idGenerator){
        this.idGenerator = idGenerator;
        this.userGateway = userGateway;
        this.encryptGateway = encryptGateway;
    }

    async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {

        const encryptedPassword = await this.encryptGateway.encrypt(input.password);

        const user = new User(
            this.idGenerator.generate(), 
            input.name,
            input.email,
            encryptedPassword             
        )
        await this.userGateway.createUser(user);

        return {
            message: "Usuário criado com sucesso.",
            userId: user.getId()
        }
    }
}

export interface CreateUserUCInput {
    name: string;
    email: string;
    password: string;
}

export interface CreateUserUCOutput {
    message: string;
    userId: string;
}