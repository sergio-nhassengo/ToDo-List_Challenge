import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import todosReducer from './todosReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    todos: todosReducer,
    error: errorReducer
});
 
export default rootReducer;