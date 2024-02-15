import { ADD_TODO } from "./AddTodo";
import { COMPLETE_TODO } from "./CompleteTodo";
import { DELETE_TODO } from "./DeleteTodo";

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload ? { ...item, done: true } : item
        ),
      };
    }
    default:
      return state;
  }
};
