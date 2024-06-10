import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videoAPI";

const initialState = {
    videos: [],
    isLoading : false,
    isError : false,
    error: ""
};


export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos();
    return videos;
})





const videoSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchVideos.pending, (state, action)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideos.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.videos = action.payload;
            
        })
        .addCase(fetchVideos.rejected, (state, action) =>{
            state.isError = true;
            state.isLoading = false;
            state.videos = [];
            state.error = action.error.message;
        })
    }
})



export default videoSlice.reducer;