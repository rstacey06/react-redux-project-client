import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Todo = ({ target, deleteTodo, id }) => {

    return(
        <div className="todo">
            <NavLink key={id} to={`/todos/${id}/goals`}><h3>{target}</h3></NavLink>
            {/* {count}.  */}
            <Button className="delete-button" color='red' size='mini' onClick={() => deleteTodo(id)}>X</Button>
            <Button className="complete-button" color='green' size='mini' onClick={() => deleteTodo(id)}>Done!</Button>

            {/* <Button className="priority-button" color='yellow' size='mini' onClick={() => setCount(count + 1)}> Prioritize</Button> */}

        </div>
    )
}

export default Todo;
