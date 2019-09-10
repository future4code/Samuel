// Challenge - 05/09/2019
// Samuel

// Exerc 1
function exerc1(){
  const numeroPensado = 14;
  let tentativas = 1;

  let chute = Number(prompt("Digite o seu palpite:"));
  while(chute !== numeroPensado){
    if(chute > numeroPensado){
      alert("Abaixo...");
      chute = Number(prompt("Digite o seu palpite:"));
      tentativas++;
    }
    else{
      alert("Acima...");
      chute = Number(prompt("Digite o seu palpite:"));
      tentativas++;
    }
  }
  console.log("Acertou!!!");
  console.log("Número de tentativas:", tentativas);
}
//exerc1();

// Exerc 2
function exerc2(){
  const numeroPensado = Math.floor((Math.random() * 100) + 1);
  let tentativas = 1;

  let chute = Number(prompt("Digite o seu palpite:"));
  while(chute !== numeroPensado){
    if(chute > numeroPensado){
      alert("Abaixo...");
      chute = Number(prompt("Digite o seu palpite:"));
      tentativas++;
    }
    else{
      alert("Acima...");
      chute = Number(prompt("Digite o seu palpite:"));
      tentativas++;
    }
  }
  console.log("Acertou!!!");
  console.log("Número de tentativas:", tentativas);
}
//exerc2();

// Exerc 3 
// Obs: linhas com '//flag' só servem pra acompanhar qual o número pensado e os palpites
function exerc3(){
  const numeroPensado = Math.floor((Math.random() * 100) + 1);
  console.log("Numero pensado:",numeroPensado); //flag
  let tentativas = 1;
  let max = 100;
  let min = 1;

  let chute = Math.floor((Math.random() * (max - min)) + 1);
  console.log("Chute inicial:", chute); //flag

  while(chute !== numeroPensado){
    if(chute > numeroPensado){
      console.log("Abaixo...");
      max = chute - 1;
      chute = Math.floor((Math.random() * ((max - min))) + min);
      tentativas++;
      console.log("Chute nº " + tentativas + ": " + chute); //flag
    }
    else{
      console.log("Acima...");
      min = chute + 1;
      chute = Math.floor((Math.random() * (max - min)) + min);
      tentativas++;
      console.log("Chute nº " + tentativas + ": " + chute); //flag
    }
  }
  console.log("Acertou!!!");
  console.log("Número de tentativas:", tentativas);
}
exerc3();