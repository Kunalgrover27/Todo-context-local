import { useContext } from "react";
import { createContext } from "react";

export default TodoContext=createContext({
    todos:
        [{
            id:1,
            todo:"any message",
            completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toogleTodo:(id)=>{},
})

export const todoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}