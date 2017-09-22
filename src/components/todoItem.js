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
            .onToggleEdit(this.props.item.id);
    }
    resolveClassNames(){
        const doneClasses = this.props.item.done
              ? 'done-item list-group-item-success'
              : 'undone-item list-group-item-warning';
        return `${doneClasses} list-group-item todo-item`;
    }
    resolveButtonClassNames(){
        return this.props.item.done
             ? 'btn-danger' :
               'btn-success';
    }
    deleteTodo(){
        this
            .props
            .onDelete(this.props.item.id);
    }
    render() {
        return (
            <li
                className={this.resolveClassNames.call(this)}
                key={this.props.item.id}>
                <div className='col-md-9 align-middle'>
                    {this.props.item.id}. {this.props.item.text}
                </div>
                <div className='col-md-3'>
                    <button
                        className='btn btn-link'
                        onClick={this
                            .toggleEdit
                            .bind(this)}>
                        Edit
                    </button>
                    <button
                        className={`btn ${this.resolveButtonClassNames.call(this)}`}
                        onClick={this
                            .toggleDone
                            .bind(this)}>{this.props.item.done
                                        ? 'Undone'
                                        : 'Done'}</button>
                    {this.props.item.done &&
                     <button
                         className='btn btn-success'
                         onClick={this
                             .deleteTodo
                             .bind(this)}> Delete </button>
                    }
                </div>
            </li>
        );
    }
}

export default TodoItem;
