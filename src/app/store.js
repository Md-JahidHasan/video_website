import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videoReducer from '../features/videos/videoSlice';
import tagsReducer from '../features/tags/tagsSlice';
import singleVideoReducer from '../features/video/singleVideoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import filterReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videoReducer,
    tags: tagsReducer,
    video: singleVideoReducer,
    relatedVideos: relatedVideosReducer,
    filters: filterReducer
  }
});
