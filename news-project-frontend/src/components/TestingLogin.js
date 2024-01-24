import React, { useEffect } from 'react';
import { useAuthenticateUser } from '../global_functions/AuthenticateUser';

const YourComponent = () => {
  const { authenticateUser } = useAuthenticateUser();

   // Run this effect only once on component mount

  return (
    <div>
      {/* Your component content */}
      <h1>Testing Login</h1>
    </div>
  );
};

export default YourComponent;
