import React from 'react';

class TodoItem extends React.Component {
    toggleDone(){
        this.props.onToggle(this.props.item.id);
    }
    render(){
        return(<li key={this.props.item.id}>
               {this.props.item.id}. {this.props.item.text}
               <button onClick={this.toggleDone.bind(this)}>{this.props.item.done ? 'Undone' : 'Done'}</button>
               </li>);
    }
}

export default TodoItem;
