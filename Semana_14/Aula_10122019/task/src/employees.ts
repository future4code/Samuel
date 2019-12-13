import { Employee } from "./employee";

export class Employees {

    public employees: Employee[];

    constructor(){
        this.employees = [];
    }

    public getEmployees() {
        return this.employees;
    }

    public setEmployees(employees: Employee[]) {
        this.employees = employees;
    }
}