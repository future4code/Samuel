import { adicionarTask } from '../constants/actionTypes';
import { removerTask } from '../constants/actionTypes';
import { completarTask } from '../constants/actionTypes';
import { marcarTodasComoCompletas } from '../constants/actionTypes';
import { removerTasksCompletas } from '../constants/actionTypes';


export function adicionarTask(descricao, idTask, taskFeita){
	return {
		type: adicionarTask,
		payload: {
			descricao: descricao,
			idTask: idTask,
			taskFeita: false
		}
	}
}

export function removerTask(idTask){
	return {
		type: removerTask,
		payload: {
			idTask: idTask
		}
	}
}

export function completarTask(idTask){
	return {
		type: completarTask,
		payload: {
			idTask: idTask
		}
	}
}

export function marcarTodasComoCompletas(){
	return {
		type: marcarTodasComoCompletas
	}
}

export function removerTasksCompletas(){
	return {
		type: removerTasksCompletas
	}
}