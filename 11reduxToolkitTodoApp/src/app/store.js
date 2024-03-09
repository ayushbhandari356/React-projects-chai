import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";


export const store =configureStore({
    // isme reducers me many slices ho skte hai yaha abhi ek hai
    reducer: todoSlice
})