import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./singleVideoAPI";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
};


export const fetchSingleVideo = createAsyncThunk('video/fetchSingleVideo', async (id) => {
    const singleVideo = await getVideo(id);
    return singleVideo;
})


const singleVideoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        increaseLike: (state) => {
            state.video.like += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleVideo.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchSingleVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.video = action.payload;
            })
            .addCase(fetchSingleVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.video = {}
        } )
    }
})

export const { increaseLike} = singleVideoSlice.reducer;

export default singleVideoSlice.reducer;