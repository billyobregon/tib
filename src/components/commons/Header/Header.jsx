import './Header.css';

const Header = ({ user, profile, onLogout }) => {
  const isLoggedIn = user && profile;

  return (
    <div className={`header-container ${isLoggedIn ? 'logged-in' : ''}`}>
      <div className="logo-container">
        <img
          src="https://titamedia.xyz/wp-content/uploads/2021/05/Logo_TitaMediaNublack.png"
          alt="Logo Tita Media"
          className="logo"
        />
      </div>
      <div className="welcome-container">
        {isLoggedIn && (
          <>
            <p>🎉 ¡Bienvenido <span>{profile.name}</span>!</p>
            <button onClick={onLogout}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
