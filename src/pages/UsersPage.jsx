import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/users/usersThunk";
import { Link } from "react-router-dom";

const UsersPage = () => {
  // const API_KEY = "zemvDlvtavG4trFqzcyYlOX0SHH_-hx8_z7YG56INKw9OFLh6A";
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  console.log(users);
  return (
    <div>
      <Link to="/create" className="link">
        Enter New Data
      </Link>
      {users.map((user) => (
        <div key={user._uuid}>
          <h3>Task: {user.name}</h3>
          <p>
            {user.isCompleted ? "Task is completed" : "Task is not completed"}
          </p>
          <Link to={`/update/${user._uuid}`}>Edit</Link>

          {/* <h3>{user.isCompleted}</h3> */}
          {/* <h3>{user}</h3> */}
          {/* <Link to={`/update/${user.id}`}>Edit</Link> */}
          {/* <button onClick={() => onDelete(user.id)}>delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
