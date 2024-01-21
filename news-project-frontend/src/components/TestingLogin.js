
import { useAuth } from '../contexts/AuthContext';

const YourComponent = () => {
  console.log('Rendering YourComponent');
  return <Content />;
};


export default YourComponent;

// Content.js
const Content = () => {
  console.log('Rendering Content');
  const { user, login, logout } = useAuth();
  console.log('User in Content:', user);

  // ... rest of the component
};



















// // YourComponent.js
// import { useAuth } from '../contexts/AuthContext'; // Adjust the path accordingly
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const YourComponent = () => {
//     return(
//         <Content />
//     )
// };

// export default YourComponent;

// const Content = () => {
//     const { user, login, logout } = useAuth();
//     console.log(user);
    
//     useEffect(() => {
//         console.log('User set successfully:', user);
//       }, [user]);


//   return(
//     <div>
//       {user ? (
//         <div>
//           <h2>User Information</h2>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           {/* Display other user information as needed */}
//         </div>
//       ) : (
//         <p>No user is logged in.</p>
//       )}
//     </div>
    
//   )
// };
