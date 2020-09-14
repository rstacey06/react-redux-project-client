const todosURL = "http://localhost:3000/api/todos"

export const fetchTodoGoals = todoId => {
    return dispatch => {
        fetch(`${todosURL}/${todoId}/goals`)
            .then(response => response.json())
            .then(goals => {
                let res = {
                    goals,
                    todoId
                }
                dispatch({
                    type: 'FETCH_GOALS',
                    payload: res
                })
            })
            .catch(err => err)
    }
}

export const addGoal = ( goalInput, todoId ) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goalInput)
    }
    return dispatch => {
        fetch(`${ todosURL }/${todoId}/goals`, data)
            .then(response => response.json())
            .then(goal => {
                let res = {goal, todoId}
                dispatch({type: 'CREATE_OBJECTIVE', payload: res})
            })
            .catch(err => err)
    }
}

export const deleteGoal = id => {

    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`http://localhost:3000/goals/${ id }`, data)
            .then(response => response.json())
            .then(goal => dispatch({
                type: 'DELETE_OBJECTIVE',
                payload: goal
            }))
            .catch(err => err)
    }
}

export const toggleCompleted = id => {
    let data = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return dispatch => {
        fetch(`http://localhost:3000/api/goals/${ id }`, data)
            .then(response => response.json())
            .then(goal => dispatch({
                type: 'TOGGLE_COMPLETED_OBJECTIVE',
                payload: goal
            }))
            .catch(err => err)
    }
}
