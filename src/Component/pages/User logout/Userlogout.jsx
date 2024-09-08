import { BsTwitterX } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";

const Userlogout = () => {
    return (
        <div className="h-screen">
            <div className="container text-white font-fontpp mx-auto">
                {/* heading */}
                <div className="flex px-5 py-3 items-center justify-between">
                    <h3 className="text-3xl font-medium">User Group</h3>
                    <VscBellDot className="text-4xl" />
                </div>
                {/* tab */}
                <div className="pb-3 mt-3 border-b-2 border-slate-400">
                    <ul className="flex items-center lg:px-14 px-3 justify-between text-2xl font-semibold">
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">All</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Join</li>
                        <li className="hover:bg-slate-300 px-3 py-2 hover:text-black">Others</li>
                    </ul>
                </div>
                {/* text */}
                <div className="flex px-3 lg:px-12 items-center gap-3">
                    <BsTwitterX className="text-5xl" />
                    <p className="text-2xl pt-4 ">
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt ipsum illum adipisci.
                    </p>
                </div>
                {/* group */}
                <div className="pt-5 grid md:grid-cols-3 gap-4 rounded-md grid-cols-2 ">
                    {/* one */}
                    <div className="flex flex-col gap-5 items-start border-2 border-cyan-500 shadow-md p-3">
                        <h3 className="font-fontpp text-2xl font-medium">Progarammig</h3>
                        <button className="bg-green-500 text-white text-xl px-3 py-2 rounded">join</button>
                    </div>
                    <div className="flex flex-col gap-5 items-start border-2 border-cyan-500 shadow-md p-3">
                        <h3 className="font-fontpp text-2xl font-medium">News BD</h3>
                        <button className="bg-green-500 text-white text-xl px-3 py-2 rounded">join</button>
                    </div>
                    <div className="flex flex-col gap-5 items-start border-2 border-cyan-500 shadow-md p-3">
                        <h3 className="font-fontpp text-2xl font-medium">Sports</h3>
                        <button className="bg-green-500 text-white text-xl px-3 py-2 rounded">join</button>
                    </div>
                    <div className="flex flex-col gap-5 items-start border-2 border-cyan-500 shadow-md p-3">
                        <h3 className="font-fontpp text-2xl font-medium">Job Marketing BD</h3>
                        <button className="bg-green-500 text-white text-xl px-3 py-2 rounded">join</button>
                    </div>
                    <div className="flex flex-col gap-5 items-start border-2 border-cyan-500 shadow-md p-3">
                        <h3 className="font-fontpp text-2xl font-medium">Frontend Job</h3>
                        <button className="bg-green-500 text-white text-xl px-3 py-2 rounded">join</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlogout;