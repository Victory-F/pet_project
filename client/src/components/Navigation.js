import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../store/user/selectors";
import { logOut } from "../store/user/slice";

export const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return (
    <div>
      {token ? (
        <div>
          <h1>Hello, {user.name}</h1>
          <button onClick={() => navigate("/vocabularies")}>
            Vocabularies
          </button>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/signup")}>SignUp</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
};
