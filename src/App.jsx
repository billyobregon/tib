import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            localStorage.setItem('user', JSON.stringify(codeResponse));
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const logout = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user')) || null;
            if (storedUser) {
                setUser(storedUser);
                try {
                    const response = await axios.get(
                        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${storedUser.access_token}`,
                        {
                            headers: {
                                Authorization: `Bearer ${storedUser.access_token}`,
                                Accept: 'application/json',
                            },
                        }
                    );
                    setProfile(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        checkAuthentication();
    }, []);

    return (
        <>
            <div>
                {user && (
                    <>
                        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                            <img src={reactLogo} className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </>
                )}
            </div>

            <div>
                {profile ? (
                    <>
                        <h2>React Google Login</h2>
                        <br />
                        <br />
                        <div>
                            <img src={profile.picture} alt="user image" />
                            <h3>User Logged in</h3>
                            <p>Bienvenido {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <button onClick={logout}>Log out</button>
                        </div>
                    </>
                ) : (
                    <button onClick={login}>Sign in with Google 🚀</button>
                )}
            </div>
        </>
    );
};

export default App;
