import { GET_EMAIL, GET_USER_NAME, GET_USER_PHOTO, GET_EMAIL_VERIFIED, CLEAR_USER} from "../type";

const initialUserState = {
    name: '',
    email: '',
    photo: '',
    verified: false
}

export function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case GET_USER_NAME:
            return {...state, name: action.payload};
        case GET_EMAIL:
            return {...state, email: action.payload};
        case GET_USER_PHOTO:
            return {...state, photo: action.payload};
        case GET_EMAIL_VERIFIED:
            return {...state, verified: action.payload};
        case CLEAR_USER:
            return {
                name: null,
                email: null,
                photo: null,
                verified: false
            }
        default:
            return state;
    }
}