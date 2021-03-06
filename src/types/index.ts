export interface Todo {
    id: number,
    completed: boolean,
    title: string
}

export const TODOS = {
    LOAD: 'TODOS_LOAD',
    LOAD_SUCCESS: 'TODOS_LOAD_SUCCESS',
    LOAD_FAIL: 'TODOS_LOAD_FAIL',
    COMPLETION: 'SET_COMPLETION',
    UPDATE_TODO: 'UPDATE_TODO',
    UPADTE_SUCCEDED: 'UPDATE_SUCCEDED'
};