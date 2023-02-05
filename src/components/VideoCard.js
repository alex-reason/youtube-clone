import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { videoCardSx, videoCardMediaSx, videoCardCheckSx, videoCardTitleSx, videoCardSubtitleSx, VideoCardContentSx } from '../styles/muiStyles';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    let videoTitle = '';
    if (snippet.title && snippet.title.length > 80) {
        videoTitle = snippet?.title.replace(/&quot;/g, '"').slice(0, 80) + '...';
    } else {
        videoTitle = snippet?.title.replace(/&quot;/g, '"') || demoVideoTitle
    }
    return (
        <Card sx={videoCardSx}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    sx={videoCardMediaSx}
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                />
            </Link>
            <CardContent sx={VideoCardContentSx}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff' sx={videoCardTitleSx}>
                        {videoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' sx={videoCardSubtitleSx}>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={videoCardCheckSx} />
                    </Typography>
                </Link>
            </CardContent>

        </Card>
    )
};

export default VideoCard;