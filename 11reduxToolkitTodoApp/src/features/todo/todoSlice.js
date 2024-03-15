import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello world"}]
}
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        /*you can add more reducers such as updateTodo which can be done by action id find and change text*/

        updateTodo:(state,action)=>{
            const { id, newText } = action.payload;
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, text: newText };
                }
                return todo;
            });
            
        }



        // updateTodo:(state, action) => {
        //     const { id, newText } = action.payload;
        //     const todoToUpdate = state.todos.find(todo => todo.id === action.payload.id);
        //     if (todoToUpdate) {
        //         todoToUpdate.text = newText;
        //     }    
        // }
        
        
        
    }
})
{/*below one is for reducer invidually export so that they can be used in the component*/};
// addtodo,etc are the actions in the reducer
export const {addTodo, updateTodo,removeTodo}=todoSlice.actions


{/*below one is to tell store that these reducer can change the state. Here we are only exporting the reducer*/};

export default todoSlice.reducer
/*export more slices if there present*/;
