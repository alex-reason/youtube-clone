import axios from 'axios';

const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

const options = {
    url: BASE_URL,
    params: {
        maxResults: 15,
        key: process.env.REACT_APP_API_KEY,
    }
};

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
