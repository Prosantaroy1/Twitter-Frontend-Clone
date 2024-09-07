import { Outlet } from "react-router-dom";
import SidebarNav from "../Component/Sidebar Navber/SidebarNav";
import SiderbarRight from "../Component/Sidebar Right/SiderbarRight";

const Main = () => {
    return (
        <div className="grid relative grid-cols-4">
            {/* sidebar nav */}
            <div className="bg-black sticky top-0 left-0 hidden md:flex flex-col items-center h-screen overflow-scroll">
                <SidebarNav/>
            </div>
            {/* main home */}
            <div className=" border-x-2   lg:col-span-3 xl:col-span-2 md:col-span-3 col-span-4 overflow-hidden border-slate-500  bg-black p-2">
                <Outlet/>
            </div>
            {/* sidebar right */}
            <div className="bg-black px-5 sticky top-0 left-0 h-screen hidden lg:block   text-white overflow-scroll">
                <SiderbarRight/>
            </div>
        </div>
    );
};

export default Main;