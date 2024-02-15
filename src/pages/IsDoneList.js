import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const IsDoneList = () => {
  const { todoList } = useSelector((state) => state.todo);
  const completedTasks = todoList.filter((item) => item.done);
  return (
    <div>
      <h2>Completed tasks</h2>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <div>{task.text}</div>
        </div>
      ))}
      <Link to={"/"}>Task List</Link>
    </div>
  );
};
