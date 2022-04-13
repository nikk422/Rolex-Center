import "./login.css";
import "./signUp.css";
import {Link} from "react-router-dom";

export const SignUp=()=>{
    return(
        <div class="container">
        <div class="login">
            <h1><strong> Sign Up</strong></h1>
            <label for="email">
                Email address
                <input type="text" placeholder="abcd@gmail.com" class="email authLable"></input>
            </label>
            <label for="First Name">
                First Name
                <input type="text" placeholder="Enter your first name" class="firstname authLable"></input>
            </label>
            <label for="lastName">
                Last Name
                <input type="text" placeholder="Enter your last name" class="lastname authLable"></input>
            </label>
            <label for="new-password">
                New Password
                <input type="password" placeholder="**********" class="newpassword authLable"></input>
            </label>
            <label for="confirm-password">
                Confirm Password
                <input type="password" placeholder="********" class="confirmpassword authLable"></input>
            </label>
            <label for="terms-conditions">
                <input type="checkbox" name="terms-conditions" class="ConditionBtn"></input>
                I accept all Terms & Conditions
            </label>

            <button class="CreateBtn logBlue">Create New Account</button>
            <Link to="/Login">
            <button class="alreadyAcount">Already have an Acount</button>
            </Link>
        </div>
    </div>
        )
}