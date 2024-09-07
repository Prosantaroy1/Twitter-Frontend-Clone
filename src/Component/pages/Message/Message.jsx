import { IoIosSettings } from "react-icons/io";

const Message = () => {
    return (
        <div className="h-screen">
            <div className="container font-fontpp text-white mx-auto py-6">
             <div className="flex border-b-2 border-slate-400 px-5 py-3 items-center justify-between">
                    <h3 className="text-3xl font-medium">Message</h3>
                    <IoIosSettings className="text-4xl" />
                </div>
                {/* second */}
                <h3 className="pt-12 text-2xl px-4 lg:px-8 font-semibold">
                    Welcome to your Message ?
                </h3>
                {/* btn */}
                <button className="text-white bg-sky-400 px-4 py-3 rounded-lg text-2xl m-8">White Message</button>
            </div>
        </div>
    );
};

export default Message;