import { User } from "../entities/User";
import { UserGateway } from "../gateways/userGateway";
import { IdGeneratorGateway } from "../gateways/idGeneratorGateway";

export class SignupUC {

    constructor(private userGateway: UserGateway, private idGenerator: IdGeneratorGateway){}

    async execute(input: SignUpInput){

        await this.verifyExistingUser(input);
        await this.createUser(input);
        this.logNewUser();
    }

    async verifyExistingUser(input: SignUpInput) {
        const userExists = await this.userGateway.verifyEmailDatabase(input.email)
        if(userExists){
            throw new Error("Usuário já cadastrado.")
        }
    }

    async createUser(input: SignUpInput){
        const newUser = new User(this.idGenerator.generateID(), input.name, input.email, input.password);
        this.userGateway.createUser(newUser);
    }

    logNewUser(){
        console.log("entrei na funcao de logar usuario")
    }
}

interface SignUpInput {
    name: string
    email: string
    password: string
}

