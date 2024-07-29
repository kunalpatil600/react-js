// Context Setup: ThemeContext is created and provides theme and toggleTheme.
// ThemeProvider: Wraps the App component allowing it to access the theme and toggleTheme function.
// App Component: Uses theme to style the application and renders the Btn component.
// Btn Component: When the button is clicked, it calls toggleTheme to switch the theme between light and dark.

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 
import Btn from './Btn';

function App() {
  const { theme } = useContext(ThemeContext); 

  const appStyle = {
    backgroundColor: theme.background,
    color: theme.color,
    height: '100vh',
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={appStyle} >
      <h1>THEME CHANGE </h1>
      <Btn />
    </div>
  );
}

export default App;
