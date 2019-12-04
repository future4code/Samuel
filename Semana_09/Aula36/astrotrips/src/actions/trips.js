import axios from "axios";

export const updateTripList = (tripList) => {
    return {
        type: "UPDATE_TRIP_LIST",
        payload: tripList
    }
}

export const getTrips = () => {
    return async (dispatch) => {
        const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/samuel/trips');
        dispatch(updateTripList(response.data.trips));
    }
}