import CreateTodoPage from "../pages/CreateTodo";
import { IsDoneList } from "../pages/IsDoneList";
import TodoListPage from "../pages/TodoList";
import UpdatePage from "../pages/UpdateUsers";
import UsersPage from "../pages/UsersPage";

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
  {
    element: <UsersPage />,
    path: "/users",
  },
  {
    element: <UpdatePage />,
    path: "/update/:userId",
  },
];
