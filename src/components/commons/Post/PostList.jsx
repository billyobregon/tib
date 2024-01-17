import { useState, useEffect } from 'react';
import { fetchPosts } from '../../../services/ApiService';
import CardPost from './cardPost/CardPost';
import TagFilter from '../Filters/Filters';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData.data || []);
        setFilteredPosts(postsData.data || []);
        setAvailableTags(getAvailableTags(postsData.data || []));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterPostsByTag();
  }, [posts, selectedTag]);

  const handleTagFilterChange = (tag) => {
    setSelectedTag(tag);
  };

  const filterPostsByTag = () => {
    if (selectedTag) {
      const filtered = posts.filter((post) => (post.tags || []).includes(selectedTag));
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <div className="post-list-container">
      <h2>Listado de Posts</h2>
      <TagFilter availableTags={availableTags} onFilterChange={handleTagFilterChange} />
      <div className="card-container">
        {filteredPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

const getAvailableTags = (posts) => {
  const allTags = posts.reduce((tags, post) => tags.concat(post.tags || []), []);
  return [...new Set(allTags)].sort();
};

export default PostList;
