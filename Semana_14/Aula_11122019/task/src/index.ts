import { ResidentialClient } from "./residentialClient";
import { ComercialClient } from "./comercialClient";
import { IndustrialClient } from "./industrialClient";
import { ClientManager } from "./clientManager";

// TESTES RESIDENCIAIS
const res1 = new ResidentialClient("Casa do Samuel", "322.780.498-01", "11310-330", "Samuel", 1);
const res2 = new ResidentialClient("Casa da Fabiana", "307.454.778-28", "88385-000", "Fabiana", 2);

// console.log(res1);
// console.log(res2);

res1.setConsumedEnergy(12);
res2.setConsumedEnergy(15);

// console.log(res1);
// console.log("Total a pagar: R$", res1.calculateBill())
// console.log(res2);
// console.log("Total a pagar: R$", res2.calculateBill())

// TESTES COMERCIAIS
const com1 = new ComercialClient("Marcenaria do Sr. Birinha", "123456789/0001-01", "88385-000", "Ubirajara", 3);
const com2 = new ComercialClient("Bistrô Dna. Verinha", "987654321/0002-02", "88385-000", "Vera", 4);

// console.log(com1);
// console.log(com2);

com1.setConsumedEnergy(125);
com2.setConsumedEnergy(60);

// console.log(com1);
// console.log("Total a pagar: R$", com1.calculateBill())
// console.log(com2);
// console.log("Total a pagar: R$", com2.calculateBill())

// TESTES INDUSTRIAIS
const ind1 = new IndustrialClient("Cosipa", "123456789-123456789", "11085-160", "Clark Kent", 5);
const ind2 = new IndustrialClient("Volkswagen", "987654321-987654321", "88385-000", "Sr. Vrum", 6);

// console.log(ind1);
// console.log(ind2);

ind1.setConsumedEnergy(1325);
ind2.setConsumedEnergy(1680);

// console.log(ind1);
// console.log("Total a pagar: R$", ind1.calculateBill())
// console.log(ind2);
// console.log("Total a pagar: R$", ind2.calculateBill())

const gerente = new ClientManager();

gerente.addToClients(res1);
gerente.addToClients(res2);
gerente.addToClients(com1);
gerente.addToClients(com2);
gerente.addToClients(ind1);
gerente.addToClients(ind2);

console.log("Quantidade de clientes: ", gerente.getClientsQuantity());
gerente.printClientBills();
console.log("Total a receber de todos os clientes: R$", gerente.calculateAllIncome());
