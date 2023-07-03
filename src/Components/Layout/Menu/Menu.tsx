import React, { useState, useEffect } from "react";

import "../../../styles/layout/Menu.css";

import { Link } from "react-router-dom";
import { auth } from "../../../store/localStorage";
import DarkMode from "../../Pages/darkMode";

interface MenuProps {
  isDarkMode : boolean;
  setDarkMode : (isDarkMode : boolean) => void;
}

const Menu : React.FC<MenuProps> = ({isDarkMode,setDarkMode}) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  
  useEffect(() => {
    const isUserLogged = auth.getData() !== null;
    setIsLogged(isUserLogged);
  }, []);
  
  return (
    <div className="Menu">
      <DarkMode isDarkMode = {isDarkMode} setDarkMode = { setDarkMode } />
      <Link to="home">Home</Link>
      {!isLogged ? (
        <>
          <Link to="about">About</Link>
          <Link to="Signup">Signup</Link>
          <Link to="signin">Sign In</Link>
          <Link to="developer">Developer</Link>
        </>
      ) : (
        <>
          <Link to="signout">Sign Out</Link>
        </>
      )}
  
    </div>
  );
}

export default Menu;