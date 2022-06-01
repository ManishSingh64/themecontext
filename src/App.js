// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import {ThemeContext} from './Context/ThemeContext'
import Navbar from './Components/Navbar';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight?"light":"dark"}`}>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
