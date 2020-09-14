import React from 'react';
import Goal from './Goal';

const Goals = (props) => {
    const goalsList = props.goals.map(goal =>
        <li className="goal-items" key={goal.id}>
            <Goal

                id={goal.id}
                completed={goal.completed}
                description={goal.description}
                deleteGoal={props.deleteGoal}
                toggleCompleted={props.toggleCompleted}
                />
        </li>)

    return (
        <div className="goals-box">
            <h1>{props.todo.target}</h1>
            <label><strong>PLAN</strong></label>
            <p>{props.todo.plan}</p>
            <strong>GOALS</strong>
            <ul>
                {goalsList}
            </ul>
        </div>
    );
};

export default Goals;
