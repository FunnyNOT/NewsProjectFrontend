// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuthenticateUser } from '../global_functions/AuthenticateUser';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { authenticateUser } = useAuthenticateUser();
  
  useEffect(() => {
    const initializeUser = async () => {
      try {
        // Check if the user is already present
        if (user) {
          return;
        }
        // Attempt to authenticate the user
        const authenticatedUser = await authenticateUser();
        
        if (authenticatedUser) {
          // If authentication is successful, set the user in the context
          setUser(authenticatedUser.user);
        } else {
          setUser(false);
        }
      } catch (error) {
        setUser(false);
        console.error('Error during user initialization:', error);
      }
    };

    // Call the asynchronous function to initialize the user
    initializeUser();
  }, [user, authenticateUser]);


  const login = (userData) => {
    setUser(userData)
    // Additional actions on login if needed
  }

  const logout = () => {
    setUser(null)
    // Additional actions on logout if needed
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
