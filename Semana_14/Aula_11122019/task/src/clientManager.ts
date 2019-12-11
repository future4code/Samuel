import { Client } from "./client";

export class ClientManager {

    public clients: Client[];
    public static clientQuantity: number = 0

    public addToClients(client: Client): void {
        this.clients.push(client);
        ClientManager.clientQuantity++;
    }

    public getClientsQuantity(): number {
        return ClientManager.clientQuantity;
    }

    

}