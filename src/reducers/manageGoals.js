export default function goalsReducer(state = {
    loading: false,
    goalsData: []},
    action){

    switch(action.type){
        case 'FETCH_GOALS':
            return {...state, goalsData: action.payload.goals}
        case 'LOADING_GOALS':
            return {...state, loading: true}
        case 'CREATE_OBJECTIVE':
            return {...state, goalsData:[...state.goalsData, action.payload.goal]}
        case 'DELETE_OBJECTIVE':
            return {...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id )}
        case 'TOGGLE_COMPLETED_OBJECTIVE':
            return {...state, goalsData: [...state.goalsData.map(goal => goal.id === action.payload.id ? {...goal, completed: !goal.completed} : goal )]}
        default:
            return state;
    }
}
