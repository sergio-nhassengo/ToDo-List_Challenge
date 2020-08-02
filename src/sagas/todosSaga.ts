import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { setTodos, setError } from '../actions';
import { TODOS, Todo } from '../types';
import { fetchTodos, updateTodo } from '../api';

export function* handleTodosLoad() {
    try {
        const todos: Todo[] = yield call(fetchTodos);
        yield put(setTodos(todos));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export function* handleTodoUpdate(action: any) {
    try {
        const todo: Todo = yield call(updateTodo, action.todo);
        if(todo) yield put({type:TODOS.UPADTE_SUCCEDED, todo:todo})
    } catch (error) {
    }
}

export default function* watchTodosLoad() {
    yield takeEvery(TODOS.LOAD, handleTodosLoad);
    yield takeLatest(TODOS.UPDATE_TODO, handleTodoUpdate);
} 
