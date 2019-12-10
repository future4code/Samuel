export abstract class Dish {
	
	protected dishName: string;
	protected price: number;
	protected cost: number;
	protected ingredients: string[];
	protected timeToCook: number;

	constructor(name: string, price: number, cost: number, ingredients: string[], timeToCook: number) {
		this.dishName = name;
		this.price = price;
		this.cost = cost;
		this.ingredients = ingredients;
		this.timeToCook = timeToCook;
	}

	public getProfit(): number {
		return this.price - this.cost;
	}

	public getPrice(): number {
		return this.price;
	}

	public getDishName(): string {
		return this.dishName;
	}

	public abstract cook(): void;
}
