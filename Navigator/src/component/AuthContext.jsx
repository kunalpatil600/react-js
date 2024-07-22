import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider  ({ children }) {
  const [user, setUser] = useState("");

  const login = (value) => {
    setUser(value);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
