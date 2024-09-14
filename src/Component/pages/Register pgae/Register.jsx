import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContent } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    // 
    const { signupUser,updateName}=useContext(AuthContent);
    // navigation
    const navigate= useNavigate();
    //
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data.name)
        signupUser(data.email, data.password)
        .then(res=>{
            const users =res.user;
            console.log(users)
            updateName(data.name)
            Swal.fire("Succesfuuly create Account.");  
            navigate('/login')
        })
        .then(error=>{
            console.log(error);
            
        })
        updateName(data.name)
        .then(()=>{
            console.log('update profile Users');
        })
        .catch(error=>{
            console.log(error);
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
                    <h3 className="md:text-4xl text-3xl font-semibold pt-20 pb-8">
                        Created a New Account.
                    </h3>
                    {/* from */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="text-black rounded w-full px-5 py-3 text-xl" placeholder="Enter your name?" type="text" {...register("name", { required: true })} />
                        <br /><br />
                        {/* email */}
                        <input className="text-black rounded w-full px-5 py-3 text-xl" placeholder="Enter your Email?" type="email" {...register("email", { required: true })} />
                        <br /><br />
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="text-black rounded w-full px-5 py-3 text-xl" placeholder="Enter your Password?" type="password" {...register("password", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        <br /><br />
                        <input className="px-7 py-3  w-full bg-[#48def1] text-white text-xl rounded" type="submit" />
                    </form>
                    <p className="pt-4 text-2xl">Allready a new Account
                        <span className="text-[#ee8c3b] font-semibold pl-3 underline"><NavLink to='/login'>Login</NavLink></span>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Register;