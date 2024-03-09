import { useContext, createContext } from "react";
// making context containing of objection and the first one todo is an array of object
// we can ma as many no of context 
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"to message",
            completed:false
        }
    ],
    // we are only declearing function here not defining
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})
// in this we are not make another file of profider all of working done here
export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
