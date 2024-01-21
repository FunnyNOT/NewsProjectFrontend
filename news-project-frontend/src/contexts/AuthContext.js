// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('User set successfully:', user);
  }, [user]);

  const login = async (userData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUser(userData);
    // Additional actions on login if needed
  };

  const logout = () => {
    setUser(null);
    // Additional actions on logout if needed
  };

  return (
    <AuthContext.Provider value={{ user, login , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("COOOOOOOOOOOOOOOOOOOOOOOOOOOONTEXT");
  console.log(context);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};