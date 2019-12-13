import { Dish } from "./dish";

export class Menu {

    public dishes: Dish[];

    constructor(){
        this.dishes = [];
    }

    public getDishes(): Dish[]{
        return this.dishes;
    }

    public setDishes(dishes: Dish[]): void{
        this.dishes = dishes;
    }
}