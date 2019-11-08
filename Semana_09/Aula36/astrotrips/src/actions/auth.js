import { push } from 'connected-react-router';
import { routes } from '../containers/Router';
import axios from "axios"

export const login = (email, password) => async (dispatch) => {
    try {
        //dispatch(clearErrorMessageAction());
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/futureX/samuel/login",
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.controlPanel));
    } catch (e) {
        console.log(e.message);
        //dispatch(setErrorMessageAction(e.message));
    }
}