import axios, { AxiosResponse } from 'axios';
import { Todo } from '../types';

const URL = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = async () => {
    const response: AxiosResponse<Todo> = await axios.get(URL);
    const data = await response.data;
    if(response.status >= 400) {
        throw new Error();
    }
    return data;
} 

export const updateTodo = async (todo: Todo) => {
    const response: AxiosResponse<Todo> = await axios.patch(`${URL}${todo.id}`, {
        completed: !todo.completed
    })
    
    const data = await response.data;
    if(response.status >= 400) {
        throw new Error();
    }
    return data;
}

export default { fetchTodos, updateTodo };