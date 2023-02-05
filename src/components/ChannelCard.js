import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { channelCardSx, channelCardContentSx, channelCardMediaSx } from '../styles/muiStyles';

const ChannelCard = ({ channelDetail, marginTop }) => {
  let newChannelCardSx = { ...channelCardSx, marginTop: marginTop };

  return (
    <Box sx={newChannelCardSx}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={channelCardContentSx}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={channelCardMediaSx}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
};

export default ChannelCard;