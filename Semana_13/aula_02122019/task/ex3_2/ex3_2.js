
const fs = require('fs');
const taskListName = process.argv[2];
const newTask = process.argv[3];

try {
    if(taskListNameIsValid(taskListName)){
        if(newTaskIsValid(newTask)) {
            fs.appendFileSync(taskListName, '* ' + newTask + '\n', 'utf8');
            console.log("Tarefa adicionada com sucesso!");
        }
        else 
            console.log("Não é possível inserir uma tarefa vazia na lista.");
    }
    else
        console.log("Não foi informado um arquivo de lista válido.");
} catch (err) {
    console.log("Erro:", err);
}

function taskListNameIsValid(listName) {
    return (listName !== null && listName !== undefined);
}

function newTaskIsValid(task) {
    return (task !== "" && task !== null && task !== undefined);
}
