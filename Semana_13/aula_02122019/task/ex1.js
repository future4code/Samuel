
const operation = process.argv[2];
const operatorA = Number(process.argv[3]);
const operatorB = Number(process.argv[4]);

try {
    switch (operation) {
        case "add":
            console.log(`Resposta: ${operatorA + operatorB}`);
            break;
        case "sub":
            console.log(`Resposta: ${operatorA - operatorB}`);
            break;
        case "mult":
            console.log(`Resposta: ${operatorA * operatorB}`);
            break;
        case "div":
            if(operatorB !== 0){
                console.log(`Resposta: ${operatorA / operatorB}`);
            }
            else{
                console.log("Não é possível dividir por 0.")
            }
            break;
        default:
            console.log("Não foi passada uma operação válida.");
    }
} catch(err) {
    console.log("Erro:", err);
}