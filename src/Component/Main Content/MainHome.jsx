import { NavLink } from "react-router-dom";
import PostSec from "../pages/post Page/PostSec";

const MainHome = () => {
    return (
        <>
        <div className="h-[2003px] font-fontpp">
            {/* main navber */}
            <div className="bg-black px-32 text-white sticky py-6 border-b-2 border-slate-500 top-0 left-0">
                <ul className="flex justify-between items-center">
                    <li className="text-3xl font-semibold"><NavLink>For you</NavLink></li>
                    <li className="text-3xl font-semibold"><NavLink>Following</NavLink></li>
                </ul>
            </div>
            {/* post and data post section */}
            <PostSec/>
        </div>
        </>
    );
};

export default MainHome;