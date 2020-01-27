import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/User";
import knex from "knex";

export class UserDatabase implements UserGateway {

    private connection: knex;

    constructor(){

        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'samuel',
                password: process.env.SENHA_BANCO,
                database: 'samuel'
            }
        });
    }

    async verifyEmailDatabase(email: string): Promise<boolean> {
        const query = await this.connection.raw(`SELECT * FROM futureBookUsers WHERE email LIKE "${email}"`);
        console.log(query)
        if(query[0].length === 0) {
            return false;
        }
        return true;
    }

    async createUser(user: User): Promise<void> {
        try {
            await this.connection('futureBookUsers').insert(user);
        } catch(err) {
            console.log(err);
        }
    }
}