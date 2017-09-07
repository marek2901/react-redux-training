import React from 'react'
import {connect} from 'react-redux'

import _ from 'lodash'

import AddTodoForm from './addTodoForm.js'

class App extends React.Component {
    render() {
        var todos = _.map(this.props.todos, (element, index) => {
            return <li key={index}>
                {index}. {element.text}
            </li>
        });

        return <div>
            <h1>React todo JS</h1>
            <ul>
                {todos}
            </ul>
            <AddTodoForm/>
        </div>
    }
}

const ReduxApp = connect((store) => {
    return {todos: store.app.todos}
})(App)

export default ReduxApp