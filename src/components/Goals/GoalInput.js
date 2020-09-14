import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class GoalInput extends Component {

    state = {
        description: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addGoal(this.state, this.props.todoId);
        this.setState({
            description: ""
        })
    }

    render() {
        const validated = this.state.description.length > 2;

        return(
            <Form inverted className="new-goal form" onSubmit={(event) => this.handleOnSubmit(event)}>
                <Form.Field>
                    <label className="form-label">Add Goal</label>
                    <input placeholder="Goals" id="description" required value={this.state.description} onChange={this.handleChange} />
                </Form.Field>

                <Button disabled={!validated} size='mini' type="submit">Submit</Button>
            </Form>
        )
    }
}

export default GoalInput;
