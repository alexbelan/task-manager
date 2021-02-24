import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { fileReducer } from './reducers/fileReducer';
import { listReducer } from './reducers/listReducer'
import { appReducer } from './reducers/appReducer';
import { todoReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer,
    list: listReducer,
    app: appReducer,
    todo: todoReducer,
});

export default rootReducer