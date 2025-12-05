import React, { useState } from 'react'

function Nav() {

  const [darkMode, setDarkMode] = useState(() =>{
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if(darkMode){
        root.classList.add('dark-mode');
        root.classList.remove('light-mode');
        localStorage.setItem('theme','dark');
    }
    else{
        root.classList.remove('dark-mode');
        root.classList.add('light-mode');
        localStorage.setItem('theme', 'light')
    }
  }, [darkMode]); 
    

  const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
  }

  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <h1>Your <span>Notes</span></h1>
            </div>
            <div className="nav-buttons">
                <button className="btn"></button>
            </div>
        </nav>
    </>
  )
}

export default Nav