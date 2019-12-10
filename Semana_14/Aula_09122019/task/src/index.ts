import { Bank } from "./Bank";

//const bankAname = process.argv[2];
//const bankBname = process.argv[3];

const f4Bank = new Bank("f4Bank_info.json");
const samBank = new Bank("samBank_info.json");

console.log("OPERAÇÕES - 1:");
f4Bank.createAccount("Future", "12345678910", 25);
samBank.createAccount("Samuel", "32278049801", 36);
samBank.createAccount("Fabiana", "30745477828", 35);
console.log("Contas do SamBank:", samBank.getAllAccounts());
console.log("Contas do F4Bank:", f4Bank.getAllAccounts());

console.log("OPERAÇÕES - 2:");
f4Bank.createAccount("Soter", "109876543210", 18);
f4Bank.createAccount("Darvas", "101010101010", 24);
samBank.createAccount("Ubirajara", "79957510878", 64);
console.log("Contas do SamBank:", samBank.getAllAccounts());
console.log("Contas do F4Bank:", f4Bank.getAllAccounts());