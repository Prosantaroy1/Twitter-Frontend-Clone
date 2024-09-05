import { NavLink } from "react-router-dom";
import PostSec from "../pages/post Page/PostSec";
import PostCard from "../pages/Post Card/PostCard";
// img
import img1 from '../../assets/imgPost/GWqPP2FXkAE3Dy_.jfif'
import img2 from '../../assets/imgPost/post1.png'
import img3 from '../../assets/imgPost/post2.png'
import img4 from '../../assets/imgPost/post3.jfif'
import img5 from '../../assets/imgPost/post4.jfif'

const MainHome = () => {
    return (
        <>
        <div className="h-auto font-fontpp">
            {/* main navber */} 
            <div className={`bg-black px-40 text-white shadow  sticky py-6 border-b-2 border-slate-500 top-0 left-0`}>
                <ul className="flex  justify-between items-center">
                    <li className="text-2xl font-semibold"><NavLink to='/'>For you</NavLink></li>
                    <li className="text-2xl font-semibold"><NavLink>Following</NavLink></li>
                </ul>
            </div>
            {/* post and data post section */}
            <PostSec/>
            {/* post */}
            <PostCard img={img1}/>
            <PostCard img={img2}/>
            <PostCard img={img3}/>
            <PostCard img={img4}/>
            <PostCard img={img5}/>
            <PostCard img={img2}/>
            <PostCard img={img3}/>
            <PostCard img={img4}/>
            <PostCard img={img5}/>
        </div>
        </>
    );
};

export default MainHome;