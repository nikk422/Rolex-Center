import {useAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import "./login.css";


const Logout = () => {
    const {logoutHandler } = useAuth();

    return (
      <div>
        <div className="auth-container flex-center">
          <section className="auth-contain">
            <h2>LogOut</h2>
            <p>Thank you for coming Rolex Watch Center </p>
            <Link to="/">
            <button onClick={logoutHandler} className="loginbtn-createAcount">
              Logout
            </button>
            </Link>
            <Link to="/">
              <button className="backBtn-log font-16p padding-4px">
                Back to home
              </button>
            </Link>
          </section>
        </div>
      </div>
    );
  };
  
  export default Logout;