import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const YourComponent = () => {
  // Use the useAuthenticateUser hook
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user === false) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <p>First name: {user.firstname}</p>
          <p>Last name: {user.lastname}</p>
          <p>User ID: {user.id}</p>

          <button onClick={logout}>Logout </button>
        </div>
      ) : (
        <div>
          <p>Not logged in</p>
          <button>Login</button>
        </div>
      )}
    </div>
  )
}

export default YourComponent
