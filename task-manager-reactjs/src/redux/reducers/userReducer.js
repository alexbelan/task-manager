import {GET_USER_DATA, CLEAR_USER_DATA } from "../type";

const initialUserState = {
    username: '',
    email: '',
    img: '',
    dateReg: '',
    isActivation: false,
}

export function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.payload;
        case CLEAR_USER_DATA:
            return initialUserState
        default:
            return state;
    }
}