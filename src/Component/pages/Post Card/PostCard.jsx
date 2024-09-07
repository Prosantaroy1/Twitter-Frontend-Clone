import { BiRepost } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { MdFavoriteBorder, MdOutlineViewKanban } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const PostCard = ({ img }) => {
    return (
        <div className="px-3 py-8 border-b-2 border-stone-500 flex items-start gap-2 md:gap-5 font-fontpp ">
            {/* post logo */}
            <div>
                <FaUserCircle className="md:text-6xl text-4xl" />
            </div>
            {/* title */}
            <div className="text-white md:pt-3 pt-0 w-full">
                {/* post user name or edit */}
                <div className="flex md:justify-between gap-24 items-start  md:items-center">
                    <div className="flex md:flex-row flex-col items-center md:gap-4">
                        <h3 className="md:text-3xl text-2xl flex items-center font-semibold">
                            Prosanta <IoCheckmarkCircle className="text-green-500 text-2xl" />
                        </h3>
                        <h4 className="text-xl font-medium">@prosanta12</h4>
                    </div>
                    {/* ... */}
                    <div>
                        <HiDotsHorizontal className="text-3xl" />
                    </div>
                </div>
                {/* title */}
                <p className="md:text-xl md:pr-0 pr-3 pt-2 font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia ullam eveniet!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* img */}
                <div className="pt-4 rounded-xl">
                    <img src={img} alt="" className="lg:w-full w-[85%] rounded-2xl" />
                </div>
                {/* icon like share */}
                <div className="flex justify-between pt-6 items-center">
                    <div className="flex items-center gap-2">
                        <LuMessageSquare className="md:text-3xl" />
                        <p className="font-medium md:text-xl">234k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BiRepost className='md:text-4xl' />
                        <p className="font-medium md:text-xl">18k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdFavoriteBorder className="md:text-3xl" />
                        <p className="font-medium text-xl">14k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineViewKanban className="md:text-3xl" />
                        <p className="font-medium md:text-xl">14k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiBookmark className='md:text-3xl' />
                        <GoDownload className="md:text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;