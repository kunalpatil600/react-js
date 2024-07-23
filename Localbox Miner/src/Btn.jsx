import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

const Btn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  
  const buttonStyle = {
    backgroundColor: theme.color,
    color: theme.background,
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default Btn;
