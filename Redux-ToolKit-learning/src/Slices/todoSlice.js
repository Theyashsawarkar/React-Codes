import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos : []
  },
  reducers: {
    addTodo: (state , action) => {
      let newTodo = {
        id: nanoid() ,
        text: action.payload,
      }

      let newTodos = [...state.todos , newTodo] ;
      console.log(newTodos)

      return {
        ...state ,
        todos: newTodos
      }
    },
    removeTodo: (state , action) => {
      let newTodos = state.todos.filter((todo) => (
         todo.id !== action.payload
      ))
      console.log(newTodos)
      return{
        ...state , 
        todos: newTodos
      }
    }
  }
})

export const {addTodo , removeTodo} = todoSlice.actions ;

export default todoSlice.reducer ;

