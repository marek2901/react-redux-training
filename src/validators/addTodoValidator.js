export const validate = values => {
    const errors = {};
    if (!values.todosText) {
        errors.todosText = 'Required';
    }
    return errors;
};
