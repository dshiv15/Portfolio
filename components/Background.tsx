"use client";

import React, { useEffect, useState } from "react";

// Define the particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

// Remove the explicit JSX.Element return type annotation
export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Create particles only on client side
    const particleCount = 80;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // percentage of viewport width
        y: Math.random() * 100, // percentage of viewport height
        size: 1 + Math.random() * 2, 
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: 0.1 + Math.random() * 0.4
      });
    }
    
    setParticles(newParticles);
    
    // Animation frame for particle movement
    let animationId: number;
    const animateParticles = () => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            particle.speedX *= -1;
            newX = particle.x;
          }
          
          if (newY <= 0 || newY >= 100) {
            particle.speedY *= -1;
            newY = particle.y;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        });
      });
      
      animationId = requestAnimationFrame(animateParticles);
    };
    
    animationId = requestAnimationFrame(animateParticles);
    
    // Clean up animation on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Implement mouse repulsion
  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    setParticles(prevParticles => {
      return prevParticles.map(particle => {
        // Calculate distance from mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If particle is close to mouse, push it away
        if (distance < 10) {
          const pushFactor = (10 - distance) / 10;
          const pushX = (dx / distance) * pushFactor * -0.5;
          const pushY = (dy / distance) * pushFactor * -0.5;
          
          return {
            ...particle,
            speedX: particle.speedX + pushX,
            speedY: particle.speedY + pushY
          };
        }
        
        return particle;
      });
    });
  };
  
  return (
    <div 
      className="fixed inset-0 -z-10"
      onMouseMove={handleMouseMove}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease'
          }}
        />
      ))}
      
      {/* Optional pseudo-connections between particles */}
      <svg className="absolute inset-0 w-full h-full -z-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {particles.map((particle, i) => {
          // Only connect to nearby particles
          const connections = particles
            .slice(i + 1)
            .filter(p2 => {
              const dx = (p2.x - particle.x);
              const dy = (p2.y - particle.y);
              const distance = Math.sqrt(dx * dx + dy * dy);
              return distance < 15; // Only connect close particles
            })
            .slice(0, 3); // Limit connections per particle
          
          return connections.map((p2, j) => (
            <line
              key={`${i}-${j}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${p2.x}%`}
              y2={`${p2.y}%`}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.5"
            />
          ));
        })}
      </svg>
    </div>
  );
}