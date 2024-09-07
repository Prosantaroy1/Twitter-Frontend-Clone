import { HiDotsHorizontal } from "react-icons/hi";

const Expolre = () => {
    return (
        <div className="h-screen">
            <div className="container text-white font-fontpp mx-auto">
                {/* tab */}
                <div className="px-5 py-5 ">
                    <ul className="flex items-center flex-wrap border-b-2 border-slate-400 pb-5 text-2xl font-semibold gap-4 justify-between">
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">For you</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Treanding</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">News</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Sports</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Tech</li>
                    </ul>
                </div>
                {/* treading */}
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
            </div>
        </div>
    );
};

export default Expolre;