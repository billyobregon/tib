import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1082179231440-iforhp969tm05qmc1s7d7lsl0hnfcbo7.apps.googleusercontent.com">

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>, 

)
