import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "It is a todo app that is using redux-toolkit, react-redux library"},]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
            console.log(state.todos);
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer