import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const YourComponent = () => {
  // Use the useAuthenticateUser hook
  const { user } = useAuth();

  // Your component rendering logic here

  return (
    <div>
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <p>First name: {user.firstname}</p>
          <p>Last name: {user.lastname}</p>
          <p>User ID: {user.id}</p>

          <button >Logout </button>
        </div>
      ) : (
        <div>
          <p>Not logged in</p>
          <button>Login</button>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
