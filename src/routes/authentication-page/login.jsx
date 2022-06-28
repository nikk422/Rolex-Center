import "./login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { setLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

const loginHandler=()=>{
  setLogin((login) => !login);
  navigate(location.state.from.pathname)
  toast.success("Login Successfully",{
    position: "top-right"
  })
}
   
   

  return (
    <div className="container flex-column align-center">
      <div className="login flex-column align-center gap-10px padding-17p margin-top-48p">
        <h1>
          <strong> Login </strong>
        </h1>
        <label htmlFor="email">
          Email address
          <input
            type="text"
            placeholder="abcd@gmail.com"
            className="email authLable padding-8p font-10p"
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="*********"
            className="password authLable padding-8p font-10p"
          ></input>
        </label>
        <label htmlFor="remember">
          <input
            type="checkbox"
            name="remember"
            className="rememberBtn"
          ></input>
          Remember me
          <a className="forget-link margin-left-16p" href="/">
            Forgot your password?
          </a>
        </label>
        <button
          onClick={loginHandler}
          className="loginBtn padding-8p font-16p"
        >
          Login
        </button>

        <Link to="/SignUp">
          <button className="CreateBtn padding-1p">Create New Acount </button>
        </Link>
      </div>
    </div>
  );
}
