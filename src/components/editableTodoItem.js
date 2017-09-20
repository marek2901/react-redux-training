import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {validate} from '../validators/addTodoValidator.js';
import {errorableField} from '../fieldsTemplates/errorableField.js';

class EditableTodoItem extends React.Component {
    handleSubmit(data) {
        this.props.onSubmit(this.props.item.id, data.todosText);
        this
            .props
            .reset();
    }
    handleCancel(){
        this.props.onCancel(this.props.item.id);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <li>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Field
                        name="todosText"
                        type="text"
                        component={errorableField}
                        placeholder="Edit your todo :O ?"/>
                    <button>Submit</button>
                    <button onClick={this.handleCancel.bind(this)}>Cancel</button>
                </form>
            </li>
        );
    }
}

EditableTodoItem = reduxForm({
    form: 'editTodo',
    validate,
    initialValues: {
        todosText: 'xdddd' // TODO figure out it dynamically
    }
})(EditableTodoItem);

export default EditableTodoItem;
