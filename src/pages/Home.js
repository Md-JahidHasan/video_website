import React from 'react';
import Navbar from './../components/navbar/Navbar'
import Tags from './../components/tags/Tags'
import VideoGrid from '../components/videogrid/VideoGrid';
import Pagination from '../components/ui/Pagination';

const Home = () => {
    return (
        <>
            <Tags></Tags>
            <VideoGrid></VideoGrid>
            <Pagination></Pagination>
            
        </>
    );
};

export default Home;