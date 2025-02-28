"use client";
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section id="home" className="h-screen flex items-center justify-center py-8 sm:py-14 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 z-10">
        <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 z-10">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
            Hi! I&apos;m <span className="text-blue-400">Shiv</span> Dixit
            <br />
            {mounted && (
              <TypeAnimation
                sequence={[
                  'Finance Enthusiast',
                  1000,
                  'Software Developer',
                  1100,
                  'Business Analyst',
                  1000,
                  'Data Engineer',
                  1000,
                  'Full Stack Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-400"
              />
            )}
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Strategizing my future at the intersection of <span className="text-blue-400">business and technology</span>. 
            Turning &apos;byte&apos; into business.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="https://github.com/dshiv15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <i className="fa-brands fa-github text-blue-400"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shiv-dixit-75338924a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <i className="fa-brands fa-linkedin text-blue-400"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1sQGCd4SUFX3XPsQrPFScShyZ6pSzuuna/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <i className="fa-solid fa-file text-blue-400"></i>
              <span>Resume</span>
            </a>
            <a 
              href="mailto:dshiv1213@gmail.com" 
              className="relative overflow-hidden px-6 py-3 group rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
            >
              <div
                className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
              ></div>
              <h4 className="relative z-9">Contact Me →</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  );  
}
