import { TODOS } from '../constants';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case TODOS.LOAD_SUCCESS:
            return [...state, ...action.todos];
        case TODOS.UPADTE_SUCCEDED:
            return state.map(item =>
                (item.id === action.todo.id)
                    ? {
                        ...item,
                        completed: action.todo.completed
                    } : item
            )
        default:
            return state;
    }
};

export default todosReducer;