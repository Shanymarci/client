import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";


interface DarkModeProps {
    isDarkMode : boolean;
    setDarkMode : (isDarkMode : boolean) => void;
};

const DarkMode : React.FC<DarkModeProps> = ({ isDarkMode ,setDarkMode } ) => {
    const handleDarkMode = () => {
        const result = !isDarkMode;
        setDarkMode(result);
    }
    
    return (
    <DarkModeToggle
      onChange = { handleDarkMode }
      checked = { isDarkMode }
      size = {80}
    />
    );
}




export default DarkMode;