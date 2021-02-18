import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoListSlice from './todoList'

const reducer = combineReducers({
    todoList: todoListSlice, 
})

export const store = configureStore({
    reducer,
})