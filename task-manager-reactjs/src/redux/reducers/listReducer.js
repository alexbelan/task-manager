import { EDIT_LIST, GET_LIST, NEW_LIST } from "../type";

const initialListState = []


export function listReducer(state = initialListState, action) {
    switch (action.type) {
        case GET_LIST:
            return action.payload
        case NEW_LIST:
            return [
                ...state,
                action.payload
            ] 
        case EDIT_LIST:
            state[action.payload.index] = action.payload.data
            return [
                ...state,
            ]  
        default:
            return state;
    }
}