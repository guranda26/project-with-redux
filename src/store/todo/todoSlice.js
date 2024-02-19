import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    // completeTodo(state, action) {
    //   state.todoList = state.todoList.map((item) =>
    //       item.id === action.payload ? { ...item, done: true } : item
    //     ),
    // }
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
