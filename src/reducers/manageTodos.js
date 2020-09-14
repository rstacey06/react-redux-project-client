export default function todosReducer(state = {
    loading: false,
    todosData: [],
    todoData: []
    }, action){

        switch(action.type){
            case 'CREATE_TODO':
                return {...state, todosData:[...state.todosData, action.payload]}
            case 'LOADING_TODOS':
                return {...state, loading: true}
            case 'FETCH_TODOS':
                return {...state, loading: false, todosData: action.payload}
            case 'FETCH_TODO':
                return {...state, loading: false, todoData: action.payload}
            case 'DELETE_TODO':
                return {...state, loading: false, todosData: state.todosData.filter(todo => todo.id !== action.payload.id)}
            default:
                return state;
              }
            }
