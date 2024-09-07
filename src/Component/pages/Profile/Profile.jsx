import { CgProfile } from "react-icons/cg";
import { FaCamera } from "react-icons/fa";


const Profile = () => {
    return (
        <div className="h-screen">
            <div className="container text-white mx-auto px-3">
                {/* banner */}
                <div className="w-full h-64 flex items-center justify-center hover:bg-stone-400 bg-white rounded-lg">
                    <div>
                        <FaCamera className="text-black  text-5xl " />
                    </div>
                </div>
                {/* profile */}
                <div className="pt-7 border-b-2 pb-5 border-stone-400 flex items-center gap-5 px-5">
                    <CgProfile className="text-6xl" />
                    <div className="lg:hidden md:hidden xl:flex flex-col">
                        <h4 className="text-2xl font-semibold">Prosanta Roy</h4>
                        <p className="text-xl font-normal">@royprosanta</p>
                    </div>
                </div>
                {/* profile */}
                <div className="border-b-2 border-stone-400">
                    <ul className="flex items-center justify-between py-5 text-2xl font-semibold">
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Create Post</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Short Post</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Live</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Follower</li>
                    </ul>
                </div>
                {/* post */}
                <div className="mt-12 grid md:grid-cols-2 gap-5 grid-cols-1">
                    <div className="card bg-base-100 text-black font-fontpp w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Python Program</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam ad et repellat modi.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 text-black font-fontpp w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shports News BD</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam ad et repellat modi.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 text-black font-fontpp w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Java Program</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam ad et repellat modi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;