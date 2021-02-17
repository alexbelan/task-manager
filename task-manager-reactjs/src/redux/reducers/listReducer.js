import { ADD_TODO, CANCEL_TODO, GET_LIST_TODOE, READY_TODO } from "../type";

const initialListState = []


export function listReducer(state = initialListState, action) {
    switch (action.type) {
        case GET_LIST_TODOE:
            return action.payload
        case READY_TODO:
            state[action.payload].ready = true
            return [
                ...state,
            ]
        case CANCEL_TODO:
            state[action.payload].ready = false 
            return  [
                ...state,
            ]
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}