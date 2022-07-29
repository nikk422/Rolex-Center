import "./login.css";
import "./signUp.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { SignupValidChecker } from "../../styless/PasswordChecker";

export const SignUp = () => {
  const { SignupPage } = useAuth();
  const [error, setError] = useState({ isError: true });
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (!error.isError) {
      SignupPage(userDetail);
    }
  }, [error]);

  const inputHandler = (e) => {
    const { name, value } = e;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleCreateAccount = () => {
    const error = SignupValidChecker(userDetail);
    setError(error);
  };

  return (
    <div className="container flex-column align-center">
      <div className="login flex-column align-center gap-10px padding-17p margin-top-48p">
        <h1>
          <strong> Sign Up</strong>
        </h1>
        <label htmlFor="email">
          Email address
          <input
            type="text"
            onChange={(e) => inputHandler(e.target)}
            placeholder="abcd@gmail.com"
            name="email"
            required
            className="email authLable padding-8p font-10p"
          ></input>
        </label>
        {error.email && <div className="wrong-input">{error.email}</div>}
        <label htmlFor="First Name">
          First Name
          <input
            type="text"
            onChange={(e) => inputHandler(e.target)}
            name="firstName"
            required
            placeholder="Enter your first name"
            className="firstname authLable padding-8p font-10p"
          ></input>
        </label>
        {error.firstname && (
          <div className="wrong-input">{error.firstname}</div>
        )}
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            onChange={(e) => inputHandler(e.target)}
            required
            name="lastName"
            placeholder="Enter your last name"
            className="lastname authLable padding-8p font-10p"
          ></input>
        </label>
        {error.lastname && <div className="wrong-input">{error.lastname}</div>}
        <label htmlFor="new-password">
          New Password
          <input
            type="password"
            onChange={(e) => inputHandler(e.target)}
            name="password"
            required
            placeholder="**********"
            className="newpassword authLable padding-8p font-10p"
          ></input>
        </label>
        {error.password && <div className="wrong-input">{error.password}</div>}
        <label htmlFor="confirm-password">
          Confirm Password
          <input
            type="password"
            onChange={(e) => inputHandler(e.target)}
            name="confirmpassword"
            required
            placeholder="********"
            className="confirmpassword authLable padding-8p font-10p"
          ></input>
        </label>
        {error.confirmpassword && (
          <div className="wrong-input">{error.confirmpassword}</div>
        )}
        <label htmlFor="terms-conditions">
          <input
            type="checkbox"
            name="terms-conditions"
            className="ConditionBtn"
          ></input>
          I accept all Terms & Conditions
        </label>

        <button onClick={handleCreateAccount} className="CreateBtn logBlue padding-1p font-16p">
          Create New Account
        </button>
        <Link to="/Login">
          <button className="alreadyAcount padding-1p">
            Already have an Acount
          </button>
        </Link>
      </div>
    </div>
  );
};
