import { GET_TODO, ADD_TODO, DELELTE_TODO } from './../action/todo';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            console.log(action.payload)
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case DELELTE_TODO:
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}
