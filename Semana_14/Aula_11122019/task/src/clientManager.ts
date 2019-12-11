import { Client } from "./client";

export class ClientManager {

    public clients: Client[] = [];
    public static clientQuantity: number = 0

    public addToClients(client: Client): void {
        this.clients.push(client);
        ClientManager.clientQuantity++;
    }

    public getClientsQuantity(): number {
        return ClientManager.clientQuantity;
    }

    public printClientBills(): void {
        this.clients.forEach((client) => {
            console.log(`${client.clientNumber} - ${client.clientName} - ${client.calculateBill()}`);
        })
    }

    public calculateAllIncome(): number {
        let total = 0;
        this.clients.forEach((client) => {
            total += client.calculateBill()
        })
        return total;
    }
}