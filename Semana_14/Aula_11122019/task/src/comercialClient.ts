import { Trade } from "./trade";
import { Client } from "./client";

export class ComercialClient extends Trade implements Client{
    
    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number = 0; //energia consumida, em kWh

    constructor(comName: string, cnpj: string, cep: string, clientName: string, clientNumber: number){
        super(comName, cnpj, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public setConsumedEnergy(energy: number): void {
        this.consumedEnergy = energy;
    }
}