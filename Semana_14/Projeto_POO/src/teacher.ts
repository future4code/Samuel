import { User } from "./user";
import { Expertise } from "./expertise";

export class Teacher implements User {

    name: string;
    email: string;
    birthDate: string; // no formato "DD/MM/YYYY"
    expertise: Expertise[];

    constructor(name: string, email: string, birthDate: string) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.expertise = [];
    }
    
    public getName(): string {
        return this.name;
    }
    public setName(newName: string): void {
        if(newName) {
            this.name = newName;
        }
        else {
            console.log("Nome não pode ser vazio.");
        }
    }

    public setExpertise (newExpertise: Expertise): void {
        if(newExpertise) {
            this.expertise.push(newExpertise);
        }
        else {
            console.log("Especialidade não pode ser vazia.");
        }
    }
}