import axios from "axios";

export const axiosPublic = axios.create(
    {
        baseURL:'https://twitter-server-phi.vercel.app/'
    }
)

const useAxios = () => {
    
    return axiosPublic;
};

export default useAxios;