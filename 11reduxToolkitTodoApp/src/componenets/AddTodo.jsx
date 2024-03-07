import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
    const [input, setInput]=React.useState('')
    const dispatch =useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        {/*now clean the input */};
        
        setInput('')
    }
    
  return (
    <div>
      <form onSubmit={addTodoHandler} className=" Space-x-3 mt-12">
        <input
          type="text"
          className="px-4 py-2 border border-red-900 rounded-l focus:outline-none focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
