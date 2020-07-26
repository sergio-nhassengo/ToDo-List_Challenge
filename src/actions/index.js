import { TODOS } from '../constants';

const loadTodos = () => ({
    type: TODOS.LOAD
});

const setTodos = todos => ({
    type: TODOS.LOAD_SUCCESS,
    todos
});

const updatedTodo = todo => ({
    type: TODOS.UPDATE_TODO,
    todo
});

const updateTodoSuccess = todo => ({
type: TODOS.UPDATE_TODO,
todo
})

const setError = error => ({
    type: TODOS.LOAD_FAIL,
    error
});

export { loadTodos, setTodos, updatedTodo, updateTodoSuccess, setError};