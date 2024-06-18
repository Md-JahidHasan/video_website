import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTags, tagsSelected } from '../../features/filters/filtersSlice';

const Tag = ({ tag }) => {
    const dispatch = useDispatch();

    const { tags: selectedTags } = useSelector((state) => state.filters);

    const isSelected = selectedTags.includes(tag.title) ? true : false;

    const handleSelect = () => {
        if (isSelected) {
            dispatch(removeTags(tag.title))
        } else {
            dispatch(tagsSelected(tag.title))
        }
    }

    const style = isSelected ? "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer" : "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";

    return (
        <button
            onClick={handleSelect}
            className={style}
        >
        {tag.title}
        </button>
    );
};

export default Tag;


// {/* <!-- selected --> */}
// <div
// className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
// >
// redux
// </div>