import { Mission } from "./mission";

export class MobileMission extends Mission {

    protected static missionGeneralNumber: number = 0;
    protected missionNumber: number;

    constructor(startDate: string, finishDate: string){
        super(startDate, finishDate);
        //incrementa o geral, estático, pra cada turma desse tipo:
        MobileMission.missionGeneralNumber++;
        // determina o num da turma:
        this.missionNumber = MobileMission.missionGeneralNumber; 
    }
}