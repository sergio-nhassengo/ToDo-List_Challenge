import { TODOS } from '../types';

const loadingReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case TODOS.LOAD:
            return true;
        case TODOS.LOAD_SUCCESS:
            return false;
        case TODOS.LOAD_FAIL:
            return false;

        default:
            return state;
    }
};
 
export default loadingReducer;
