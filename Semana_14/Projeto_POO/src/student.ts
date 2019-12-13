import { User } from "./user";
import { Mission } from "./mission";

export class Student implements User {

    name: string;
    email: string;
    birthDate: string; // no formato "DD/MM/YYYY"
    mission: Mission;

    constructor(name: string, email: string, birthDate: string) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
    
    public getName(): string{
        return this.name;
    }
    public setName(newName: string): void {
        if(newName){
            this.name = newName;
        }
        else{
            console.log("Nome não pode ser vazio");
        }
    }

    public setMission(mission: Mission): void {
        if(mission) {
            this.mission = mission;
        }
        else {
            console.log("Não foi possível determinar a turma.");
        }
    }
}