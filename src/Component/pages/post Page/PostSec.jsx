import { FaUserCircle } from "react-icons/fa";

const PostSec = () => {
    return (
        <div className="px-3 py-8 border-b-2 border-stone-500 flex items-start gap-5 font-fontppgap-3">
            <div>
                <FaUserCircle className="text-6xl" />
            </div>
            {/* from post data */}
            <div>
                <div className="border-b-2 border-stone-500 pb-7">
                    <textarea cols={70} name="text" className="textarea textarea-ghost  text-2xl font-medium" placeholder="What is happening?!"></textarea>
                </div>
                <div className="flex justify-between items-center pt-5">
                    <input type="file" className="file-input file-input-bordered file-input-accent" />
                    <button className="btn text-2xl font-medium btn-primary">Post</button>
                </div>
            </div>
        </div>
    );
};

export default PostSec;