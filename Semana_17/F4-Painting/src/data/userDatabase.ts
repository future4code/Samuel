import { BaseDatabase } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/User";

interface UserModel {
    id: string,
    user_name: string,
    email: string,
    password: string
}

export class UserDatabase extends BaseDatabase implements UserGateway {
    
    async createUser(user: User): Promise<void> {

        const databaseModel: UserModel = {
            id: user.getId(),
            user_name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }

        await this.connection.raw(
            `INSERT INTO 
                      users (id, name, email, password) 
                  VALUES(
                      "${databaseModel.id}",
                      "${databaseModel.user_name}",
                      "${databaseModel.email}",
                      "${databaseModel.password}"
                  )`
        );
    }
    
    
    // getAllUsers(): Promise<User[]> {
    //     throw new Error("Method not implemented.");
    // }

}