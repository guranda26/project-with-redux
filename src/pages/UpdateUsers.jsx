import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { fetchUserById } from "../store/users/usersSlice";
import usersSlice from "../store/users/usersSlice";

const UpdatePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [dispatch, userId]);

  const onSubmit = (name, complete) => {
    dispatch(usersSlice({ userId, name, complete }))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (loading && !currentUser) return <div>Is Loading... please wait</div>;
  if (error || !currentUser) return <div>Something Wrong</div>;

  return (
    <UserForm
      onFormSubmit={onSubmit}
      // name={currentUser.name}
      // complete={currentUser.complete}
      initialValues={{ name: currentUser.name, complete: currentUser.complete }}
    />
  );
};

export default UpdatePage;
