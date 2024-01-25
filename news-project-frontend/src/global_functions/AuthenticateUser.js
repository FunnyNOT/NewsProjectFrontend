import { getSessionToken } from './GetSessionToken';

// This is now a custom hook, so it starts with "use"
export const useAuthenticateUser = () => {
  
  const authenticateUser = async () => {
    
    const sessionToken = getSessionToken();

    if (!sessionToken) {
      // Session token not found, prompt the user to login
      // You might redirect or show a login modal here
      return false;
    }
    
    // Session token exists, validate it with the backend
    const response = await checkSessionToken(sessionToken);
    if (!response.ok) {
      // Session token is invalid, prompt the user to login
      // You might redirect or show a login modal here
      return false;
    }
    return response.json();
  };

  return { authenticateUser };
};

const checkSessionToken = async (sessionToken) => {
  // Implement logic to validate the session token with your backend
  // Return true if the token is valid, false otherwise
  const websites_url = process.env.REACT_APP_FLASK_PUBLIC_IP + '/accounts/check-session-token'

  const response = await fetch(websites_url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.REACT_APP_API_KEY,
      'session-token': sessionToken 
    }
  });
  
  return response;
};

