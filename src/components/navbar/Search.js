import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filters/filtersSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const {search} = useSelector((state)=>state.filters)

    const [input, setInput] = useState(search);
    const match = useMatch('/');
    const navigate = useNavigate()

    const handleSubmmit = (e) => {
        e.preventDefault();
        dispatch(searched(input))

        // if user is not in home page redirect tohome page:
        if (!match) {
            navigate('/')
        }
    }
    console.log(match);
    return (
        <form onSubmit={handleSubmmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            </form>
    );
};

export default Search;