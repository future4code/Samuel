import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {

    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number = 0; //energia consumida, em kWh

    constructor(indName:string, indNumber: string, cep: string, clientName: string, clientNumber: number){        
        super(indName, indNumber, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }
    
    public calculateBill(): number{
        return (this.consumedEnergy * 0.45) + 10000;
    }

    public setConsumedEnergy(energy: number): void {
        this.consumedEnergy = energy;
    }
}