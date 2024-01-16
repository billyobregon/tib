// PostList.js
import { useState, useEffect } from 'react';
import  { fetchPosts } from '../../../services/ApiService'; // Asegúrate de importar fetchPosts también
import CardPost from './cardPost/CardPost';
import './PostList.css'; // Asegúrate de importar o crear el archivo CSS correspondiente

const PostList = () => {
    const [posts, setPosts] = useState([]); // Asegúrate de que se inicialice como un array vacío

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsData = await fetchPosts();
                console.log('API Response:', postsData);
    
                // Asegúrate de que postsData es un array
                setPosts(postsData.data || []);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="post-list-container">
        <h2>Listado de Posts</h2>
        <div className="card-container">
            {posts.map((post) => (
                <CardPost key={post.id} post={post} />
            ))}
        </div>
    </div>
    );
};

export default PostList;
