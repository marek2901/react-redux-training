export function fetchAllTodos() {
    return {type: 'SHOW_ALL_TODOS'}
}

export function fetchNotDoneTodos() {
    return {type: 'SHOW_NOT_DONE_TODOS'}
}

export function fetchDoneTodos() {
    return {type: 'SHOW_DONE_TODOS'}
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            text: text,
            done: false
        }
    }
}