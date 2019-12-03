// exercídio 1
// mock de dados
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// propriedades
type respostaEx1 = {
    qtidadeNums: number,
    numsImpares: number[],
    somaNums: number
}

// função que retorna um objeto com as propriedades acima
function ex1(entrada: number[]): respostaEx1 {
    let numsImpares: number[] = [];
    let soma: number = 0;
    for(let elem of entrada){
        soma += elem;
        if(elem % 2 !== 0){
            numsImpares.push(elem);
        }
    }
    return ({
        qtidadeNums: entrada.length,
        numsImpares: numsImpares,
        somaNums: soma
    })
}

console.log(ex1(arr));