import React from 'react'
import { useTodo } from '../Context';
import { useState } from 'react';

function TodoForm() {
    {/*this todo is for individual todo means local todo of this file */};
    
    const [todo,setTodo]=useState("")
    // addtodo - we are object destructuring here from useTodo
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo:todo,completed:false})
        // now making the todo empty for next todo to be written
        setTodo("")
    }

    return (
        <form onSubmit={add}  className="flex font-serif">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;