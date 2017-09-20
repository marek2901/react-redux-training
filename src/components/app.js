import React from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

import {toggleDone, toggleEdit, editTodo} from '../actions/todoActions.js';

import AddTodoForm from './addTodoForm.js';
import TodoItemResolver from './todoItemResolver.js';

class App extends React.Component {
    render() {
        var todos = _.map(this.props.todos, (element) => {
            return(
                <TodoItemResolver
                  onToggle={this.toggleItem.bind(this)}
                  onToggleEdit={this.toggleItemEdit.bind(this)}
                  item={element}
                  onEditCancel={this.itemEditCancel.bind(this)}
                  onEditSubmit={this.itemEditSubmit.bind(this)}/>
            );
        });

        return (<div>
                  <h1>React todo JS</h1>
                  <ul>
                   {todos}
                  </ul>
                  <AddTodoForm/>
                </div>);
    }
    toggleItem(itemId){
        this.props.dispatch(toggleDone(itemId));
    }
    toggleItemEdit(itemId){
        this.props.dispatch(toggleEdit(itemId, true));
    }
    itemEditSubmit(itemId, text){
        this.props.dispatch(editTodo(itemId, text));
    }
    itemEditCancel(itemId){
        this.props.dispatch(toggleEdit(itemId, false));
    }
}

const ReduxApp = connect((store) => {
    return {todos: store.app.todos};
})(App);

export default ReduxApp;
