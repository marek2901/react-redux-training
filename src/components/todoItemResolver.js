import React from 'react';

import TodoItem from './todoItem.js';

import EditableItem from './editableTodoItem.js';

class TodoItemResolver extends React.Component {
    render() {
    	if(this.props.item.editable){
	        return (
	        	  <EditableItem
                onSubmit={this.props.onEditSubmit}
                item={this.props.item}
                onCancel={this.props.onEditCancel}/>
	        );
    	} else{
        	return(
              <TodoItem
                onToggle={this.props.onToggle}
                onToggleEdit={this.props.onToggleEdit}
                onDelete={this.props.onDelete}
                item={this.props.item}/>
          );
      }
    }
}

export default TodoItemResolver;
