import { Transaction } from "./Transaction";

export class UserAccount {

    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    transactions: Transaction[];

    public getBalance(){

    }

    public addBalance(balance: number){
        this.balance += balance;
        console.log(`Depósito realizado com sucesso.\nNovo saldo: ${this.balance}`)
    }

}