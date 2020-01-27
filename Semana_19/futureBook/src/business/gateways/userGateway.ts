import { User } from "../entities/User";

export interface UserGateway {
    verifyEmailDatabase(email: string): Promise<boolean>;
    createUser(user: User): void;
}