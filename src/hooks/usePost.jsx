import {
    useQuery,
} from '@tanstack/react-query'
import { axiosPublic } from './useAxios';


const usePost = () => {
        
    // 
    const { refetch, data: post = [] } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user');
            return res.data;
        }
    })

    return [post, refetch]
};

export default usePost;