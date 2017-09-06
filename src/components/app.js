import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions/todoActions.js'

class App extends React.Component {
    render() {
        var todos = []
        this
            .props
            .todos
            .forEach(function (element, index) {
                todos.push(
                    <li key={index}>
                        {index}. {element.text}
                    </li>
                )
            }, this);

        return <div>
            <h1>React todo JS</h1>
            <ul>
                {todos}
            </ul>
            <button onClick={() => this.props.dispatch(addTodo('MAREK'))}>
                Add TODO
            </button>
        </div>
    }
}

const ReduxApp = connect((store) => {
    return {todos: store.todos}
})(App)

export default ReduxApp