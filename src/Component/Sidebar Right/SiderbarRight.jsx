import { FaMeta } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { SiFlipkart } from "react-icons/si";
import { TfiInstagram } from "react-icons/tfi";

const SiderbarRight = () => {
    return (
        <div className="pt-2 font-fontpp">
            {/* search bar */}
            <div className="top-0 left-0 sticky bg-black">
                <label className="input input-bordered rounded-2xl flex py-8 bg-stone-600 text-yellow-50 items-center gap-2">
                    <IoSearch className="text-white text-3xl" />
                    <input type="text" className="grow text-white text-2xl" placeholder="Search" />

                </label>
            </div>
            {/* subscribe box */}
            <div className="border-2 mt-6 rounded-2xl p-3 border-slate-500">
                <h3 className="text-3xl font-bold">Subscribe to Premium</h3>
                <p className="text-2xl font-medium pt-2 pb-3">
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </p>
                <button className="btn btn-primary text-2xl rounded-lg">Subscribe</button>
            </div>
            {/*-----------
             ----------Trends for you -------
             ---------------*/}
            <div className="border-2 mt-6 rounded-2xl p-3 border-slate-500">
                {/* one */}
                <div>
                    <h4 className="text-3xl font-bold">Trends for you</h4>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Trending in Bangladesh</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#Programming</h4>
                        <p className="text-xl">127k post</p>
                    </div>
                </div>
                {/* two */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Entertainment · Trending</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#THe GTOV</h4>
                        <p className="text-xl">327k post</p>
                    </div>
                </div>
                {/* three */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Game Trending</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#Game</h4>
                        <p className="text-xl">27k post</p>
                    </div>
                </div>
                {/* four */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Trending in India</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#News</h4>
                        <p className="text-xl">227k post</p>
                    </div>
                </div>
                {/* one */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Japan Trending</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#Japan</h4>
                        <p className="text-xl">177k post</p>
                    </div>
                </div>
                {/* one */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Trending in Bangladesh</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#US</h4>
                        <p className="text-xl">147k post</p>
                    </div>
                </div>
                {/* one */}
                <div>
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Trending in Bangladesh</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#Youtube</h4>
                        <p className="text-xl">427k post</p>
                    </div>
                </div>
                {/* last */}
                <div className="pb-4">
                    {/* triend */}
                    <div className="pt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">Trending in Bangladesh</h3>
                            <HiDotsHorizontal className="text-3xl" />
                        </div>
                        <h4 className="text-2xl py-1 font-medium">#Ballon</h4>
                        <p className="text-xl">527k post</p>
                    </div>
                </div>
                {/* btn */}
                <a href="#" className="text-emerald-300 text-xl font-medium ">Show More</a>
            </div>
            {/* 
            ---------Who to follow
            */}
            <div className="border-2 mt-6 rounded-2xl p-3 border-slate-500">
                <h3 className="text-3xl font-semibold">Who to follow</h3>
                <div className="flex pt-3 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <SiFlipkart className="text-5xl" />
                        <div>
                            <h3 className="text-xl">Flipkart </h3>
                            <p>@flipkart</p>
                        </div>
                    </div>
                    <button className="btn text-xl">Follow</button>
                </div>
                {/* two */}
                <div className="flex pt-3 justify-between items-center">
                    <div className="flex items-center gap-4">
                       <FaMeta className="text-5xl"/>
                        <div>
                            <h3 className="text-xl">Meta Official </h3>
                            <p>@MetaOfficial</p>
                        </div>
                    </div>
                    <button className="btn text-xl">Follow</button>
                </div>
                {/* three */}
                <div className="flex pt-3 justify-between items-center">
                    <div className="flex items-center gap-4">
                        <TfiInstagram className="text-5xl" />
                        <div>
                            <h3 className="text-xl">Instram </h3>
                            <p>@Instram</p>
                        </div>
                    </div>
                    <button className="btn text-xl">Follow</button>
                </div>
                
            </div>
        </div>
    );
};

export default SiderbarRight;