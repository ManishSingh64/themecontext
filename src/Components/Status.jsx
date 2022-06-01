import React,{useContext} from 'react';
import {AuthContext} from '../Context/AuthContext'

const Status = () => {
    const {isAuth} = useContext(AuthContext);
  return (
    <div>Status: {isAuth? "Logged In": "Logged Out"}</div>
  )
}

export default Status;