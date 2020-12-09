import { combineReducers, createStore } from 'redux'
import {GET_EMAIL, GET_PASSWORD} from "./type";

const initialLoginState = {
    email: "",
    password: "",
}

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {
        case GET_EMAIL:
            return {...state, email: action.payload};
        case GET_PASSWORD:
            return {...state, password: action.payload}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer