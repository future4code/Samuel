import { Transaction } from "./Transaction";

export class UserAccount {    

    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    transactions: Transaction[];

    constructor(name: string, cpf:string, age:number) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
    }    

    public getBalance(name: string, cpf: string) {
        if(name === this.name && cpf === this.cpf) {
            return this.balance;
        } else {
            console.log("Nome e/ou CPF inválidos.");
        }
    }

    public addBalance(balance: number){
        this.balance += balance;
        console.log(`Depósito realizado com sucesso.\nNovo saldo: ${this.balance}`)
    }

    public getCpf() {
        return this.cpf;
    }
}