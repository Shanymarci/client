interface HeaderProps {
    isDarkMode: boolean;
  }
  
  const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
    const headerStyle = {
      color: !isDarkMode ? "black" : "blue"
    };
  
    return (
      <div className="Header">
        <h1 style={headerStyle}>Movies Project</h1>
      </div>
    );
  };
  
  export default Header;