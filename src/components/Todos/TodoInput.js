import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { addTodo } from '../../actions/todosActions';
import { connect } from 'react-redux';

class TodoInput extends Component {

    state = {
        target: "",
        plan: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            target: "",
            plan: ""
        })
    }

    render() {
        const validated = this.state.target.length > 2 && this.state.plan.length > 2;

        return(
            <Form inverted className="new-todo-form" onSubmit={this.handleOnSubmit}>
                <h5>Make A New Task</h5>
                <Form.Field>
                    <label className="form-label">Task</label>
                    <input placeholder="Message Here" id="target" required value={this.state.target} onChange={this.handleChange} />
                </Form.Field>

                <Form.Field>
                    <label className="form-label">Plan:</label>
                    <textarea placeholder="What's your plan?" required id="plan" value={this.state.plan} onChange={this.handleChange} />
                </Form.Field>

                <Button disabled={!validated} type="submit">Add Todo</Button>
            </Form>
        )
    }
}

export default connect(null, { addTodo })(TodoInput);
