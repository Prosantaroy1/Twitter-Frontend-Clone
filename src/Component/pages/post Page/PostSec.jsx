import { FaUserCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import  { axiosPublic } from "../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContent } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import usePost from "../../../hooks/usePost";

// imgbb
const imgbb_key=import.meta.env.VITE_key;
const imabb_api=`https://api.imgbb.com/1/upload?key=${imgbb_key}`


const PostSec = () => {
    // user name
    const {user}= useContext(AuthContent);
    // tansk
    const [, refetch]= usePost();
    // hook
    const { register, handleSubmit, } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        // img for
        const imgFile= {image: data.image[0]};
        // console.log(imgFile)
        const res= await axiosPublic.post(imabb_api, imgFile,{
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        });
        // database post
        if(res.data.success){
            const postdata={
                name: user.displayName,
                title: data.title,
                img: res.data.data.display_url
            }
            console.log(postdata);
            const userPost= await axiosPublic.post('/user', postdata);
            console.log(userPost.data);
            if(userPost.data.insertedId){
                Swal.fire("Succesfully post.");
                refetch();
            }
        }
       
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