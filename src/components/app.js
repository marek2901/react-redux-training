import React from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

import {toggleDone} from '../actions/todoActions.js';

import AddTodoForm from './addTodoForm.js';
import TodoItem from './todoItem.js';

class App extends React.Component {
    render() {
        var todos = _.map(this.props.todos, (element) => {
            return <TodoItem onToggle={this.toggleItem.bind(this)} item={element}/>;
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
}

const ReduxApp = connect((store) => {
    return {todos: store.app.todos};
})(App);

export default ReduxApp;
