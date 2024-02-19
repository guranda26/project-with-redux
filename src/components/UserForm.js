import { useState } from "react";

const UserForm = ({
  onFormSubmit,
  initialName = "",
  initialIsCompleted = false,
}) => {
  const [name, setName] = useState(initialName);
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name, isCompleted);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name} // Use value for controlled component
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="checkbox"
        id="completed"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <label htmlFor="completed">Task is completed</label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
