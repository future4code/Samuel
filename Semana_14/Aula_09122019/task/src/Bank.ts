import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFilemanager";

export class Bank {

    private accounts: UserAccount[];
    private fileManager: JSONFileManager

    constructor(fileName: string) {
        this.accounts = [];
        this.fileManager = new JSONFileManager(fileName);
        this.fileManager.writeObjetcToFile(this.accounts);
    }

    public createAccount (name: string, cpf:string, age:number) {
        if(age < 18) {
            console.log("Idade deve ser maior ou igual a 18 anos.");
        }
        else {
            this.accounts = this.getAllAccounts();
            this.accounts.push(new UserAccount(name, cpf, age));
            this.saveAccounts();
            console.log("Conta criada com sucesso!");
        }
    }

    public getAllAccounts() {
        this.accounts = this.fileManager.getObjectFromFile();
        return this.accounts;
    }

    public getAllAccountsByCpf(cpf: string) {
        return this.accounts.map((account)=> {
            return (account.getCpf() === cpf)
        })
    }

    private saveAccounts() {
        this.fileManager.writeObjetcToFile(this.accounts);
    }
}