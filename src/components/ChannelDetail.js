import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import useVideoFetch from '../hooks/useVideoFetch';

const ChannelDetail = () => {
  const { id } = useParams();
  const detailUrl = `channels?part=snippet&id=${id}`;
  const videosUrl = `search?channelId=${id}&part=snippet&order=date`
  const { detail: channelDetail, videos } = useVideoFetch(detailUrl, videosUrl, id);
  if (!channelDetail?.snippet) { return 'Loading...' };

  return (
    <Box minHeight='95vh'>
      <Box>
        <div className='gradient' />
        <ChannelCard channelDetail={channelDetail} marginTop='-120px' />
      </Box>
      <Box display='flex' p='2' sx={{ margin: 'auto' }}>
        <Videos videos={videos} justify='center' />
      </Box>
    </Box>
  )
};

export default ChannelDetail;
