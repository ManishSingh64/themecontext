import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
const Navbar = () => {

    const {isLight,toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>{`make ${isLight?"Dark":"Light"}`}</button>
    </div>
  )
}

export default Navbar