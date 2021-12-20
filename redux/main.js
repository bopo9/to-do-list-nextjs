import * as t from "./types";

const main = (state = {
    error: null,
    checked: false,
    todos: []
}, action) => {
    switch(action.type){
        case t.GET_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case t.SET_TODO:
            return {
                ...state,
                todos: state.todos.push(action.payload)
            }
        case t.CHECK_TODO:
            return {
                ...state,
                checked: state.checked = action.payload

            };
        case t.DELETE_TODO:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                age: action.payload.age,
                token: action.payload.token,
                loading: false,
                error: null
            };
        case t.ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return {...state};
    }
};

export default main;