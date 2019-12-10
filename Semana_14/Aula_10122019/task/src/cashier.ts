import { Employee } from "./employee";
import { Dish } from "./dish";

export class Cashier extends Employee {

    protected job:string = "Caixa";

    constructor(name: string, salary:number){
        super(name, salary);
    }

    public sayJob(){
        console.log("Meu cargo é:", this.job)
    }

    public calculateBill(comanda:Dish[]): number{
        let total = 0;
        comanda.forEach((item) => {
            total += item.getPrice();
        })
        return total;
    }
}