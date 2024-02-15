import { ADD_TODO } from "./AddTodo";
import { COMPLETE_TODO } from "./CompleteTodo";
import { DELETE_TODO } from "./DeleteTodo";

export const addTodoAction = (todoItem) => ({
  type: ADD_TODO,
  payload: todoItem,
});
export const deleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
export const doneTodoAction = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});
