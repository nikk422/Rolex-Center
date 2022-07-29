import "./login.css";
import {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginValidChecker } from "../../styless/PasswordChecker";


export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const {  LoginPage, login } = useAuth();
  const [error, setError] = useState({ isError: true });
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!error.isError) {
      LoginPage(loginDetail);
    }
  }, [error]);

  useEffect(() => {
    if (login.user && location.state !== null) {
      navigate(location.state.pathname);
    }
  }, [Login, error]);


  const inputHandler = (e) => {
    const { name, value } = e;
    setLoginDetail({ ...loginDetail, [name]: value })
}


const loginHandler = async () => {
  const error = LoginValidChecker(loginDetail);
  setError(error)
};


const clickhandler=()=>{
    setError({ isError: false });
    setLoginDetail({
      email: "nikkmalviya422@gmail.com",
      password: "nikhil@123",
  })
  };

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
            name="email"
            value={loginDetail.email}
            required
            onChange={(e) => inputHandler(e.target)}
            placeholder="abcd@gmail.com"
            className="email authLable padding-8p font-10p"
          ></input>
        </label>
        {error.email && <div className="wrong-input">{error.email}</div>}
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={loginDetail.password}
            required
            onChange={(e) => inputHandler(e.target)}
            placeholder="*********"
            className="password authLable padding-8p font-10p"
          ></input>
        </label>
        {error.password && <div className="wrong-input">{error.password}</div>}
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
        <button onClick={loginHandler} className="loginBtn padding-8p font-16p">
          Login
        </button>
        <button onClick={clickhandler} className="loginBtn padding-8p font-16p">
          Login as guest
        </button>

        <Link to="/SignUp">
          <button className="CreateBtn padding-1p">Create New Acount </button>
        </Link>
      </div>
    </div>
  );
}
