import React, { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../Context/SibebarContext";
// import bg from "../assets/bg4.jpg"; // Remove old background
import '../utils/style.css'
import { Link } from "react-router-dom";
const musicBg = `url('https://www.transparenttextures.com/patterns/music-sheet.png')`;
const Home = () => {
  const { showMenu, setShowMenu } = useContext(SidebarContext);
  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, []);

  const token = localStorage.getItem("access_token") || null;
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center flex-col relative overflow-hidden"
      style={{
        backgroundImage: `${musicBg}`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 opacity-80"></div>
      {/* Musical emojis evenly spread, more visible, and animated */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Corners */}
        <span className="absolute top-8 left-8 text-[5rem] opacity-50 drop-shadow-lg animate-bounce-slow">🎵</span>
        <span className="absolute top-8 right-8 text-[5rem] opacity-50 drop-shadow-lg animate-bounce-medium">🎶</span>
        <span className="absolute bottom-8 left-8 text-[5rem] opacity-50 drop-shadow-lg animate-bounce-fast">🎧</span>
        <span className="absolute bottom-8 right-8 text-[5rem] opacity-50 drop-shadow-lg animate-bounce-slow">🎷</span>
        {/* Edges */}
        <span className="absolute top-1/2 left-8 text-[4rem] opacity-50 drop-shadow-lg animate-bounce-medium">🎸</span>
        <span className="absolute top-1/2 right-8 text-[4rem] opacity-50 drop-shadow-lg animate-bounce-fast">🎤</span>
        <span className="absolute top-8 left-1/2 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-slow">🥁</span>
        <span className="absolute bottom-8 left-1/2 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-medium">🎺</span>
        <span className="absolute top-1/4 left-8 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-fast">🎹</span>
        <span className="absolute top-1/4 right-8 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-slow">🎼</span>
        <span className="absolute bottom-1/4 left-8 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-medium">🎤</span>
        <span className="absolute bottom-1/4 right-8 text-[3rem] opacity-50 drop-shadow-lg animate-bounce-fast">🎸</span>
        {/* Center-ish */}
        <span className="absolute top-1/3 left-1/3 text-[2rem] opacity-50 drop-shadow-lg animate-bounce-slow">🎶</span>
        <span className="absolute top-1/3 right-1/3 text-[2rem] opacity-50 drop-shadow-lg animate-bounce-medium">🎧</span>
        <span className="absolute bottom-1/3 left-1/3 text-[2rem] opacity-50 drop-shadow-lg animate-bounce-fast">🎷</span>
        <span className="absolute bottom-1/3 right-1/3 text-[2rem] opacity-50 drop-shadow-lg animate-bounce-slow">🥁</span>
      </div>
      {/* Cartoon person listening to music SVG with animation - removed */}
      <div className="flex flex-col justify-center items-center space-y-6 bg-[rgba(0,0,0,0.5)] w-full h-screen lg:space-y-8 z-10">
        <h1 className="text-4xl lg:text-6xl text-white font-extrabold drop-shadow-lg">
          Music Stream
        </h1>
        <p className="text-white text-2xl lg:text-4xl drop-shadow-md">
          Listen to your favorite songs
        </p>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
          {
            (token ? ( <Link to={'/upload'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">Upload</Link>):(
                <Link to={'/login'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">Login</Link>
            ))
          }
          <Link to={'/explore'} className="bg-lime-300 w-32 py-1 rounded-md flex justify-center text-[#461e74]">Stream</Link>
        </div>
      </div>
      {/* Keyframes for animated gradient, emojis, and SVG float */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        @keyframes bounce-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-35px); }
        }
        .animate-bounce-medium {
          animation: bounce-medium 2.5s infinite;
        }
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }
        .animate-bounce-fast {
          animation: bounce-fast 1.5s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -30px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
