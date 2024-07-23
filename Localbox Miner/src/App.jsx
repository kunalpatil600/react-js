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
