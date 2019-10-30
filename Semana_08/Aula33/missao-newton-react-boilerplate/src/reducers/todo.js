import { adicionarTask } from "../constants/actionTypes";

const initialState = {
    listaDeTasks: []
}

const actionPadrao = (state = initialState, action) => {
    switch (action.type) {
        case "MOSTRAR_TODAS_AS_TASKS":
            return state;
        case adicionarTask:
            return
        default:
            return state;
    }
}

export default actionPadrao;