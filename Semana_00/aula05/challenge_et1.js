function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}

function calculaPontos(cartas){
  let soma = 0;
  for(let carta of cartas){
    soma = soma + carta.valor;
  }
  return soma;
}

function mostraResultado(nomeUser, nomePc, cartasUser, cartasPc){
  console.log(nomeUser, "- cartas:", cartasUser[0].texto, cartasUser[1].texto, "- pontuação:", calculaPontos(cartasUser));
  console.log(nomePc, "- cartas:", cartasPc[0].texto, cartasPc[1].texto, "- pontuação:", calculaPontos(cartasPc));
}

console.log("Bem vindo(a) ao jogo de Blackjack!");
const inicio = confirm("Quer iniciar uma nova rodada?");

if(!inicio){
  console.log("O jogo acabou.");
}
else{
  const cartasUsuario = [comprarCarta(), comprarCarta()];
  const cartasPc = [comprarCarta(), comprarCarta()];

  if(calculaPontos(cartasUsuario) > calculaPontos(cartasPc)){
    mostraResultado("Usuario", "Computador", cartasUsuario, cartasPc);
    console.log("O usuário ganhou!");
  } else if(calculaPontos(cartasPc) > calculaPontos(cartasUsuario)){
    mostraResultado("Usuario", "Computador", cartasUsuario, cartasPc);
    console.log("O computador ganhou!");
  } else{
    mostraResultado("Usuario", "Computador", cartasUsuario, cartasPc);
    console.log("Empate!");
  }  
}