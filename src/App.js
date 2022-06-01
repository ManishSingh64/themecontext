// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import {ThemeContext} from './Context/ThemeContext'
import Navbar from './Components/Navbar';
import Status from './Components/Status';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight?"light":"dark"}`}>
      <Navbar></Navbar>
      <Status/>
    </div>
  );
}

export default App;
