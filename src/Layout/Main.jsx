import { Outlet } from "react-router-dom";
import SidebarNav from "../Component/Sidebar Navber/SidebarNav";
import SiderbarRight from "../Component/Sidebar Right/SiderbarRight";

const Main = () => {
    return (
        <div className="grid relative grid-cols-4">
            {/* sidebar nav */}
            <div className="bg-black sticky top-0 left-0   flex flex-col items-center h-screen overflow-scroll">
                <SidebarNav/>
            </div>
            {/* main home */}
            <div className="col-start-2 border-x-2 border-slate-500 col-end-4 bg-black p-2">
                <Outlet/>
            </div>
            {/* sidebar right */}
            <div className="bg-black px-5 sticky top-0 left-0 h-screen  col-start-4 col-end-5 text-white overflow-auto">
                <SiderbarRight/>
            </div>
        </div>
    );
};

export default Main;