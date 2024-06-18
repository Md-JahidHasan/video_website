import React, { useEffect } from 'react';
import RelatedVideo from './RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../ui/Loading';

const RelatedVideoList = ({ currentVideoId, tags }) => {
    const dispatch = useDispatch();

    const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos)

    useEffect(() => {
        dispatch(fetchRelatedVideos({tags, id: currentVideoId}))
    }, [dispatch, tags, currentVideoId])

    // decide what to render

    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading & isError) {
        content = <div className='col-span-12'>{ error }</div>
    }
    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <div>No related videos found!</div>
    }
    if (!isLoading && !isError & relatedVideos?.length > 0) {
        content = relatedVideos.map((video)=><RelatedVideo key={video.id} video={video}></RelatedVideo>)
    } 


    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}
        </div>
    );
};

export default RelatedVideoList;