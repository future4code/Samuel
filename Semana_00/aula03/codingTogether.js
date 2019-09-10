// Coding together - 04/09/2019

//ex. 1
function ex1(){
  const idade = Number(prompt("Digite a idade do atleta: "));

  if(idade >= 3 && idade <= 4){
    console.log("Mirim");
  } else if(idade >= 5 && idade <= 7){
    console.log("Infantil A");
  } else if(idade >= 8 && idade <= 10){
    console.log("Infantil B");
  } else if(idade >= 11 && idade <= 13){
    console.log("Juvenil A");
  } else if(idade >= 14 && idade <= 17){
    console.log("Juvenil B");
  } else if(idade >= 18 && idade <= 50){
    console.log("Adulto");
  } else if(idade >= 50 && idade <= 100){
    console.log("Veterano");
  } else{
    console.log("Idade inválida!");
  }
}

//ex. 2
function ex2(){
  const numero = Number(prompt("Digite um número: "));
  if(numero % 2 === 0){
    console.log("O número é par!");  
  } 
  else{
    console.log("O número é ímpar!");
  }
}

//ex. 3
function ex3(){
  const anoInformado = Number(prompt("Digite o ano: "));

  if((anoInformado % 4 === 0 && anoInformado % 100 !== 0) || anoInformado % 400 === 0){
    console.log("É ano bissexto!");
  }
  else{
    console.log("Não é ano bissexto!");
  }
}

ex3();

