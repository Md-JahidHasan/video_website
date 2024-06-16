import React, { useEffect } from 'react';
import RelatedVideo from './RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';

const RelatedVideoList = ({ currentVideoId, tags }) => {
    const dispatch = useDispatch();

    const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({tags, id: currentVideoId}))
    }, [dispatch, tags, currentVideoId])

    // decide what to render

    let content = null;

    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            <RelatedVideo></RelatedVideo>
        </div>
    );
};

export default RelatedVideoList;