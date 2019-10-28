
export function adicionarTask(descricao, idTask, taskFeita){
	return {
		type: "ADICIONAR_TASK",
		payload: {
			descricao: descricao, //descrição
			idTask: idTask, // id
			taskFeita: taskFeita //se está completa ou não
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

export function desmarcarTask(idTask){
	return {
		type: "DESMARCAR_TASK",
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

export function mostrarTodasAsTasks(){
	return {
		type: "MOSTRAR_TODAS"
	}
}

export function mostrarIncompletas(){
	return {
		type: "MOSTRAR_INCOMPLETAS"
	}
}

export function mostrarCompletas(){
	return {
		type: "MOSTRAR_COMPLETAS"
	}
}

export function removerTasksCompletas(){
	return {
		type: "REMOVER_COMPLETAS"
	}
}