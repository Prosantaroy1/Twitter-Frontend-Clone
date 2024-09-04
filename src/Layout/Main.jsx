import { Outlet } from "react-router-dom";
import SidebarNav from "../Component/Sidebar Navber/SidebarNav";

const Main = () => {
    return (
        <div className="grid relative grid-cols-4">
            {/* sidebar nav */}
            <div className="bg-black sticky top-0 left-0   flex flex-col items-center h-screen overflow-scroll">
                <SidebarNav/>
            </div>
            {/* main home */}
            <div className="col-start-2 border-x-2 border-white col-end-4 bg-black p-2">
                <Outlet/>
            </div>
            {/* sidebar right */}
            <div className="bg-black  sticky top-0 left-0 h-screen  col-start-4 col-end-5 text-white ">
                <h4>Tag</h4>
            </div>
        </div>
    );
};

export default Main;