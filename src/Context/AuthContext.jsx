import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (username, password) => {
    if (username === "Manish" && password ==="Mani") {
      setIsAuth(true);
    }
  };

  const logout = () =>{
      setIsAuth(false)
  }
  return (
    <AuthContext.Provider value={{ isAuth, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
