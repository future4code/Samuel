export abstract class Employee {

    protected name: string;
    protected salary: number;
    public static numberOfEmployee: number = 0;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
        Employee.numberOfEmployee++;
    }

    public abstract sayJob(): void
    public sayMyName(): void {
        console.log(`Oi, meu nome é ${this.name}`);
    }
}