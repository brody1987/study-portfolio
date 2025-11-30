import React from 'react';
import { useContent } from '../ContentContext';

const Navbar: React.FC = () => {
  const { content } = useContent();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10 transition-all duration-300 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
        <div className="size-6 bg-primary rounded-sm shadow-lg shadow-primary/50" />
        <h2 className="text-white text-lg font-bold tracking-tight">{content.hero.title}</h2>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {['Work', 'About', 'All Work', 'Contact'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            const targetId = id === 'work' ? 'featured' : id;
            return (
                <button
                    key={item}
                    onClick={() => scrollToSection(targetId)}
                    className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors uppercase"
                >
                    {item}
                </button>
            )
        })}
      </nav>
      
      <button 
        onClick={() => scrollToSection('contact')}
        className="hidden md:block bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105"
      >
        Get In Touch
      </button>

        {/* Mobile Menu Icon (Simulated) */}
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;