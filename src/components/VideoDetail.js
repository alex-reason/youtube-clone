import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { videoDetailBoxSx, videoCardCheckSx, videoDetailSx, videoDetailTypoSx } from '../styles/muiStyles';
import useVideoFetch from '../hooks/useVideoFetch';

const VideoDetail = () => {
    const { id } = useParams();
    const detailUrl = `videos?part=snippet,statistics&id=${id}`;
    const videosUrl = `search?part=snippet&relatedToVideoId=${id}&type=video`;
    const { detail: videoDetail, videos } = useVideoFetch(detailUrl, videosUrl, id)
    if (!videoDetail?.snippet) { return 'Loading...' };

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight='95vh' sx={videoDetailSx} mx={2}>
            <Stack direction={{ xs: 'column', md: 'row' }} >
                <Box flex={1} sx={{ borderBottom: '1px solid #fff' }}>
                    <Box sx={videoDetailBoxSx}>
                        <div className='video-wrapper'>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' width='100%' height='100%' controls />
                        </div>

                        <Typography className='white' variant='body1' fontWeight='bold' p={1}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={1}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle2', md: 'subtitle1' }} color='#fff'>
                                    {channelTitle}
                                    <CheckCircle sx={videoCardCheckSx} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap={{ xs: '15px', sm: '20px' }} alignItems='center'>
                                <Typography variant='subtitle2' sx={videoDetailTypoSx}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='subtitle2' sx={videoDetailTypoSx}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>
                <Box px={1} py={{ xs: 5, md: 1 }} display='flex' justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction='column' justify='center' />
                </Box>
            </Stack>
        </Box>
    )
};

export default VideoDetail;