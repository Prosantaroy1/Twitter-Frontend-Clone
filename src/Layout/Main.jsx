import { NavLink, Outlet } from "react-router-dom";
import SidebarNav from "../Component/Sidebar Navber/SidebarNav";
import SiderbarRight from "../Component/Sidebar Right/SiderbarRight";
import { IoMdHome } from "react-icons/io";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";



const Main = () => {
    return (
        <div>
            <div className="grid relative grid-cols-4">
                {/* sidebar nav */}
                <div className="bg-black sticky top-0 left-0 hidden md:flex overflow-scroll  h-screen">
                    <SidebarNav />
                </div>
                {/* main home */}
                <div className=" border-x-2  pb-40 lg:col-span-3 xl:col-span-2 md:col-span-3 col-span-4 overflow-hidden border-slate-500  bg-black p-2">
                    <Outlet />
                </div>
                {/* sidebar right */}
                <div className="bg-black px-5 sticky top-0 left-0 h-screen hidden lg:block   text-white overflow-scroll">
                    <SiderbarRight />
                </div>
            </div>
            {/* mobile */}
            <div className='px-4 fixed bottom-0 left-0 right-0 md:hidden block text-black shadow bg-slate-400  py-4 border-b-2 border-slate-500'>
                <ul className="flex  justify-center gap-12 items-center">
                    <li className="text-2xl  bg-black text-white p-4 rounded-full   font-semibold">
                        <NavLink to='/'>
                            <IoMdHome className="text-3xl" />
                        </NavLink>
                    </li>
                    <li className="text-2xl  bg-black text-white p-4 rounded-full   font-semibold">
                        <NavLink to='/profile'>
                            <FaUserCircle className="text-3xl" />
                        </NavLink>
                    </li>
                    <li className="text-2xl  bg-black text-white p-4 rounded-full   font-semibold">
                        <NavLink to='/message'>
                            <FaUserFriends className="text-3xl" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;