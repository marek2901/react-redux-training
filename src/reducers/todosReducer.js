import _ from 'lodash';

const reducer = (state = {
    todos: beginningTodosState()
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
    case 'TOGGLE_EDIT':
        var todos = state.todos.slice();
        todos = _.map(todos, (element) => {
            if (element.id === action.payload.id){
                element.editable = action.payload.editable;
            } else {
                element.editable = false;
            }
            return element;
        });
        return {
            ...state,
            todos: todos
        };
    case 'EDIT_TODO':
        var editedTodos = _.map(
            state.todos.slice(),
            (element) => {
                if(element.id === action.payload.id){
                    element.text = action.payload.text;
                    element.editable = false;
                }
                return element;
            });
        return {
            ...state,
            todos: editedTodos
        };
    case 'TOGGLE_DONE':
        var todosToggled = state.todos.slice();
        todosToggled = _.map(todosToggled, (element) => {
            if (element.id === action.payload){
                element.done = !element.done;
            }
            return element;
        });
        return {
            ...state,
            todos: todosToggled
        };
    case 'DELETE_TODO':
        var filteredTodos = _.filter(
            state.todos.slice(),
            (item) => item.id !== action.payload
        );
        return {
            ...state,
            todos: filteredTodos
        };
    default:
        return state;
    }
};

const beginningTodosState = () => {
    try{
        return JSON.parse(localStorage.getItem('app')).todos || [];
    }catch(_err){
        return [];
    }
};

const nextId = (newTodos) => {
    if (newTodos.length > 0)
        return newTodos[newTodos.length -1].id + 1 || 0 ;
    else
        return 0;
};

export default reducer;
