import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/v1';

// Configuración del axios
const apiConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'app-id': '65a6d5fbcefceb0d5726f7e6',
    },
};

// Crear una única instancia de axios para todos los servicios
const apiService = axios.create(apiConfig);

// Función para realizar peticiones GET
const getData = async (endpoint, params = {}) => {
    try {
        const response = await apiService.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
};

// Función para obtener los posts
export const fetchPosts = async () => {
    return getData('/post', { limit: 21 });
};

// Función para obtener usuarios por ID
export const fetchUserById = async (userId) => {
    return getData(`/user/${userId}`);
};

// Función para obtener comentarios por ID
export const fetchCommentById = async (postId) => {
    return getData(`/post/${postId}/comment`);
};

export default apiService;
