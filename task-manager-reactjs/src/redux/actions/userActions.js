import { GET_USER_DATA, CLEAR_USER_DATA } from "../type"


export const getUserData = data => {
    return {
        type: GET_USER_DATA,
        payload: data
    }
}

export const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    }
}