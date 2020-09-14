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

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todosData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
