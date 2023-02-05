import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { feedStackSx, feedBoxLeftSx, feedBoxRightSx } from '../styles/muiStyles';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cozy ambience');
  const [videos, setVideos] = useState([]);

  const selectHandler = (category) => {
    setSelectedCategory(category)
  };

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch(error => console.log(error))
  }, [selectedCategory]);

  return (
    <Stack sx={feedStackSx}>
      {/* left */}
      <Box sx={feedBoxLeftSx} display='flex' flexDirection={{sm: 'row', md:'column'}}>
        <Sidebar selectedCategory={selectedCategory} handleChange={selectHandler} />
      </Box>

      {/* right */}
      <Box p={2} sx={feedBoxRightSx}>
        <Typography variant='h5' color='#fff'>
          {selectedCategory}<span className='colored'> videos</span>
        </Typography>
        <Videos videos={videos} justify={{xs: 'center', md: 'start'}}/>
      </Box>
    </Stack>
  )
};

export default Feed;