import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',

  },
  dark: {
    background: '#000000',
    color: '#ffffff',
    
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
