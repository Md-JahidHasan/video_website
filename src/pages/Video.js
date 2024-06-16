import React, { useEffect } from 'react';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/list/RelatedVideoList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'
import { fetchSingleVideo } from '../features/video/singleVideoSlice';
import Loading from '../components/ui/Loading';

const Video = () => {
    const dispatch = useDispatch();
    const { videoId } = useParams();

    const { video, isLoading, isError, error } = useSelector((state)=>state.video);
    const { link } = video;
        
 
    useEffect(() => {
        dispatch(fetchSingleVideo(videoId))
    }, [dispatch, videoId]);

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">{ error }</div>
    }
    if (!isLoading && !isError && !video?.id) {
        content = <div className="col-span-12">Video not found...</div>
    }
    if (!isLoading && !isError && video?.id) {
        content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    <div class="col-span-full w-full space-y-8 lg:col-span-2">
                        {/* <!-- video player --> */}
                        <Player link={link}></Player>

                        {/* <!-- video description --> */}
                        <VideoDescription video={video}></VideoDescription>
                    </div>

                    {/* <!-- related videos --> */}
                    <RelatedVideoList></RelatedVideoList>
                    
                </div>
    }


    return (
        <>

            <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>

        </>
    );
};

export default Video;