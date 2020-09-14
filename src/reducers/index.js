import { combineReducers } from 'redux';
import todosReducer from './manageTodos';
import goalsReducer from './manageGoals';

const rootReducer = combineReducers({
    todos: todosReducer,
    goals: goalsReducer
})

export default rootReducer;
