import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todoReducers";

const rootReducer = combineReducers({
  todo: todoReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
