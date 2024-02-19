import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodoAction, doneTodoAction } from "../store/todo/todoActions";
import { deleteTodo } from "../store/todo/todoSlice";
import {
  counterSelector,
  decrement,
  increment,
} from "../store/counter/counterSlice";

const TodoListPage = () => {
  const dispatch = useDispatch();

  const { todoList } = useSelector((state) => state.todo);
  const count = useSelector(counterSelector);
  const navigate = useNavigate();

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };
  const completeItem = (id) => {
    dispatch(doneTodoAction(id));
    navigate("/done");
  };

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  console.log(count);

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
      <div>
        <Link to={"/create"}>To create page</Link>
      </div>
      <div>
        <Link to={"/users"}>To Users page</Link>
      </div>

      <div>
        <h3>Tasks To Be done: {count}</h3>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
};

export default TodoListPage;
