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
        <div className="px-3 py-8 border-b-2 border-stone-500 flex items-start gap-5 font-fontpp ">
            {/* post logo */}
            <div>
                <FaUserCircle className="text-6xl" />
            </div>
            {/* title */}
            <div className="text-white pt-3 w-full">
                {/* post user name or edit */}
                <div className="flex justify-between  items-center">
                    <div className="flex items-center gap-4">
                        <h3 className="text-3xl flex items-center font-semibold">
                            Prosanta <IoCheckmarkCircle className="text-green-500 text-2xl" />
                        </h3>
                        <h4 className="text-xl font-medium">@prosanta12</h4>
                    </div>
                    <div>
                        <HiDotsHorizontal className="text-3xl" />
                    </div>
                </div>
                {/* title */}
                <p className="text-xl pt-2 font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam mollitia ullam eveniet!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                {/* img */}
                <div className="pt-4 rounded-xl">
                    <img src={img} alt="" className="w-full rounded-2xl" />
                </div>
                {/* icon like share */}
                <div className="flex justify-between pt-6 items-center">
                    <div className="flex items-center gap-2">
                        <LuMessageSquare className="text-3xl" />
                        <p className="font-medium text-xl">234k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BiRepost className='text-4xl' />
                        <p className="font-medium text-xl">18k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdFavoriteBorder className="text-3xl" />
                        <p className="font-medium text-xl">14k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineViewKanban className="text-3xl" />
                        <p className="font-medium text-xl">14k</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiBookmark className='text-3xl' />
                        <GoDownload className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;