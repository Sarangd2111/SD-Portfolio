import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './pages/Skills';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from 'react';
import { Themes } from './utils/utils';

function App() {
  const [showThemePopup, setShowThemePopup] = useState(false);
  const [themePopupWidht, setThemePopupWidth] = useState(0);
  const themePopupRef = useRef(50);
  const [currentTheme, setCurrentTheme] = useState('');

  const applyTheme = (themeName) => {
    if (currentTheme !== themeName) {
      const confirmChange = window.confirm(`Do you want to change the theme to ${themeName}?`);
      if (confirmChange) {
        setCurrentTheme(themeName);
        toggleThemePopup();
      }
    }
    else{
      window.alert(`${themeName} Theme applied already`)
    }
  };

  const toggleThemePopup = () => {
    setShowThemePopup(!showThemePopup);
  };

  useEffect(() => {
    AOS.init();
    if (themePopupRef.current) {
      setTimeout(() => {
        if (themePopupRef.current) {
          setThemePopupWidth(themePopupRef.current.offsetWidth);
        }
      }, 100);
    }
  }, [showThemePopup]);

  return (
    <div className="App" site-theme={currentTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {showThemePopup && (
        <div
          ref={themePopupRef}
          className={`theme-popup ${showThemePopup ? "slidein" : "slideout"}`}
        >
          {Themes.map((theme) => {
            return (
              <>
                <div className="theme-popup-inner" onClick={() => applyTheme(theme.themeName.toLowerCase())}>
                  <div className="theme-name">
                    <span className={currentTheme === theme.themeName.toLowerCase() ? "current-theme" : ""}>{theme.themeName}</span>
                  </div>
                  <img src={theme.image} alt="" className="theme-img" />
                </div>
              </>
            );
          })}
        </div>
      )}
      <button
        className={
          showThemePopup ? "theme-popup-button-top" : "theme-popup-button"
        }
        onClick={toggleThemePopup}
        style={{ right: showThemePopup ? `${themePopupWidht - 40}px` : "0px" }}
      >
        {showThemePopup ? "⏏" : "⏏"}
      </button>
    </div>
  );
}

export default App;
