import React from 'react';
import Todo from './Todo';
import { Container } from 'semantic-ui-react';

const Todos = props => {

    const todosList =  props.todos.map(todo =>
        <Todo
            key={todo.id}
            todo={todo}
            {...todo}
            deleteTodo={props.deleteTodo}
            // toggleComplete={props.toggleComplete}
        />)
    return (
        <Container>
            {todosList}
        </Container>
    );
};

export default Todos;
