import CreateTodoPage from "../pages/CreateTodo";
import { IsDoneList } from "../pages/IsDoneList";
import TodoListPage from "../pages/TodoList";

export const router = [
  {
    element: <TodoListPage />,
    path: "/",
  },
  {
    element: <CreateTodoPage />,
    path: "/create",
  },
  {
    element: <IsDoneList />,
    path: "/done",
  },
];
