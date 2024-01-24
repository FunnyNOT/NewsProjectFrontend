import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google'
import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `${name}=${value}; path=/; expires=${expires}; Secure; SameSite=Strict`
}

function SignInButton() {
  const { login } = useAuth()

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        // make a post request to the backend to create or login the user
        const login_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/accounts/login'
        fetch(login_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.REACT_APP_API_KEY
          },
          body: JSON.stringify(credentialResponse)
        })
          .then((response) => response.json())
          .then((data) => {
            setCookie('sessionToken', data.session_token, 7)
            console.log('Success:', data)
            login(data.user)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }}
      onError={() => {
        console.log('Login Failed')
      }}
    />
  )
}

function GoToAnotherPage() {
  return (
    <Link to='/login_testing'>
      <button>Go to another page</button>
    </Link>
  )
}

function Login() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <SignInButton />
      <GoToAnotherPage />
    </GoogleOAuthProvider>
  )
}

export default Login
