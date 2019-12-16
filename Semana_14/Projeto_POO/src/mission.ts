import { Teacher } from "./teacher";
import { Student } from "./student";
import { User } from "./user";

export abstract class Mission {
    
    protected startDate: string;
    protected finishDate: string;
    protected teachers: Teacher[];
    protected students: Student[];
   

    constructor(start: string, finish: string){
        this.startDate = start;
        this.finishDate = finish;
        this.teachers = [];
        this.students = [];
    }

    public addUser(user: User): void{
        if(user && user instanceof Student) {
            this.students.push(user);
            console.log(`Estudante ${user.getName()} adicionado com sucesso.`);
        } else if (user && user instanceof Teacher) {
            this.teachers.push(user);
            console.log(`Professor ${user.getName()} adicionado com sucesso.`);
        } else {
            console.log("Não é possível adicionar esse tipo de usuário à turma.");
        }
    }

    public getStudents(): Student[]{
        return this.students;
    }

    public getTeachers(): Teacher[]{
        return this.teachers;
    }
}