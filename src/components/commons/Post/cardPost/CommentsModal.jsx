import './CommentsModal.css';

const CommentsModal = ({ comments, onClose }) => {
  if (!Array.isArray(comments.data)) {
    console.error('La propiedad "data" de la variable "comments" no es un arreglo:', comments);
    return null;  // O mostrar un mensaje de error
  }

  return (
    <div className="comments-modal">
      <div className="modal-header">
        <h2>Comentarios</h2>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="comments-list">
        {comments.data.map(renderComment)}
      </div>
    </div>
  );
};

const renderComment = (comment) => (
  <div key={comment.id} className="comment">
    <img src={comment.owner.picture} alt={`${comment.owner.firstName} ${comment.owner.lastName}`} />
    <div className="comment-details">
      <p>{comment.message}</p>
      <span>Publicado por: {comment.owner.firstName} {comment.owner.lastName}</span>
      <span>Fecha: {new Date(comment.publishDate).toLocaleDateString()}</span>
    </div>
    <hr />
  </div>
);

export default CommentsModal;
