import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { logOut } from "../store/user/slice";

export const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

  return (
    <div>
      {token ? (
        <button onClick={() => dispatch(logOut())}>Logout</button>
      ) : (
        <div>
          <button onClick={() => navigate("/signup")}>SignUp</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
};
