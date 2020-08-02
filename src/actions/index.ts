import { TODOS, Todo } from '../types';

const loadTodos = () => ({
    type: TODOS.LOAD
});

const setTodos = (todos: Todo[]) => ({
    type: TODOS.LOAD_SUCCESS,
    todos
});

const updatedTodo = (todo: Todo) => ({
    type: TODOS.UPDATE_TODO,
    todo
});

const updateTodoSuccess = (todo: Todo) => ({
type: TODOS.UPDATE_TODO,
todo
})

const setError = (error: any) => ({
    type: TODOS.LOAD_FAIL,
    error
});

export { loadTodos, setTodos, updatedTodo, updateTodoSuccess, setError};