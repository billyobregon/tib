// ApiService.js
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/v1';

const ApiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'app-id': '65a6d5fbcefceb0d5726f7e6',
    },
});

export const fetchPosts = async () => {
    try {
        const response = await ApiService.get('/post', {
            params: {
                limit: 10,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export default ApiService;
