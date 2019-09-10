// Coding Together - 05/09/2019
// Samuel

// Dadas as listas A, B e C a seguir:
const listaA = [11, 12, 49, 15, 16, 30, 51, 3, 10];
const listaB = [83, 9, 82, 15, 22, 44, 51, 13, 44];
const listaC = [4, 9, 77, 4, 43, 1, 5, 1, 33];

// exibe o maior número da lista A:
let maior = listaA[0];
for(let numero of listaA){
  if(numero > maior){
    maior = numero;
  }
}
console.log("O maior número em 'A' é", maior);

// exibe o menor número da lista B:
let menor = listaB[0];
for(let numero of listaB){
  if(numero < menor){
    menor = numero;
  }
}
console.log("O menor número em 'B' é", menor);

// calcule a média aritmética simples entre os números da lista C:
let soma = 0;
for(let numero of listaC){  
  soma = soma + numero;
}
console.log("A média dos números em 'C' é", (soma / listaC.length));