import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import MainHome from "../Component/Main Content/MainHome";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
             {
                path: '/',
                element: <MainHome/>
             }
        ]
    }
])
export default router;