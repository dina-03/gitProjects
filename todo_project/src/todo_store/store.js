import {combineReducers} from 'redux'
import {configureStore} from "@reduxjs/toolkit";
import AppReducer from './appReducer/AppReducer'
import TodoReducer from './todoReducer/TodoReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
    todo: TodoReducer,
    app: AppReducer,
    auth
})

const store = configureStore({reducer: rootReducer})

export default store