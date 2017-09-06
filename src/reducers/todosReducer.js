import _ from 'lodash';

export default function reducer(state = {
    todos: []
}, action) {
    switch (action.type) {
        case 'SHOW_ALL_TODOS':
            return state
        case 'SHOW_NOT_DONE_TODOS':
            return {
                ...state,
                todos: _.filter(state.todos.slice(), (item) => !item.done)
            }
        case 'SHOW_DONE_TODOS':
            return {
                ...state,
                todos: _.filter(state.todos.slice(), (item) => item.done)
            }
        case 'ADD_TODO':
            var newTodos = state.todos.slice()
            newTodos.push(action.payload)
            return {
                ...state,
                todos: newTodos
            }
        default:
            return state
    }
}