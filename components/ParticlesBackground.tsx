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

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const particleCount = 80;
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // viewport percentage
      y: Math.random() * 100,
      size: 1 + Math.random() * 2, 
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: 0.2 + Math.random() * 0.5,
    }));

    setParticles(newParticles);

    // Animate particles
    let animationId: number;
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const newX = particle.x + particle.speedX;
          const newY = particle.y + particle.speedY;

          // Bounce off edges
          const updatedSpeedX = newX <= 0 || newX >= 100 ? -particle.speedX : particle.speedX;
          const updatedSpeedY = newY <= 0 || newY >= 100 ? -particle.speedY : particle.speedY;

          return { ...particle, x: newX, y: newY, speedX: updatedSpeedX, speedY: updatedSpeedY };
        })
      );
      animationId = requestAnimationFrame(animateParticles);
    };

    animationId = requestAnimationFrame(animateParticles);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Handle mouse interaction (particles move away)
  const handleMouseMove = (e: React.MouseEvent) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    setParticles(prevParticles =>
      prevParticles.map(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 10) {
          const pushFactor = (10 - distance) / 10;
          return {
            ...particle,
            speedX: particle.speedX - (dx / distance) * pushFactor * 0.5,
            speedY: particle.speedY - (dy / distance) * pushFactor * 0.5,
          };
        }
        return particle;
      })
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black -z-10"
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
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}