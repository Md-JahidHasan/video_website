import axios from './../../components/utils/axios';


export const getVideos = async () =>{
    const response = await axios.get("/videos");

    return response.data;
}