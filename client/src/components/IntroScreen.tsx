import { useState, useEffect } from 'react';
import cryptoraLogo from '@assets/21e8412082ea668bd2d5b49e2619fb64_1758208026092.png';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [showText, setShowText] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  const handleClick = () => {
    onEnter();
  };

  return (
    <div 
      className="fixed inset-0 gradient-bg cursor-pointer overflow-hidden"
      onClick={handleClick}
      data-testid="intro-screen"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-15" />
      
      {/* Floating orbs */}
      <div className="floating-orbs">
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="floating-orb"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--neon-cyan))' : i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--neon-blue))',
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--neon-cyan))' : 'hsl(var(--neon-purple))',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: `0 0 4px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Logo container */}
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/30 via-neon-purple/20 to-neon-blue/30 rounded-full blur-2xl scale-150 animate-glow-pulse" />
          <img
            src={cryptoraLogo}
            alt="Cryptora"
            className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 drop-shadow-2xl transition-all duration-500 ${
              glitchActive ? 'animate-neon-flicker' : ''
            }`}
            style={{
              filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6)) drop-shadow(0 0 60px rgba(128, 0, 255, 0.4)) drop-shadow(0 0 90px rgba(0, 150, 255, 0.3))',
            }}
          />
        </div>

        {/* Cryptora title */}
        <div className="text-center mb-12">
          <h1 className={`font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient mb-4 transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${glitchActive ? 'animate-neon-flicker' : ''}`}>
            CRYPTORA
          </h1>
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 text-neon-cyan text-sm md:text-base font-exo">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              <span>DISCORD BOT</span>
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
            </div>
          </div>
          <div className={`h-1 w-32 mx-auto gradient-cyber transition-all duration-1000 delay-300 ${
            showText ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Enter prompt */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="futuristic-border glass-card inline-block px-8 py-4 mb-6 rounded-lg">
            <p className="text-neon-cyan text-lg md:text-xl font-exo font-light animate-pulse">
              CLICK ANYWHERE TO ENTER
            </p>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-neon-cyan rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Bottom corner accent */}
        <div className="absolute bottom-8 right-8">
          <div className="w-16 h-16 border-r-2 border-b-2 border-neon-cyan opacity-50 animate-glow-pulse" />
        </div>

        {/* Top corner accent */}
        <div className="absolute top-8 left-8">
          <div className="w-16 h-16 border-l-2 border-t-2 border-neon-purple opacity-50 animate-glow-pulse" />
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30 animate-pulse" 
             style={{ top: '30%' }} />
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-20 animate-pulse" 
             style={{ top: '70%', animationDelay: '1s' }} />
      </div>
    </div>
  );
}