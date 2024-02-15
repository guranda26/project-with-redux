import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodoAction, doneTodoAction } from "../store/todo/todoActions";

const TodoListPage = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItem = (id) => {
    dispatch(deleteTodoAction(id));
  };
  const completeItem = (id) => {
    dispatch(doneTodoAction(id));
    navigate("/done");
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((item) => (
        <div key={item.id}>
          <div>{item.text}</div>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <button onClick={() => completeItem(item.id)}>Mark as done</button>
        </div>
      ))}
      <Link to={"/create"}>To create page</Link>
    </div>
  );
};

export default TodoListPage;
