import React, { useEffect } from 'react';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../ui/Loading';

const Tags = () => {
    const dispatch = useDispatch();


    const { tags, isError, isLoading, error } = useSelector((state)=>state.tags)
    
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch]);


// ## decide what to render:
    let content;
    if (isLoading) {
        content = <Loading></Loading>
    }
    if (!isLoading && isError) {
        content = <div className="col-span-12">some error happened</div>
    }
    if (!isLoading && !isError && tags?.length > 0) {
        content = tags.map((tag)=><Tag key={tag.id} tag={tag}></Tag>)
    }


    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                
                {content}
            </div>
        </section>

    );
};

export default Tags;