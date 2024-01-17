// CardPost.js
import { useState } from 'react';
import { FcLike, FcComments } from 'react-icons/fc';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { fetchUserById } from '../../../../services/ApiService';

import UserProfileModal from '../../../Profile/UserProfileModal'; // Importa el componente modal

import './CardPost.css';

const CardPost = ({ post }) => {
  const { title, text, likes, owner, image, tags } = post;
  const { firstName, lastName, picture, id: userId } = owner;

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleVerPerfilClick = async () => {
    try {
      const user = await fetchUserById(userId);
      setUserData(user);
      setShowModal(true);
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
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
          <div className="title">
            Autor: <span>{`${firstName} ${lastName}`}</span>
          </div>
          <div className="btn-perfil">
        {/* Maneja el clic en el enlace "Ver perfil" */}
        <a href="#" onClick={handleVerPerfilClick}>
          Ver perfil
        </a>
      </div>
  
          <div className="desc">{text}</div>

          {/* Sesión de comentarios y like */}
          <div className="like-container">
            <div className="likes">
              <div>
                <FcLike />
              </div>
              <div> {likes} </div>
            </div>
            <div className="likes">
              <div>
                <FcComments />
              </div>
              <div> {likes} </div>
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
     {/* Muestra el modal si showModal es true */}
     {showModal && <UserProfileModal userData={userData} onClose={handleCloseModal} />}
    </div>
  );
};

export default CardPost;
