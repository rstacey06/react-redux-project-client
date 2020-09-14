import React, { Component } from 'react';
import Goals from '../components/Goals/Goals';
import GoalInput from '../components/Goals/GoalInput';
import { addGoal, deleteGoal, fetchTodoGoals, toggleCompleted } from '../actions/goalsActions';
import { connect } from 'react-redux';
import { fetchTodo } from '../actions/todosActions';

class GoalsContainer extends Component {

    componentDidMount() {
        this.props.fetchTodoGoals(this.props.match.params.todoId)
        this.props.fetchTodo(this.props.match.params.todoId)
    }

    render() {
        const todoId = this.props.match.params.todoId

        return(
            <div>
                <Goals
                    key={this.props.todo.id}
                    todo={this.props.todo}
                    goals={this.props.goals}
                    deleteGoal={this.props.deleteGoal}
                    toggleCompleted={this.props.toggleCompleted}
                />
                <GoalInput addGoal={this.props.addGoal} todoId={todoId}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    goals: state.goals.goalsData,
    todo: state.todos.todoData
})

const mapDispatchToProps = dispatch => ({
    fetchTodoGoals: todoId => dispatch(fetchTodoGoals(todoId)),
    fetchTodo: todoId => dispatch(fetchTodo(todoId)),
    addGoal: (goalInput, todoId) => dispatch(addGoal(goalInput, todoId)),
    deleteGoal: goalId => dispatch(deleteGoal(goalId)),
    toggleCompleted: goalId => dispatch(toggleCompleted(goalId))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);
