import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Component/pages/Home Page/Home";
import Expolre from "../Component/pages/Expolre page/Expolre";
import Notification from "../Component/pages/Notification/Notification";
import Message from "../Component/pages/Message/Message";
import Profile from "../Component/pages/Profile/Profile";
import LoginPage from "../Component/pages/Login Page/LoginPage";
import Register from "../Component/pages/Register pgae/Register";
import PrivetRouter from "./PrivetRouter";
import Userlogout from "../Component/pages/User logout/Userlogout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivetRouter><Main/></PrivetRouter>,
        children: [
             {
                path: '/',
                element: <Home/>
             },
             {
                path:'/expolre',
                element: <Expolre/>
             },
             {
                path: '/notification',
                element: <Notification/>
             },
             {
                path: '/message',
                element: <Message/>
             },
             {
                path: '/profile',
                element: <Profile/>
             },
             {
               path: '/users',
               element: <Userlogout/>
             }
            
        ]
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/register',
      element: <Register/>
    }
])
export default router;