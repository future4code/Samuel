import * as moment from "moment";

export class Post {
    protected name: string;
    protected text: string;
    protected date: string = moment().format("DD/MM/YYYY");

    constructor(name: string, text: string){
        this.name = name;
        this.text = text;
    }
}