import { NavLink } from 'react-router-dom';
import img from '../../../assets/error/404.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            <div className='flex flex-col space-y-8 items-center'>
                <img src={img} alt="" />
                <button className='bg-black text-2xl text-white px-5 py-3 font-fontpp font-medium rounded-md'>
                    <NavLink to='/login'>Go Back </NavLink>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;