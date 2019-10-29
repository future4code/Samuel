
export function adicionarTask(descricao, idTask, taskFeita){
	return {
		type: "ADICIONAR_TASK",
		payload: {
			descricao: descricao, //descrição
			idTask: idTask, // id
			taskFeita: false // inicia false
		}
	}
}

export function removerTask(idTask){
	return {
		type: "REMOVER_TASK",
		payload: {
			idTask: idTask
		}
	}
}

export function completarTask(idTask){
	return {
		type: "COMPLETAR_TASK",
		payload: {
			idTask: idTask
		}
	}
}

export function marcarTodasComoCompletas(){
	return {
		type: "COMPLETAR_TODAS"
	}
}

export function removerTasksCompletas(){
	return {
		type: "REMOVER_COMPLETAS"
	}
}