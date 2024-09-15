import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PostSec from "../pages/post Page/PostSec";
import PostCard from '../pages/Post Card/PostCard';
import usePost from "../../hooks/usePost";

const MainHome = () => {
    const [post] = usePost();
    const [reversedPost, setReversedPost] = useState([]);

    // Reverse the post data once when it's fetched
    useEffect(() => {
        if (post) {
            const reversed = [...post].reverse(); // Create a reversed copy
            setReversedPost(reversed);
        }
    }, [post]); // Dependency on post

    return (
        <>
            <div className="font-fontpp relative">
                {/* Main Navbar */}
                <div className='px-4 text-white shadow py-6 border-b-2 border-slate-500'>
                    <ul className="flex justify-between items-center">
                        <li className="text-2xl font-semibold"><NavLink to='/'>For you</NavLink></li>
                        <li className="text-2xl font-semibold"><NavLink>Following</NavLink></li>
                    </ul>
                </div>
                
                {/* Post Submission Section */}
                <PostSec />

                {/* Posts Display Section */}
                <div>
                    {reversedPost.map((item, idx) => (
                        <PostCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MainHome;
