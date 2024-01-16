import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './App.css';
import Header from './components/commons/Header/Header';
import PostList from './components/commons/Post/PostList';

const App = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${codeResponse.access_token}`,
                            Accept: 'application/json',
                        },
                    }
                );
                setProfile(response.data);
                setUser(codeResponse);
                localStorage.setItem('user', JSON.stringify(codeResponse));
            } catch (error) {
                console.log('Error fetching user profile:', error);
            }
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
        // Comprobar la autenticación al cargar la aplicación
        const checkAuthentication = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user')) || null;
            if (storedUser) {
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
                    setUser(storedUser);
                } catch (error) {
                    console.log('Error fetching user profile:', error);
                }
            }
        };

        checkAuthentication();
    }, []);

    return (
        <>
            <Header user={user} profile={profile} onLogout={logout} />

            <div>
                {user && (
                    <>
                     <PostList/>
                    </>
                )}
            </div>

            <div>
                {!user && (
                    <button onClick={login}>Inicia sesión con Google 🚀</button>
                )}
            </div>
        </>
    );
};

export default App;
