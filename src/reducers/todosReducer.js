import _ from 'lodash';

const reducer = (state = {
    todos: []
}, action) => {
    switch (action.type) {
    case 'SHOW_ALL_TODOS':
        return state;
    case 'SHOW_NOT_DONE_TODOS':
        return {
            ...state,
            todos: _.filter(state.todos.slice(), (item) => !item.done)
        };
    case 'SHOW_DONE_TODOS':
        return {
            ...state,
            todos: _.filter(state.todos.slice(), (item) => item.done)
        };
    case 'ADD_TODO':
        var newTodos = state.todos.slice();
        newTodos.push({...action.payload, id: nextId(newTodos) });
        return {
            ...state,
            todos: newTodos
        };
    case 'TOGGLE_DONE':
        var todos = state.todos.slice();
        todos = _.map(todos, (element) => {
            if (element.id === action.payload){
                element.done = !element.done;
            }
            return element;
        });
        return {
            ...state,
            todos: todos
        };
    default:
        return state;
    }
};

const nextId = (newTodos) => {
    if (newTodos.length > 0)
        return newTodos[newTodos.length -1].id + 1 || 0 ;
    else
        return 0;
};

export default reducer;
