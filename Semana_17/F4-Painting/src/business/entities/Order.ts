import { Paper } from "./Paper";
import { Frame } from "./Frame";
import { User } from "./User";

export class Order {

    private id?: string;
    private paper: Paper;
    private frame: Frame;
    private userId: string;
    private date?: string;

    constructor(paper: Paper, frame: Frame, userId: string, id?: string, date?: string){
        this.paper = paper;
        this.frame = frame;
        this.userId = userId;
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

    public getUserId(){
        return this.userId;
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