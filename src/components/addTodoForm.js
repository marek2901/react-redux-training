import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {addTodo} from '../actions/todoActions.js';
import {validate} from '../validators/addTodoValidator.js';
import {errorableField} from '../fieldsTemplates/errorableField.js';

class AddTodoForm extends React.Component {
    handleSubmit(data) {
        this
            .props
            .dispatch(addTodo(data.todosText));
        this
            .props
            .reset();
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <Field
                    name="todosText"
                    type="text"
                    component={errorableField}
                    placeholder="What you want to do?"/>
                <button>Submit</button>
            </form>
        );
    }
}

AddTodoForm = reduxForm({form: 'addTodo', validate})(AddTodoForm);

export default AddTodoForm;
