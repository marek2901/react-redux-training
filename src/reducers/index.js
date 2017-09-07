import todosRed from './todosReducer.js'
import {combineReducers} from 'redux'
import {reducer as reduxFormReducer} from 'redux-form'

const reducer = combineReducers({
    form: reduxFormReducer,
    app: todosRed
})

export default reducer