"use client";

import { useEffect, useState } from "react";
import "../styles/globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [colorShiftIndex, setColorShiftIndex] = useState(0);

  // Dark-Themed Colors (Gold Removed)
  const colorThemes = [
    { bg: "#121212", text: "#E2E8F0", accent: "#3B82F6" }, // Dark with Blue accent
    { bg: "#0F172A", text: "#38B6FF", accent: "#38B6FF" }, // Midnight Blue & Electric Blue
  ];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorShiftIndex((prev) => (prev + 1) % colorThemes.length);
    }, 8000);
  
    return () => clearInterval(colorInterval);
  }, [colorThemes.length]); 

  const currentTheme = colorThemes[colorShiftIndex];

  return (
    <html lang="en">
      <head>
        <title>Shiv Dixit - Portfolio</title>
        <meta name="description" content="Portfolio of Shiv Dixit - Computer Science student with a minor in Accounting and Finance" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className="relative font-sans overflow-x-hidden flex flex-col items-center"
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.text,
          transition: "background-color 1s ease-in-out, color 1s ease-in-out",
        }}
      >
        {/* Background Pattern */}
        <div 
          className="fixed inset-0 z-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Waving Emoji (Instead of Profile Photo)
        <div className="relative z-10 text-center mt-16">
          <span className="text-8xl animate-waving-hand">👋</span>
          <h1 className="text-3xl mt-3 font-bold">Hi, I'm Shiv Dixit!</h1>
          <p className="text-lg opacity-80">Welcome to my portfolio.</p>
        </div> */}

        {/* MAIN CONTENT - Responsive & Clean */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </div>

        {/* Custom color accent elements */}
        <div
          className="fixed top-0 left-0 w-full h-1 z-50 transition-colors duration-1000"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <div
          className="fixed bottom-0 left-0 w-full h-1 z-50 transition-colors duration-1000"
          style={{ backgroundColor: currentTheme.accent }}
        />

        {/* Waving Hand Animation */}
        <style jsx global>{`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-20deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-waving-hand {
            display: inline-block;
            animation: wave 2s infinite ease-in-out;
          }
        `}</style>
      </body>
    </html>
  );
}
