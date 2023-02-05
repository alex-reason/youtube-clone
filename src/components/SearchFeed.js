import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { feedBoxRightSx, searchTextSx } from '../styles/muiStyles';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
            .catch(error => console.log(error))
    }, [searchTerm]);

    return (
        <Box p={2} sx={feedBoxRightSx}>
            <Typography variant='h5' sx={searchTextSx}>
                Search Results for: <span className='colored'>{searchTerm}</span>
            </Typography>
            <Videos videos={videos} justify='center' />
        </Box>
    )
};

export default SearchFeed;