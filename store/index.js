import { createStore, applyMiddleware, combineReducers } from 'redux'
import userReducer from './users.js'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const reducer = combineReducers(userReducer)
const middleware = applyMiddleware(thunkMiddleware, createLogger())

const store = createStore(reducer, middleware)

export default store
