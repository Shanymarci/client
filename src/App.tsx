import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Main from './Components/Layout/Main/Main';
import Footer from './Components/Layout/Footer/Footer';

function App() {
    const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div
        style = {{ backgroundColor: isDarkMode ? 'black' : 'white' }} className = 'App'>
        <Header isDarkMode = { isDarkMode}  />
        <Menu isDarkMode = {isDarkMode} setDarkMode = { setDarkMode }  />
        <Main />
        <Footer />
    </div>
 );
}

export default App;