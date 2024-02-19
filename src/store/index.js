import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import counterReducer from "./counter/counterSlice";
import usersReducer from "./users/usersSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
  users: usersReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
