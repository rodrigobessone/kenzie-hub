import React, { createContext, useState } from "react";

const TechContext = createContext();

function TechProvider({ children }) {
  const [userTech, setTech] = useState([]);

  return (
    <TechContext.Provider value={{ userTech, setTech }}>
      {children}
    </TechContext.Provider>
  );
}

export { TechContext, TechProvider };
