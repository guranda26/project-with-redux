import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todo/todoActions";
import { Link } from "react-router-dom";
const CreateTodoPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const todoItem = {
      id: Date.now(),
      text: value,
      done: false,
    };
    dispatch(addTodoAction(todoItem));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Submit</button>

      <Link to={"/"}>To List</Link>
    </form>
  );
};

export default CreateTodoPage;
