// CONTAINER COMPONENTS
// usually class components, usually render other components
// a neater way to organize: these components render the components in the Components folder

import React, { Component } from 'react';
import Todos from '../components/Todos/Todos';
import TodoInput from '../components/Todos/TodoInput';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions/todosActions';
import { Container } from 'semantic-ui-react';
import TodosHeader from '../components/Todos/TodosHeader';

class TodosContainer extends Component {


    componentDidMount(){
        this.props.fetchTodos()
    }

    render() {
        return(
            <Container>
                <TodosHeader />
                <Todos todos={this.props.todos} deleteTodo={this.props.deleteTodo} />
                <TodoInput />
            </Container>
        )
    }
}

// mapStateToProps: we want access to what's in the store
const mapStateToProps = (state) => {
    return {
        todos: state.todos.todosData
    }
}

// mapDispatchToProps: we want the ability to dispatch new actions to our store from our component
const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
