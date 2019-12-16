import { Mission } from "./mission";

export class WebMission extends Mission {

    protected patronum: string;

    constructor(startDate: string, finishDate: string, patronum: string){
        super(startDate, finishDate);
        this.patronum = patronum;
    }
}