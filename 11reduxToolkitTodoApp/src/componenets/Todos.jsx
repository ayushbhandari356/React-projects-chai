/*import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()
  return (
   <>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id} >{todo.text}  <button className='bg-red-600' onClick={()=>dispatch(removeTodo(todo))}>x</button></li>
       
    ))}
    </>
  )
}

export default Todos
*/



/*
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Todos</h2>
      <div className="flex justify-center">
      <ul className="space-y-2 w-1/2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center rounded-lg bg-white">
            <input
              type="text"
              value={todo.text}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
              className="flex-grow px-2 py-1 border border-gray-300 rounded mr-2 focus:outline-none"
            />
            <button
              className="bg-violet-600 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
              onClick={() => dispatch(removeTodo(todo))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default Todos;*/



import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };

  
  const [disableInput,setDisableInput]=useState(false)
  const handleDisableInput=()=>{
    setDisableInput(false)
  }


  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Todos</h2>
      <div className="flex justify-center">
      <ul className="space-y-2 w-1/2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center rounded-lg bg-white">
            <input
              type="text"
              value={todo.text}
              disabled={disableInput}
              onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
              className="flex-grow px-2 py-1 border border-gray-300 rounded mr-2 focus:outline-none"
            />
            <button
              className="bg-violet-600 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
              onClick={() => dispatch(removeTodo(todo))}
            >
              x
            </button>
            <button
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none"
              onClick={handleDisableInput}
            >
              z
            </button>
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default Todos;


