const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ex1(entrada) {
    let numsImpares = 0;
    let soma = 0;
    for (let elem of entrada) {
        soma += elem;
        if (elem % 2 !== 0) {
            numsImpares++;
        }
    }
    return ({
        qtidadeNums: entrada.length,
        numsImpares: numsImpares,
        somaNums: soma
    });
}
console.log(ex1(arr));
//# sourceMappingURL=ex1.js.map