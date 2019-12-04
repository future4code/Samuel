
const fs = require('fs');
const taskListName = process.argv[2];
const newTask = process.argv[3];

try {
    fs.appendFileSync(taskListName, '* ' + newTask + '\n', 'utf8');
    console.log("Tarefa adicionada com sucesso!");
} catch (err) {
    console.log(err);
}