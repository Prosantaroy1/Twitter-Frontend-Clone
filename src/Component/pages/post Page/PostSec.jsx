import { FaUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";


const PostSec = () => {
    // hook
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="px-3 py-8 border-b-2 border-stone-500 flex items-start gap-2 md:gap-5 font-fontpp ">
            <div>
                <FaUserCircle className="md:text-6xl text-3xl" />
            </div>
            {/* from post data */}
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-b-2 border-stone-500 pb-7">
                        <textarea    {...register("title", {required: true})} className="textarea textarea-ghost w-64 md:w-[170%] text-white md:text-2xl font-medium" placeholder="What is happening?!"></textarea>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        <input type="file" className="w-[38%] md:w-full" {...register("image")}  />
                        <input type="submit"  className="md:text-2xl btn-primary btn font-medium"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostSec;