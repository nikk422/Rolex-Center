import { Navigate, useLocation } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const RequireAuth=({children})=>{
    const location = useLocation()
    const {login}=useAuth()
    return login ? (
        children
    ): 
    <Navigate to="/login" state={{from: location}} replace/>
}
export default RequireAuth;