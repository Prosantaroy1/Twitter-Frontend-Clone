import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Component/pages/Home Page/Home";
import Expolre from "../Component/pages/Expolre page/Expolre";
import Notification from "../Component/pages/Notification/Notification";
import Message from "../Component/pages/Message/Message";
import Profile from "../Component/pages/Profile/Profile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
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
             }
        ]
    }
])
export default router;