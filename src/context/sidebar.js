import React, { useState } from 'react';

const SidebarContext = React.createContext();

const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
