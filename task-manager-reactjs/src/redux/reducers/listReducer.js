import { CHANGE_FILE_LIST, DELETE_FILE_LIST, DELETE_LIST, EDIT_LIST, GET_LIST, NEW_LIST } from "../type";

const initialListState = []

function deleteFileList(state, file) {
    const newState = state.filter(list => list.file !== file)
    return newState
}

function changeFileList(state, file) {
    const newState = state.map(list => {
        if (list.file === file) {
            return {...list, file: -1}
        }
        return list
    })
    return newState
}

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
        case DELETE_LIST:
            state.splice(action.payload, 1);
            return [
                ...state,
            ]
        case DELETE_FILE_LIST:
            return deleteFileList(state, action.payload)
        case CHANGE_FILE_LIST:
            return changeFileList(state, action.payload)
        default:
            return state;
    }
}