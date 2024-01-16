// CardPost.js
import React from "react";
import "./CardPost.css";

const CardPost = ({ post }) => {
  const { title, text, likes, owner, image, tags } = post;
  const { firstName, lastName, picture } = owner;

  return (
    // <div className="card">
    //   <img src={picture} alt={`${firstName} ${lastName}`} />
    //   <p>Nombre del usuario que hizo el post: {`${firstName} ${lastName}`}</p>
    //   {/* Imagen y texto del post */}
    //   <img
    //     src={image}
    //     style={{ maxWidth: "100px" }}
    //     alt="Descripción de la imagen"
    //   />
    //   <p>{text}</p>
    //   <p>Likes: {likes}</p>
    //   <p>Tags: {tags && tags.map((tag) => <span key={tag}>{tag} </span>)}</p>
    //   <h3>{title}</h3>
    //   <hr />

      <div className="card">
        <div>
          <img className="img-avatar" src={picture} />
        </div>
        <div className="card-text">
          <img className="portada" src={image} />
          <div className="title-total">
            <div className="title">Autor: <span>{`${firstName} ${lastName}`}</span></div>

            <div className="desc">
            {text}
            </div>

            <p>Tags: {tags && tags.map((tag) => <span key={tag}>{tag} </span>)}</p>
            <div className="actions">
              <button>
                <i className="far fa-heart"></i>
              </button>
              <button>
                <i className="far fa-envelope"></i>
              </button>
              <button>
                <i className="fas fa-user-friends"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardPost;
