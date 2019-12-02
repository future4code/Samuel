const operation = process.argv[2];
const operatorA = Number(process.argv[3]);
const operatorB = Number(process.argv[4]);

try {
    if(operationIsValid(operation)){
        if(operatorIsValid(operatorA, operatorB)){
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
                    if(operatorB !== 0)
                        console.log(`Resposta: ${operatorA / operatorB}`);
                    else
                        console.log("Não é possível dividir por 0.")
                    break;
            }
        }
        else
            console.log("Operador inválido.");
    } else
        console.log("A operação informada não é válida.")
} catch(err) {
    console.log("Erro:", err);
}


function operatorIsValid(opA, opB){    
    return (!(opA === "" || opB === "" || isNaN(opA) || isNaN(opB)))
}

function operationIsValid(op){
    return (op === 'add' || op === 'sub' || op === 'mult' || op === 'div')
}