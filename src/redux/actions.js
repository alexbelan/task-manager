import {GET_EMAIL, GET_PASSWORD} from "./type";

export const getEmail = email => {
    return {
        type: GET_EMAIL,
        payload: email,
    }
}

export const getPassword = password => {
    return {
        type: GET_PASSWORD,
        payload: password
    }
}