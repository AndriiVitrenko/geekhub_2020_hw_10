import {createSlice} from '@reduxjs/toolkit';

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        list: [
            {
                text: 'Task 1', 
                index: 0, 
                isCompleted: true,
            },
            {
                text: 'Task 2',
                index: 1,
                isCompleted: false
            }
        ]
    },
    reducers: {
        addTodo(state, action) {
            state.list = [{text: action.payload, index: 0, isCompleted: false}, ...state.list];
            state.list.forEach((item, index) => item.index = index)
        },
        deleteTodo (state, action) {
            state.list.splice(action.payload, 1)
            state.list.forEach((item, index) => item.index = index)
        },
        changeState(state, action) {
            state.list[action.payload].isCompleted = !state.list[action.payload].isCompleted;
        }
    }
})

export default todoListSlice.reducer
export const {
    addTodo,
    deleteTodo,
    changeState
} = todoListSlice.actions