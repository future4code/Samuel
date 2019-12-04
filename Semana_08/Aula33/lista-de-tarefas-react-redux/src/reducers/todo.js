import { adicionarTask } from "../constants/actionTypes";

const initialState = {
    listaDeTasks: []
}

const taskActions = (state = initialState, action) => {
    switch (action.type) {
        case "MOSTRAR_TODAS_AS_TASKS":
            return state;
        case {adicionarTask}:
            return state;
        default:
            return state;
    }
}

export default taskActions;