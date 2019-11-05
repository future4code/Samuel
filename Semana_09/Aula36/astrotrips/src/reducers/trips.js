// const journeys = [
//     {
//         "id": "0aQ9retlt9zxpeo40G2M",
//         "name": "Multi luau em Jupiter",
//         "description": "Noite mágica, com vista para as 69 luas de Jupiter",
//         "planet": "Jupiter",
//         "durationInDays": 540,
//         "date": "21/12/20"
//     },
//     {
//         "id": "HF3V6C2VFWoQ3QUOVJON",
//         "name": "Picnic de Inverno em Plutão",
//         "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
//         "planet": "Plutão",
//         "durationInDays": 980,
//         "date": "21/12/20"
//     },
//     {
//         "id": "QuWBcnjEQXAlxjLtAjLS",
//         "name": "Surfando em Netuno",
//         "description": "Nenhum surfista intergalático pode ficar fora dessa!",
//         "planet": "Netuno",
//         "durationInDays": 540,
//         "date": "21/12/20"
//     },
//     {
//         "id": "vX4GWQtFDENjFEo7EAF1",
//         "name": "Festança Marciana",
//         "description": "Uma viagem bem legal, na melhor época de marte",
//         "planet": "Marte",
//         "durationInDays": 228,
//         "date": "21/12/21"
//     }
//   ]

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