import { GET_LIST, NEW_LIST } from "../type";

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
        default:
            return state;
    }
}