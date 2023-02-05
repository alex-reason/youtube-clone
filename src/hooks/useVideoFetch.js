import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const useVideoFetch = (detailUrl, videosUrl, id) => {
    const [detail, setDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(detailUrl)
            .then((data) => setDetail(data?.items[0]))
            .catch(error => console.log(error));
        fetchFromAPI(videosUrl)
            .then((data) => setVideos(data?.items))
            .catch(error => console.log(error));
    }, [id, detailUrl, videosUrl]);

    return { detail, videos }
};
export default useVideoFetch;