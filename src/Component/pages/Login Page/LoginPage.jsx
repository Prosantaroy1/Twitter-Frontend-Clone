import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContent } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const LoginPage = () => {
    const { signinUser } = useContext(AuthContent);
    // 
    const navigate = useNavigate();
    // 
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        signinUser(data.email, data.password)
            .then(res => {
                const users = res.user;
                console.log(users)
                Swal.fire({
                    title: "Thanks you &#128151",
                    text: "Successfully login the Twitter.",
                });
                navigate('/')
            })
            .then(error => {
                console.log(error)
            })
    }
    return (
        <div className="bg-black md:px-1 px-4 h-screen text-white">
            <div className="container flex  items-center gap-64 justify-center h-screen font-fontpp mx-auto">
                {/* left part */}
                <div className="md:flex hidden">
                    <BsTwitterX className="text-[400px]" />
                </div>
                {/* right part */}
                <div className="md:px-1 px-3">
                    <h4 className="md:text-7xl text-5xl font-extrabold">Happening now</h4>
                    <h3 className="text-4xl font-semibold pt-20 pb-5">
                        Join today.
                    </h3>
                    {/* from */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="text-black rounded w-full px-5 py-3 text-xl" placeholder="Enter your Email?" type="email" {...register("email", { required: true })} />
                        <br /><br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="text-black rounded w-full px-5 py-3 text-xl" placeholder="Enter your Password?" type="password" {...register("password", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        <br /><br />
                        <input className="px-7 py-3  w-full bg-[#48def1] text-white text-xl rounded" type="submit" />
                    </form>
                    <p className="pt-4 text-2xl">Created a new Account
                        <span className="text-[#ee8c3b] font-semibold pl-3 underline"><NavLink to='/register'>Register</NavLink></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;