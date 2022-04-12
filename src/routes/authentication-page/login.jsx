import "./login.css";
import {Link} from "react-router-dom";

export default function Login(){
    return(
        <div class="container">
        <div class="login">
            <h1><strong> Login </strong></h1>
            <label for="email">
                Email address
                <input type="text" placeholder="abcd@gmail.com" class="email authLable"></input>
            </label>
            <label for="password">
                Password
                <input type="password" placeholder="*********" class="password authLable"></input>
            </label>
            <label for="remember">
                <input type="checkbox" name="remember" class="rememberBtn"></input>
                Remember me
                <a class="forget-link" href="/">Forgot your password?</a>
            </label>
            <Link to="/Product">
            <button class="loginBtn">Login</button>
            </Link>

            <Link to="/SignUp">
            <button class="CreateBtn">Create New Acount </button>
            </Link>
        </div>
    </div>
        )
}