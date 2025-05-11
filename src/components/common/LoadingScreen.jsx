import { useState, useEffect } from 'react';
import logo from '../../assets/logo2.png';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadingComplete, 500); // Wait for fade out animation
    }, 800); // Show loading for 800ms

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center transform scale-100">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto w-48 h-auto animate-[fadeIn_0.5s_ease-in-out] scale-100 hover:scale-105 transition-transform"
          style={{
            animation: "fadeInScale 0.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
