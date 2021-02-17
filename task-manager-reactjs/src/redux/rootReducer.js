import { combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { fileReducer } from './reducers/fileReducer';
import { listReducer } from './reducers/listReducer'
import { appReducer } from './reducers/appReducer';

const rootReducer = combineReducers({
    user: userReducer,
    file: fileReducer,
    list: listReducer,
    app: appReducer
});

export default rootReducer