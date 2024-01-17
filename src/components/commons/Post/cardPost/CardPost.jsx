// CardPost.js
import { FcLike, FcComments } from "react-icons/fc";
import { BiPurchaseTagAlt } from "react-icons/bi";

import "./CardPost.css";

const CardPost = ({ post }) => {
  const { title, text, likes, owner, image, tags } = post;
  const { firstName, lastName, picture, id } = owner;

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
          <div className="title">
            Autor: <span>{`${firstName} ${lastName}`}</span> 
          </div>
          <div className="btn-perfil ">
          <a href={`https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca${id}`}>Ver perfil</a>
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
          <div className="like-container"><p>
          <BiPurchaseTagAlt /> {tags && tags.map((tag) => <span className="tag-button" key={tag}> {tag} </span>)}

          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
