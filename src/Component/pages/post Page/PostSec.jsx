import { FaUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";


const PostSec = () => {
    // hook
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="px-3 py-8 border-b-2 border-stone-500 flex items-start gap-5 font-fontpp ">
            <div>
                <FaUserCircle className="text-6xl" />
            </div>
            {/* from post data */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-b-2 border-stone-500 pb-7">
                        <textarea cols={70}   {...register("title", {required: true})} className="textarea textarea-ghost  text-2xl font-medium" placeholder="What is happening?!"></textarea>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-accent" />
                        <input type="submit"  className="text-2xl btn-primary btn font-medium"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostSec;