import { CLEAR_USER, GET_EMAIL, GET_EMAIL_VERIFIED, GET_USER_NAME, GET_USER_PHOTO} from "./type";


export const getUserName = name => {
    return {
        type: GET_USER_NAME,
        payload: name
    }
}

export const getEmail = email => {
    return {
        type: GET_EMAIL,
        payload: email
    }
}
export const getUserPhoto = photo => {
    return {
        type: GET_USER_PHOTO,
        payload: photo
    }
}
export const getUserVerified = verified => {
    return {
        type: GET_EMAIL_VERIFIED,
        payload: verified
    }
}

export const clearUser = () => {
    return {
        type: CLEAR_USER,
    }
}