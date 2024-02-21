import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { setCookie } from '../global_functions/cookies'

function SignInButton() {
  const { login } = useAuth()

  return (
    <GoogleLogin
      type='standard'
      theme='filled_black'
      size='medium'
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
