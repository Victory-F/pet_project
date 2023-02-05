import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is a HomePage</h1>
      <button onClick={navigate("/signup")}>SignUp</button>
      <button onClick={navigate("/login")}>Login</button>
    </div>
  );
};
