import React, { useEffect } from 'react';
import VideoGridItem from './VideoGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videoSlice';
import Loading from '../ui/Loading';

const VideoGrid = () => {
    const dispatch = useDispatch();
    const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
    const { tags, search } = useSelector((state)=>state.filters)

    console.log(videos);

    useEffect(()=>{
        dispatch(fetchVideos({ tags, search }))
    }, [ tags, search, dispatch])
    


    // Decide what to render
    let content;

    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">some error happened</div>
    }
    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video=><VideoGridItem key={video.id} video={video}></VideoGridItem>)
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    
                    {content}
                    
                    {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>

    );
};

export default VideoGrid;