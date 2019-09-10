// Coding together
// Aula 2 - 03/09/2019

// Exerc 1
// a)
const produto1 = {
  nome: 'Mouse',
  preco: 30.00
}
const produto2 = {
  nome: 'Monitor',
  preco: 500.00
}
const produto3 = {
  nome: 'Teclado',
  preco: 149.99
}

const somaValores = (produto1.preco + produto2.preco + produto3.preco);
console.log("O valor total dos produtos é de R$" + somaValores);

// b)
const tempFahr = 77;
const tempConvertidaKelvin = ((tempFahr-32)) * 5 / 9 + 273.15;
const tempConvertidaCelsius = (tempFahr - 32) * 5 / 9;

console.log("77ºF corresponde à " + tempConvertidaKelvin + "K");
console.log("77ºF corresponde à " + tempConvertidaCelsius + "ºC");

// Exerc 2
// a)
const novaTempFahr = prompt("Digite a temperatura em Fahrenheit a ser convertida: ");
const novaTempConvertidaKelvin = ((novaTempFahr-32)) * 5 / 9 + 273.15;
const novaTempConvertidaCelsius = (novaTempFahr - 32) * 5 / 9;

console.log(novaTempFahr + "ºF corresponde à " + novaTempConvertidaKelvin + "K");
console.log(novaTempFahr + "ºF corresponde à " + novaTempConvertidaCelsius + "ºC");

// b)
const nome = prompt("Digite seu primeiro nome: ");
const ultimoNome = prompt("Digite seu último nome: ");
console.log("Nome completo: " + nome + " " + ultimoNome);

// c)
console.log("Endereço completo: ");
const rua = prompt("Digite o nome da rua: ");
const numero = prompt("Digite o número: ");
const complemento = prompt("Digite o complemento: ");
const bairro = prompt("Digite o nome do bairro: ");
const cidade = prompt("Digite o nome da cidade: ");
console.log(rua + ", " + numero + " - " + complemento + " - " + bairro + ", " + cidade);

// Exerc 3
// a)
const casaDestrancada = confirm("A casa está destrancada?");
const temChaves = confirm("Você tem as chaves de casa?");
console.log("O usuário consegue entrar na casa? Resposta: " + (casaDestrancada || temChaves));

// b)
const estaChovendo = confirm("Está chovendo?");
const temProtecao = confirm("Tem guarda-chuva?");
console.log("O usuário vai se molhar? Resposta: "+ (estaChovendo && !temProtecao));

// Exerc 4
 const salMinimo = Number(prompt("Digite o valor do salário mínimo: "));
 const qtEnergia = Number(prompt("Digite a quantidade de energia consumida na casa, em quilowatts: "));
 const valQuilowatt = salMinimo/5;
 console.log("O valor do quilowatt é de R$" + valQuilowatt);
 const valorConta = qtEnergia * valQuilowatt
 console.log("O valor a ser pago é de R$" + valorConta);
 console.log("O valor a ser pago, já com o desconto de 15% é de R$" + valorConta * 0.85);