// ApiService.js
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/v1';

// Configuración del axios para obtener posts
const ApiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'app-id': '65a6d5fbcefceb0d5726f7e6',
    },
});

// Función para obtener posts con paginación
export const fetchPosts = async (pageNumber = 1, pageSize = 20) => {
    try {
        const response = await ApiService.get('/post', {
            params: {
                limit: pageSize,
                skip: (pageNumber - 1) * pageSize, // Calcula el número de elementos a saltar
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

// Configuración del axios para obtener usuarios por ID
const ApiServiceUser = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'app-id': '65a6d5fbcefceb0d5726f7e6',
    },
});

// Función para obtener usuarios por ID
export const fetchUserById = async (userId) => {
    try {
        const response = await ApiServiceUser.get(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};

export default ApiService;
