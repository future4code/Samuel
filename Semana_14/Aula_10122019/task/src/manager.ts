import { Cashier } from "./cashier";

export class Manager extends Cashier {

    protected job: string = "Gerente";

    constructor(name: string, salary:number, job: string){
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Meu cargo é:", this.job);
    }
}