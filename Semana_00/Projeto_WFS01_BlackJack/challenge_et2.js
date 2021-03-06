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

function mostraResultado(cartasUsuario, cartasPc, vencedor){
  alert(mostraCartasUsuario(cartasUsuario) + " Sua pontuação é " + calculaPontos(cartasUsuario) + 
    ".\nAs cartas do computador são " + mostraCartasPc(cartasPc) + " Os pontos do PC são " + calculaPontos(cartasPc)+ "." + vencedor);
}

function mostraCartasUsuario(cartas){
  let mensagem = "Suas cartas são";
  for(let carta of cartas){
    mensagem = mensagem + " " + carta.texto;  
  }
  mensagem += ".";
  return mensagem;
}

function mostraCartasPc(cartas){
  let mensagem = "";
  for(let carta of cartas){
    mensagem = mensagem + " " + carta.texto;  
  }
  mensagem += ".";
  return mensagem;
}

console.log("Bem vindo(a) ao jogo de Blackjack!");
const inicio = confirm("Quer iniciar uma nova rodada?");

if(!inicio){
  console.log("O jogo acabou.");
}
else{
  let cartasUsuario = [comprarCarta(), comprarCarta()];
  let cartasPc = [comprarCarta(), comprarCarta()];
  // sorteia novamente, caso sejam dois "A" para o jogador ou dois "A" para o PC
  while((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) || (cartasPc[0].valor === 11 && cartasPc[1].valor === 11)){
    cartasUsuario = [comprarCarta(), comprarCarta()];
    cartasPc = [comprarCarta(), comprarCarta()];
  }

  let mensagem = mostraCartasUsuario(cartasUsuario);

  let comprar = confirm(mensagem + "\nA carta revelada do PC é " + cartasPc[0].texto + ".\nDeseja comprar mais uma carta?");

  while(comprar){
    cartasUsuario.push(comprarCarta());
    if(calculaPontos(cartasUsuario) < 21){
      mensagem = mostraCartasUsuario(cartasUsuario);
      comprar = confirm(mensagem + "\nA carta revelada do PC é " + cartasPc[0].texto + ".\nDeseja comprar mais uma carta?");
    }
    else if(calculaPontos(cartasUsuario) > 21){
      comprar = false; //usuário perdeu pq ultrapassou 21 ptos
      /* não vejo necessidade de o computador ficar comprando cartas se o usuário já 'estourou'
      while(calculaPontos(cartasPc) < calculaPontos(cartasUsuario)){
        cartasPc.push(comprarCarta());
      }
      */
    }
    else{ //o usuário fez exatos 21 pts
      comprar = false;
      while(calculaPontos(cartasPc) < calculaPontos(cartasUsuario)){
        cartasPc.push(comprarCarta());
      }
    }
  }

  //cálculo e apresentação dos resultados
  if(calculaPontos(cartasUsuario) <= 21){
    if(calculaPontos(cartasUsuario) > calculaPontos(cartasPc)){
       mostraResultado(cartasUsuario, cartasPc, "\nO usuário ganhou!");
    }
    else if(calculaPontos(cartasPc) > calculaPontos(cartasUsuario)){
      mostraResultado(cartasUsuario, cartasPc, "\nO computador ganhou!");
    }
    else{
      mostraResultado(cartasUsuario, cartasPc, "\nHouve um empate!!!");
    }
  }  
  else{
    mostraResultado(cartasUsuario, cartasPc, "\nO computador ganhou!");
  }   
}