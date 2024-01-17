import { useState, useEffect } from 'react';
import { FcLike, FcComments } from 'react-icons/fc';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { fetchUserById, fetchCommentById } from '../../../../services/ApiService';
import UserProfileModal from '../../../Profile/UserProfileModal';
import CommentsModal from './CommentsModal';
import './CardPost.css';

const CardPost = ({ post }) => {
  const { title, text, likes, owner, image, tags, id } = post;
  const { firstName, lastName, picture, id: userId } = owner;

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [comments, setComments] = useState({ total: 0, data: [] });

  useEffect(() => {
    const loadComments = async () => {
      try {
        const postComments = await fetchCommentById(id);
        setComments(postComments);
      } catch (error) {
        console.error('Error fetching comments for post:', error);
      }
    };

    loadComments();
  }, [id]);

  const handleVerPerfilClick = async () => {
    try {
      const user = await fetchUserById(userId);
      setUserData(user);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleCloseCommentsModal = () => {
    setShowCommentsModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserData(null);
  };

  return (
    <div className="card">
      <div>
        <img className="img-avatar" src={picture} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="card-text">
        <img className="portada" src={image} alt="Descripción de la imagen" />
        <div className="title-total">
          <div className="like-container likes">
            <div>
              <FcLike />
            </div>
            <div> {likes} </div>
          </div>
          <div className="title">
            Autor: <span>{`${firstName} ${lastName}`}</span>
          </div>
          <div className="btn-perfil">
            <button type="button" onClick={handleVerPerfilClick}>
              Ver perfil
            </button>
          </div>

          <div className="desc">{text}</div>

          <div className="like-container">
            <div className="likes">
              <button className='btn-comment' type="button" onClick={() => setShowCommentsModal(true)}>
                <FcComments /> Comentarios ({comments.total})
              </button>
            </div>
          </div>
          <hr />
          <div className="like-container">
            <p>
              <BiPurchaseTagAlt />{' '}
              {tags &&
                tags.map((tag) => (
                  <span className="tag-button" key={tag}>
                    {' '}
                    {tag}{' '}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>

      {showModal && <UserProfileModal userData={userData} onClose={handleCloseModal} />}

      {showCommentsModal && (
        <CommentsModal comments={comments} onClose={handleCloseCommentsModal} />
      )}
    </div>
  );
};

export default CardPost;
