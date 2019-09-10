// Challenge - Tarde
// Aula 3 - 04/09/2019

function exerc1_a(){
  const primeiroNum = Number(prompt("Digite o primeiro número: "));
  const segundoNum = Number(prompt("Digite o segundo número: "));
  if(primeiroNum === segundoNum){
    console.log("ERRO: os números não devem ser iguais!");
  } else if (primeiroNum > segundoNum){
    console.log("Ordem decrescente:", primeiroNum, segundoNum);
  } else{
    console.log("Ordem decrescente:", segundoNum, primeiroNum);
  }
}
//exerc1_a();

function exerc1_b(){
  const primeiroNum = Number(prompt("Digite o primeiro número: "));
  const segundoNum = Number(prompt("Digite o segundo número: "));
  const terceiroNum = Number(prompt("Digite o terceiro número: "));
  if(primeiroNum === segundoNum || primeiroNum === terceiroNum || segundoNum === terceiroNum){
    console.log("ERRO: os números não devem ser iguais!");
  } else if (primeiroNum > segundoNum && primeiroNum > terceiroNum){ // o primeiroNum é o maior todos
    if(segundoNum > terceiroNum){
      console.log("Ordem decrescente:", primeiroNum, segundoNum, terceiroNum);
    }
    else{
      console.log("Ordem decrescente:", primeiroNum, terceiroNum, terceiroNum);
    }
  } else if(segundoNum > primeiroNum && segundoNum > terceiroNum){ // o segundoNum é o maior de todos
    if(primeiroNum > terceiroNum){
      console.log("Ordem decrescente:", segundoNum, primeiroNum, terceiroNum);
    }
    else{
      console.log("Ordem decrescente:", segundoNum, terceiroNum, primeiroNum);
    }
  } else{ // o terceiroNum é o maior de todos
    if(primeiroNum > segundoNum){
      console.log("Ordem decrescente:", terceiroNum, primeiroNum, segundoNum,);
    }
    else{
      console.log("Ordem decrescente:", terceiroNum, segundoNum, primeiroNum);
    }
  }
}
//exerc1_b();

function exerc2_a(){
  const animal = confirm("É um animal?");
  if(animal){
    const temPelo = confirm("Tem pêlos?");
    if(temPelo){
      const consegueLatir = confirm("Late?");
      if(consegueLatir){
        console.log("É um cachorro!");
      }
      else{
        console.log("É um gato!");
      }      
    }
    else{
      const consegueVoar = confirm("Voa?");
      if(consegueVoar){
        console.log("É um pássaro!");
      }
      else{
        console.log("É um peixe!");
      }
    }
  }
  else{
    console.log("É uma pedra.");
  }
}
//exerc2_a();

function exerc2_b(){
  const animal = confirm("É um animal?");
  if(animal){
    const temPelo = confirm("Tem pêlos?");
    if(temPelo){
      const consegueLatir = confirm("Late?");
      if(consegueLatir){
        console.log("É um cachorro!");
      }
      else{
        const gostaDeQueijo = confirm("Gosta de queijo?");
        if(gostaDeQueijo){
          console.log("É um rato!");
        }
        else{
          console.log("É um gato!");
        }
      }      
    }
    else{
      const consegueVoar = confirm("Voa?");
      if(consegueVoar){
        console.log("É um pássaro!");
      }
      else{
        const temNadadeiras = confirm("Tem nadadeiras?");
        if(temNadadeiras){
          console.log("É um peixe!");
        }
        else{
          console.log("É um sapo!");
        }
      }
    }
  }
  else{
    const organico = confirm("Está vivo?");
    if(organico){
      console.log("É uma planta!");  
    }
    else{
      console.log("É uma pedra!");
    }
  }
}
//exerc2_b();

function exerc3(){
  //captura dos dados:
  const nomeCompleto = prompt("Digite seu nome completo: ");
  const tipoJogo = prompt("Utilizando 'IN' para jogo 'INternacional' ou 'NA' para jogo 'NAcional', informe o tipo de jogo,  por gentileza:");
  const etapaJogo = prompt("Digite a etapa do jogo no seguinte formato, por favor: \n'SF' para 'Semifinais' \n'DT' para 'Decisão do terceiro lugar' \n'FI' para 'Final' do campeonato");
  const categoria = Number(prompt("Digite, por favor, a categoria dos assentos ('1', '2', '3' ou '4'):"));
  const qtIngressos = Number(prompt("Digite a quantidade de ingressos:"));

  //'impressão' do recibo de compra:
  console.log("--- Dados da compra ---");
  console.log("Nome do cliente:", nomeCompleto);

  if(tipoJogo === "NA"){
    console.log("Tipo de jogo: Nacional");
  }
  else {
    console.log("Tipo de jogo: Internacional");
  }

  if(etapaJogo === "SF"){
    console.log("Etapa do jogo: Semifinal");
  }else if(etapaJogo === "DT"){
    console.log("Etapa do jogo: Decisão do terceiro lugar");
  }else {
    console.log("Etapa do jogo: Final");
  }

  console.log("Categoria:", categoria);
  console.log("Quantidade:", qtIngressos, "ingresso(s).");

  console.log("--- Valores ---");
  const cotacao = 4.10;

  if(etapaJogo === "SF"){
    if(categoria === 1){
      const preco = 1320;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 2){
      const preco = 880;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 3){
      const preco = 550;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else{
      const preco = 220;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
  }
  else if(etapaJogo === "DT"){
    if(categoria === 1){
      const preco = 660;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 2){
      const preco = 440;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 3){
      const preco = 330;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else{
      const preco = 170;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
  }
  else if(etapaJogo === "FI"){
    if(categoria === 1){
      const preco = 1980;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 2){
      const preco = 1320;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else if(categoria === 3){
      const preco = 880;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
    else{
      const preco = 330;
      if(tipoJogo === "IN"){
        console.log("Valor do ingresso em US$ " + (preco * cotacao) + ",00");
        console.log("Valor total da compra em US$ " + (preco * cotacao * qtIngressos) + ",00");
      }
      console.log("Valor do ingresso em R$ " + preco + ",00");
      console.log("Valor total da compra em R$ " + (preco * qtIngressos) + ",00");
    }
  }
}
exerc3();
