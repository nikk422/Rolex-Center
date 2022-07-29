import { Navigate, useLocation } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const RequireAuth=({children})=>{
    const location = useLocation()
    const {login : {user}}=useAuth();


    return user ? (
        children
    ): 
    <Navigate to="/login" state={{pathname: location.pathname }} replace/>
}
export default RequireAuth;