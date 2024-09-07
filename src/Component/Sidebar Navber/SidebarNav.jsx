import { BsTwitterX } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdHome, IoMdNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuServerCrash } from "react-icons/lu";
import { NavLink } from "react-router-dom";


const SidebarNav = () => {
    return (
        <div className="font-fontpp text-white pl-16 flex lg:items-center md:items-center xl:items-start  flex-col gap-8 pt-9">
            {/* logo */}
            <div className="mx-2 ">
                <BsTwitterX className="text-4xl" />
            </div>
            {/* nav link */}
            <ul className="text-3xl tracking-tight flex lg:items-center md:items-center xl:items-start   flex-col gap-6">
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink to='/' className='flex items-center  gap-4'>
                        <IoMdHome className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Home</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <IoSearch className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Explore</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <IoMdNotifications className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Notifications</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <FiMessageSquare className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Messages</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <LuServerCrash className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Grok</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <FaUserGroup className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Communities</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-3 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <FaUser className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">Profile</span>
                    </NavLink>
                </li>
                <li className=" hover:bg-slate-100 hover:text-black hover:rounded-3xl py-2 px-2">
                    <NavLink className='flex items-center gap-4'>
                        <CgMoreO className="text-4xl" /><span className="lg:hidden md:hidden xl:flex">More</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <button className="btn w-full text-2xl btn-primary">Post</button>
                    </NavLink>
                </li>
            </ul>
            {/* User Profile */}
            <div className="flex hover:bg-slate-300 hover:text-black px-2 py-2 hover:rounded-3xl  items-center gap-12 justify-center">
                {/* user img */}
                <div><FaUserCircle className="text-6xl" /></div>
                {/* user name */}
                <div className="lg:hidden md:hidden xl:flex">
                    <h4 className="text-2xl font-semibold">Prosanta Roy</h4>
                    <p className="text-xl font-normal">@royprosanta</p>
                </div>
                {/* edit */}
                <h3 className="lg:hidden md:hidden xl:flex"><HiDotsHorizontal className="text-4xl" /></h3>
            </div>
        </div>
    );
};

export default SidebarNav;