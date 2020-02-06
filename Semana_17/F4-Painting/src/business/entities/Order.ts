import { Paper } from "./Paper";
import { Frame } from "./Frame";
import { User } from "./User";

export class Order {

    private id?: string;
    private paper: Paper;
    private frame: Frame;
    private user?: User;
    private date?: string;

    /*
    //USAR ESSE!
    const teste = ((moment.now()/1000).toFixed())
    console.log("nova data:", moment.unix(Number(teste)).format("DD/MM/YYYY - HH:mm:ss"));
    */

    constructor(paper: Paper, frame: Frame, user?: User, id?: string, date?: string){
        this.paper = paper;
        this.frame = frame;
        this.user = user;
        this.id = id;
        this.date = date;
    }

    public calculatePaperPrice(): number {
        return this.paper.calculatePrice(this.paper.getPaperSize(), this.paper.getPaperType());
    }

    public calculateFramePrice(): number {
        return this.frame.calculatePrice(this.frame.getFrameType(), this.paper, this.frame.getBorderSize());
    }   

    public calculateTotalPrice(): number {
        return this.calculatePaperPrice() + this.calculateFramePrice();
    }

    public getId(){
        return this.id;
    }

    public getUser(){
        return this.user;
    }

    public getPaper(){
        return this.paper;
    }
    public getFrame(){
        return this.frame;
    }
    public getDate(){
        return this.date;
    }

}