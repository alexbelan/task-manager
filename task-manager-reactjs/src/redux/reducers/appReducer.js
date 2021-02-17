import { CHANGE_LIST, FILE_NEW_LIST } from "../type";

const initialAppState = {
    refList: 0,
    fileNewList: null,
    prevFileNewList: null,
}

export function appReducer(state = initialAppState, action) {
    switch (action.type) {
        case CHANGE_LIST:
            return {
                ...state,
                refList: action.payload
            }
        case FILE_NEW_LIST:
            return {
                ...state,
                fileNewList: action.payload,
            }
        default:
            return state;
    }
}