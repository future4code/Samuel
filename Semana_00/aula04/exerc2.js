// Coding Together - 05/09/2019
// Samuel

/*
No intervalo de 1 a 100, faça o programa exibir:
- para múltiplos APENAS de 3 > "Future"
- para múltiplos APENAS de 5 > "Four"
- para múltiplos de 3 e de 5 (ambos) > "Future4"
*/

for (let i = 1; i <= 100; i++){
  if(i % 3 === 0){
    if(i % 5 === 0){
      console.log(i, "Future4");
    }
    else{
      console.log(i, "Future");
    }
  }
  else {
    if(i % 5 === 0 ){
      console.log(i, "Four");
    }    
  }
}