import "./login.css";
import "./signUp.css";
import {Link} from "react-router-dom";

export const SignUp=()=>{
    return(
        <div className="container flex-column align-center">
        <div className="login flex-column align-center gap-10px padding-17p margin-top-48p">
            <h1><strong> Sign Up</strong></h1>
            <label htmlFor="email">
                Email address
                <input type="text" placeholder="abcd@gmail.com" className="email authLable padding-8p font-10p"></input>
            </label>
            <label htmlFor="First Name">
                First Name
                <input type="text" placeholder="Enter your first name" className="firstname authLable padding-8p font-10p"></input>
            </label>
            <label htmlFor="lastName">
                Last Name
                <input type="text" placeholder="Enter your last name" className="lastname authLable padding-8p font-10p"></input>
            </label>
            <label htmlFor="new-password">
                New Password
                <input type="password" placeholder="**********" className="newpassword authLable padding-8p font-10p"></input>
            </label>
            <label htmlFor="confirm-password">
                Confirm Password
                <input type="password" placeholder="********" className="confirmpassword authLable padding-8p font-10p"></input>
            </label>
            <label htmlFor="terms-conditions">
                <input type="checkbox" name="terms-conditions" className="ConditionBtn"></input>
                I accept all Terms & Conditions
            </label>

            <button className="CreateBtn logBlue padding-1p font-16p">Create New Account</button>
            <Link to="/Login">
            <button className="alreadyAcount padding-1p">Already have an Acount</button>
            </Link>
        </div>
    </div>
        )
}