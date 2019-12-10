import { Cashier } from "./cashier";
import { Employees } from "./employees";
import { Chef } from "./chef";

export class Manager extends Cashier {

    protected job: string = "Gerente";
    protected list: Employees = new Employees();

    constructor(name: string, salary:number, job: string){
        super(name, salary);
    }

    public sayJob(): void {
        console.log("Meu cargo é:", this.job);
    }

    public createEmployee(name: string, salary: number, job: string) {
        
        switch(job) {
            case "Chef": {
                const tempEmployees = this.list.getEmployees()
                const newChef:Chef = new Chef(name, salary);
                tempEmployees.push(newChef);
                this.list.setEmployees(tempEmployees);
            }
            break;
            case "Cashier": {
                const tempEmployees = this.list.getEmployees()
                const newCashier:Cashier = new Cashier(name, salary);
                tempEmployees.push(newCashier);
                this.list.setEmployees(tempEmployees);
            }
            break;
            default:
                console.log("Cargo desconhecido.");
        }
    }
}