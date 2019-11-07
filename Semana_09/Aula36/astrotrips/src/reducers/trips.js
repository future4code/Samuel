const initialState = {
    tripList: []
}

export const trips = (state=initialState, action) => {
    switch(action.type){
        case "UPDATE_TRIP_LIST":
            return {...state, tripList: action.payload}
        default:
            return state;
    }
}