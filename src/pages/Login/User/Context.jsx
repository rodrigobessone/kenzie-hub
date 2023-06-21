import React, { createContext, UseContext, useState } from "react";

const UserContext = createContext();

function Context({ children }) {
  const [user, setUser] = useState(null);

  function updateData(data) {
    setUser(data);
  }

  return (
    <UserContext.Provider value={{ user, updateData }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, Context };
