export const fetchAllTodos = () => {
    return {type: 'SHOW_ALL_TODOS'};
};

export const fetchNotDoneTodos = () => {
    return {type: 'SHOW_NOT_DONE_TODOS'};
};

export const fetchDoneTodos = () => {
    return {type: 'SHOW_DONE_TODOS'};
};

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            text: text,
            done: false
        }
    };
};

export const editTodo = (id, text) => {
    return {
        type: 'EDIT_TODO',
        payload: {
            id: id,
            text: text
        }
    };
};

export const toggleDone = (id) => {
    return {
        type: 'TOGGLE_DONE',
        payload: id
    };
};

export const toggleEdit = (id, editable) => {
    return {
        type: 'TOGGLE_EDIT',
        payload: {
            id: id,
            editable: editable
        }
    };
};
