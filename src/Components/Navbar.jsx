import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import {AuthContext} from '../Context/AuthContext'
const Navbar = () => {

    const {isLight,toggleTheme} = useContext(ThemeContext);

    const {isAuth,login,logout} = useContext(AuthContext);
  return (
    <div>
      <button onClick={toggleTheme}>{`make ${isLight?"Dark":"Light"}`}</button>
      <button onClick={() => {
        if(isAuth === true){
          logout();
        }else{
          login("Manish","Mani")
        }
      }}>{isAuth? "logout": "login"}</button>
    </div>
  )
}

export default Navbar