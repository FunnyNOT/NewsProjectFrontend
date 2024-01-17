import React, { createContext, useContext, useState } from 'react';

const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
  const [websiteId, setWebsiteId] = useState(null);

  const setWebsiteIdValue = (id) => {
    setWebsiteId(id);
  };

  return (
    <WebsiteContext.Provider value={{ websiteId, setWebsiteIdValue }}>
      {children}
    </WebsiteContext.Provider>
  );
};

export const useWebsiteContext = () => {
  return useContext(WebsiteContext);
};