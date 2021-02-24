import { CHANGE_LIST, CLOSE_EDIT_WINDOW, ADD_DATA_EDIT_WINDOW, FILE_NEW_LIST, OPEN_EDIT_WINDOW, CLOSE_DATA_EDIT_WINDOW } from "../type";

const initialAppState = {
    refList: -1,
    fileNewList: null,
    prevFileNewList: null,
    editWindow: false,
    editData: {
        type: "",
        id: -1,
    }
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
        case OPEN_EDIT_WINDOW:
            return {
                ...state,
                editWindow: true
            }
        case CLOSE_EDIT_WINDOW:
            return {
                ...state,
                editWindow: false
            }
        case ADD_DATA_EDIT_WINDOW:
            return {
                ...state,
                editData: action.payload,
            }
        case CLOSE_DATA_EDIT_WINDOW:
            return {
                ...state,
                editData: {
                    type: "",
                    id: -1,
                }
            }
        default:
            return state;
    }
}