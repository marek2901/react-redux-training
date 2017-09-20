import React from 'react';

class TodoItem extends React.Component {
    toggleDone() {
        this
            .props
            .onToggle(this.props.item.id);
    }
    toggleEdit(){
        this
            .props
            .onToggleEdit(this.props.item.id)
    }
    render() {
        return (
            <li
                className={this.props.item.done
                ? 'done-item'
                : 'undone-item'}
                key={this.props.item.id}>
                {this.props.item.id}. {this.props.item.text}
                <button
                    onClick={this
                        .toggleEdit
                        .bind(this)}>
                    Edit
                </button>
                <button
                    onClick={this
                    .toggleDone
                    .bind(this)}>{this.props.item.done
                        ? 'Undone'
                        : 'Done'}</button>
            </li>
        );
    }
}

export default TodoItem;
