
const todosURL = "http://localhost:3000/api/todos"

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TODOS'})
            return fetch(todosURL)
                .then(response => response.json())
                .then(todos => dispatch({type: 'FETCH_TODOS', payload: todos}))
    }
}

export const fetchTodo = id => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TODOS'})
            return fetch(`${todosURL}/${id}`)
                .then(response => response.json())
                .then(todo => dispatch({type: 'FETCH_TODO', payload: todo}))
    }
}

export const addTodo = todoInput => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoInput)
    }
    return dispatch => {
        fetch(`${ todosURL }`, data)
            .then(response => response.json())
            .then(todo => dispatch({
                type: 'CREATE_TODO',
                payload: todo
            }))
            .catch(err => err)
    }
}

export const deleteTodo = todo_id => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`${todosURL}/${todo_id}`, data)
            .then(response => response.json())
            .then(todo => dispatch({
                type: 'DELETE_TODO',
                payload: todo
            }))
            .catch(err => err)
    }
}
