import { SaltyDish } from "./saltydish";
import { Dessert } from "./dessert";
import { Chef } from "./chef";
import { Cashier } from "./cashier";

// pratos salgados:
const feijoada = new SaltyDish("Feijoada", 100, 20, ["costelinha", "feijão preto", "pé de porco"], 100);
const lasanha = new SaltyDish("Lasanha", 100, 60, ["mussarela", "presunto", "macarrão", "molho de tomate"], 50);

// sobremesas:
const brigadeiro = new Dessert("Brigadeiro", 50, 5, ["leite condensado", "chocolate em pó", "granulado"], 100, 10);
const pudim = new Dessert("Pudim de Leite", 80, 35, ["leite", "leite condensado", "ovos", "açúcar"], 10, 16);

const novoChef = new Chef("Jamie Oliver", 50000);
novoChef.sayMyName();
novoChef.sayJob();
novoChef.addDishToMenu(feijoada);
novoChef.addDishToMenu(brigadeiro);
console.log("Opções do Menu:")
novoChef.whatCanWeHave();

novoChef.addDishToMenu(lasanha);
novoChef.addDishToMenu(pudim);
novoChef.removeDishFromMenu("Feijoada");

console.log("Opções do Menu:")
novoChef.whatCanWeHave();

const caixa = new Cashier("Joselito", 1)
caixa.sayMyName();
caixa.sayJob();
console.log("Total a pagar: R$", caixa.calculateBill([lasanha, brigadeiro]));
