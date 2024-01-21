import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google'
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { jwtDecode } from "jwt-decode";

function SignInButton() {
    const { login } = useAuth();
  
    return (
       <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
            console.log(credentialResponse.credential)
            
            const decoded_credentials = jwtDecode(credentialResponse.credential)
            console.log(decoded_credentials)

            console.log(decoded_credentials.family_name)
            console.log(decoded_credentials.given_name)
            console.log(decoded_credentials.email)



            const userData = decoded_credentials;
            login(userData);
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
    )
  }

function Login() {
 
  return (

    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <SignInButton />
    </GoogleOAuthProvider>

    
    
  )
}

export default Login
