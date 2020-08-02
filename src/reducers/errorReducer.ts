import { TODOS } from '../types';

const errorReducer = (state = null, action: any) => {
    switch (action.type) {
        case TODOS.LOAD_FAIL:
            return action.error;
        case TODOS.LOAD:
        case TODOS.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};
 
export default errorReducer;
