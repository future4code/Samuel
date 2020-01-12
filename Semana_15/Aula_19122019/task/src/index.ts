import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex, { QueryBuilder } from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
	client: 'mysql',
	connection: {
		host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
		user: 'samuel',
		password: process.env.SENHA_BANCO,
		database: 'samuel'
	}
});

app.get('/', (req: Request, res: Response) => {
	const resposta = {
		endpoints: {
			'/': 'retorna lista com todos os endpoints',
			'/ping': 'retorna o texto pong',
			'/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.',
			'/createUser': 'cria um novo usuário com os dados do objeto passado.'
			// TODO - add os demais endpoints na descrição!!
		}
	};
	// Exemplo de retorno de um JSON
	res.send(resposta)
});

// INÍCIO DO PROJETO - 19/12/2019
// 1) Criar usuário:
app.post('/createUser', (req: Request, res: Response) => {
	const newUser = {
		...req.body
	}
	const query = connection('users').insert(newUser);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 2) Editar usuário (só o nickname pode ser editado):
app.put('/editUserNickname', (req: Request, res: Response) => {
	const currentNickname = req.query.oldNick;
	const newNickname = req.query.newNick;
	const query = connection.raw(`UPDATE users SET nickname = "${newNickname}" WHERE nickname LIKE "${currentNickname}"`);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 3) Deletar usuário com o nickname "X":
app.delete('/deleteUserByNickname', (req: Request, res: Response) => {
	const nickname = req.query.nickname;
	const query = connection.raw(`DELETE FROM users WHERE nickname LIKE "${nickname}"`);	
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 4) Pegar usuário pelo nome ou pelo id:
app.get('/getUser', (req: Request, res: Response) => {
	const term = req.query.search;
	
	let query;
	if(isNaN(Number(term))) {
		query = connection.raw(`SELECT * FROM users WHERE name LIKE "${term}"`);
	} else {
		query = connection.raw(`SELECT * FROM users WHERE id = "${term}"`);
	}

	// opção 2:
	// const query = connection.raw(`SELECT * FROM users WHERE name LIKE "${term}" OR id = "${term}"`);
	
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 5-a) Pegar todos os usuários:
app.get('/getAllUsers', (req: Request, res: Response) => {
	const query = connection.raw('SELECT * FROM users');
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 5-b) Pegar todos os usuarios por ordem alfabética, 
// sendo '0' pra crescente e '1' pra descrescente (caso
// não seja passado parâmetro, retorna a lista ordenada por ID):
app.get('/getOrderedUsers', (req: Request, res: Response) => {
	const ordem = Number(req.query.ordem);
	let query = connection.raw('SELECT * FROM users ORDER BY id');
	if (ordem === 0) {
		query = connection.raw('SELECT * FROM users ORDER BY name ASC');
	}
	else if(ordem === 1) {
		query = connection.raw('SELECT * FROM users ORDER BY name DESC');		
	}
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 5-c) Pegar todos os usuarios com a idade informada:
app.get('/getFilteredUsersByAge', (req: Request, res: Response) => {
	const age = req.query.age;
	const query = connection.raw(`SELECT * FROM users WHERE FLOOR((DATEDIFF(CURDATE(), birthdate)/365)) = ${age} ORDER BY name`);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 6) Criar uma nova task:
app.post('/createTask', (req: Request, res: Response) => {
	const newTask = {
		...req.body
	}
	const query = connection('tasks').insert(newTask);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 7) Editar descrição e/ou data limite de uma task:
app.put('/editTask', (req: Request, res: Response) => {
	const taskToEditId = Number(req.query.id);	
	const query = connection.raw(`UPDATE tasks SET description = "${req.body.description}", limitDate = "${req.body.limitDate}" WHERE id = "${taskToEditId}"`);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 8) Atribuir responsável pela task:
app.put('/editTaskResponsible', (req: Request, res: Response) => {
	const taskToEditId = Number(req.query.taskId);
	const newResponsibleId = Number(req.query.userId);	
	const query = connection.raw(`UPDATE tasks SET id_responsible = "${newResponsibleId}" WHERE id = "${taskToEditId}"`);
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 9) Buscar tarefas pelo ID do solicitante, filtrando (ou não) por uma data limite:
app.get('/getTasksByRequester', (req: Request, res: Response) => {
	const userId = Number(req.query.userId);
	const limitDate = req.query.limitDate;

	let query;
	if(limitDate) {
		query = connection.raw(`SELECT * FROM tasks WHERE id_requester = "${userId}" AND "${limitDate}" >= limitDate`);
	} else {
		query = connection.raw(`SELECT * FROM tasks WHERE id_requester = "${userId}"`);
	}	
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
});

// 10) Buscar tarefas pelo ID do responsável, filtrando (ou não) por uma data limite:
// TODO - verificar se o responsável ainda não foi definido, já que não é obrigatório no
// momento de criação da task!!!
app.get('/getTasksByResponsible', (req: Request, res: Response) => {
	const userId = Number(req.query.userId);
	const limitDate = req.query.limitDate;

	let query;
	if(limitDate) {
		query = connection.raw(`SELECT * FROM tasks WHERE id_responsible = "${userId}" AND "${limitDate}" >= limitDate`);
	} else {
		query = connection.raw(`SELECT * FROM tasks WHERE id_responsible = "${userId}"`);
	}	
	query.then(result => {
		res.send(result);
	}).catch(e => {
		res.send(e);
	})
}); 

// 11) 

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
	if (server) {
		const address = server.address() as AddressInfo;
		console.log(`Server is running in http://localhost:${address.port}`);
	} else {
		console.error(`Failure upon starting server.`);
	}
});