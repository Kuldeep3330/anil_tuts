import { createSlice } from "@reduxjs/toolkit";

const todoslice= createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            state.push({
                id:Date.now(),
                text:action.payload,
                completed:false
            })
        },
        deleteTodo:(state, action)=>{
            return state.filter(todo=>todo.id!==action.payload)
        },
        toggleTodo:(state, action)=>{
            return state.map(todo=>todo.id===action.payload?{...todo, completed:!todo.completed}:todo)
        }        
    }
})

export const{addTodo, deleteTodo, toggleTodo}=todoslice.actions;
export default todoslice.reducer;