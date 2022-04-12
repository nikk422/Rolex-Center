import "./login.css";
import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div className="container">
        <div className="login">
            <h1><strong> Login </strong></h1>
            <label for="email">
                Email address
                <input type="text" placeholder="abcd@gmail.com" className="email authLable"></input>
            </label>
            <label for="password">
                Password
                <input type="password" placeholder="*********" className="password authLable"></input>
            </label>
            <label for="remember">
                <input type="checkbox" name="remember" className="rememberBtn"></input>
                Remember me
                <a className="forget-link" href="/">Forgot your password?</a>
            </label>
            <Link to="/Product">
            <button className="loginBtn">Login</button>
            </Link>

            <Link to="/SignUp">
            <button className="CreateBtn">Create New Acount </button>
            </Link>
        </div>
    </div>
        )
}
