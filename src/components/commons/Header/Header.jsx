// Header.jsx
import './Header.css';

const Header = ({ user, profile, onLogout }) => {
    return (
        <div className={`header-container ${user && profile ? 'logged-in' : ''}`}>
            <div className="logo-container">
                <img src="https://titamedia.xyz/wp-content/uploads/2021/05/Logo_TitaMediaNublack.png" alt="Logo" className="logo" />
            </div>
            <div className="welcome-container">
                {user && profile && (
                    <>
                        <p>  🎉 !Bienvenido  <span>{profile.name}</span></p>
                        <button onClick={onLogout}>Log out</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
