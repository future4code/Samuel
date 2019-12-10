import { Employee } from "./employee";
import { Dish } from "./dish";
import { Menu } from "./menu";

export class Chef extends Employee {
    
    protected job: string = "Chef";
    protected menu: Menu = new Menu();

    constructor(name: string, salary:number){
        super(name, salary);
    }

    public sayJob(){
        console.log("Meu cargo é:", this.job)
    }

    public removeDishFromMenu(dishName: string): void {
        const novoMenu = this.menu.getDishes().filter((item)=> {
            return (item.getDishName() !== dishName);
        })
        console.log(`${dishName} foi removido do menu.`)
        this.menu.setDishes(novoMenu);
    }

    public addDishToMenu(item: Dish) {
        const novoMenu = this.menu.getDishes();
        novoMenu.push(item);
        console.log(`${item.getDishName()} foi adicionado com sucesso!`)
        this.menu.setDishes(novoMenu);
    }

    public whatCanWeHave(): void{
        const currentMenuItems = this.menu.getDishes().map((item) => {
            return item.getDishName();
        })
        console.log(currentMenuItems);
    }
}