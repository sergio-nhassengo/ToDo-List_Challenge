import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
} 

export const updateTodo = async todo => {
    const response = await axios.patch(`${URL}${todo.id}`, {
        completed: !todo.completed
    })
    
    const data = await response.data;
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export default { fetchTodos, updateTodo };