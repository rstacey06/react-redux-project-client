import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class Goal extends Component {

    handleCheck = () => {
        this.props.toggleCompleted(this.props.id)
    }

    render() {
        return(
            <div>
                {/* <Icon className="pointer" name='edit' color='blue' onClick={() => console.log("editing")} /> */}

                <Icon className="pointer" name='delete' color='red' onClick={() => this.props.deleteGoal(this.props.id)} />{this.props.description}

            </div>
        )
    }
}
