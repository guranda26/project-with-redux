import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { createUser } from "../store/users/usersThunk"; // Adjust the import path

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.users.loading); // Adjust according to your state shape

  const onSubmit = (name, isCompleted) => {
    dispatch(createUser({ name, isCompleted }))
      .then(() => navigate("/users"))
      .catch((error) => console.log(error));
  };

  if (loading) return <p>Is Loading ...</p>;

  return <UserForm onFormSubmit={onSubmit} />;
};

export default CreatePage;
