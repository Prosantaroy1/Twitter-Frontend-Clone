import { useContext } from "react";
import { AuthContent } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRouter = ({children}) => {
// 
    const {user,loading}=useContext(AuthContent);
    // 
    const location= useLocation();

    if(user){
        return children;
    }
    if(loading){
        <p>loading page..........</p>
    }

    return <Navigate to='/login' state={{from: location}}/>
};

export default PrivetRouter;