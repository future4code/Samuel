import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {

    public clientName: string;
    public clientNumber: number;
    public consumedEnergy: number = 0; //energia consumida, em kWh

    constructor(resName:string, cpf: string, cep: string, clientName: string, clientNumber: number){        
        super(resName, cpf, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }
    
    public calculateBill(): number{
        return this.consumedEnergy * 0.75;
    }

    public setConsumedEnergy(energy: number): void {
        this.consumedEnergy = energy;
    }
}