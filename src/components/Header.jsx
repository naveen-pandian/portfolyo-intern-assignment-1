import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <div id='home'>
        <div className='circle'></div>
        <div className='wcircle translate-x-[750px] translate-y-[-20px] w-[400px] h-[400px]'></div>
        <div className='wcircle translate-x-[850px] translate-y-[600px] w-[900px] h-[900px]'></div>
      <div className="fixed z-10 backdrop-filter backdrop-blur-xl bg-white/30 rounded-2xl shadow-xl overflow-hidden w-auto max-w-4xl">
        <nav className="flex justify-between items-center bg-white/60 text-gray-700 p-4">
          <div className="hidden sm:flex sm:gap-4 ">
            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#expertise" className="hover:text-blue-500 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
           </div>
          <div className="flex items-center gap-4">
             <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500 transition-colors focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>        
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white/60 text-gray-700 py-2 px-4 ">
            <a href="#home" className="block py-2">Home</a>
            <a href="#expertise" className="block py-2">Expertise</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
        </div>
       </div>
  );
}

export default Header;
