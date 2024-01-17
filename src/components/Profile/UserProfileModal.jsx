import React from 'react';
import './UserProfileModal.css'; // Añade estilos CSS para el modal
import {
  BiUser,
  BiCalendarCheck,
  BiMale,
  BiMailSend,
  BiIdCard,
  BiPhoneCall,
  BiLocationPlus,
  BiLogInCircle,
} from 'react-icons/bi';

// Función para formatear la fecha
const formatearFecha = (fecha) => {
  const formatearFecha = new Date(fecha);
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  return formatearFecha.toLocaleDateString(undefined, opciones);
};

// Función para convertir valores de género
const convertirGenero = (genero) => {
  switch (genero.toLowerCase()) {
    case 'female':
      return 'Femenino';
    case 'male':
      return 'Masculino';
    // Puedes agregar más casos según sea necesario
    default:
      return genero;
  }
};

const UserProfileModal = ({ userData, onClose }) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    gender,
    phone,
    picture,
    registerDate,
    title,
    location,
  } = userData;
  const { city, country } = location;

  // Formatea la fecha
  const fechaNacimientoFormateada = formatearFecha(dateOfBirth);
  const fechaRegistroFormateada = formatearFecha(registerDate);

  // Convierte el valor del género
  const generoConvertido = convertirGenero(gender);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Perfil del autor</h2>
        {userData && (
          <div className="title-info">
            <img src={picture} style={{ width: '100px' }} alt={`${firstName} ${lastName}`} />
            <div className="text-info icon">
              <p>
                <BiUser />
                Título: <span>{`${title}`}</span>{' '}
              </p>
              <p>
                <BiIdCard />
                Nombre: <span>{`${firstName} ${lastName}`}</span>{' '}
              </p>
              <p>
                <BiCalendarCheck />
                Fecha de nacimiento: <span>{`${fechaNacimientoFormateada}`}</span>{' '}
              </p>
              <p>
                <BiMale />
                Género: <span>{generoConvertido}</span>{' '}
              </p>
              <p>
                <BiMailSend />
                Email: <span>{`${email}`}</span>{' '}
              </p>
              <p>
                <BiPhoneCall />
                Celular: <span>{`${phone}`}</span>{' '}
              </p>
              <p>
                <BiLocationPlus />
                Locación: <span>{`${city}, ${country}`}</span>{' '}
              </p>
              <p>
                <BiLogInCircle />
                Fecha de registro: <span>{`${fechaRegistroFormateada}`}</span>{' '}
              </p>
            </div>
          </div>
        )}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default UserProfileModal;
