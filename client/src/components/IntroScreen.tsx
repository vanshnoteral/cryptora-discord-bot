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
      className="fixed inset-0 bg-black cursor-pointer overflow-hidden"
      onClick={handleClick}
      data-testid="intro-screen"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Logo container */}
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-xl scale-150 animate-glow-pulse" />
          <img
            src={cryptoraLogo}
            alt="Cryptora"
            className={`relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl transition-all duration-500 ${
              glitchActive ? 'animate-neon-flicker' : ''
            }`}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(0, 255, 255, 0.3))',
            }}
          />
        </div>

        {/* Cryptora title */}
        <div className="text-center mb-12">
          <h1 className={`font-orbitron text-6xl md:text-8xl font-black text-gradient neon-glow mb-4 transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${glitchActive ? 'animate-neon-flicker' : ''}`}>
            CRYPTORA
          </h1>
          <div className={`h-1 w-32 mx-auto gradient-cyber transition-all duration-1000 delay-300 ${
            showText ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        {/* Enter prompt */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-neon-cyan text-lg md:text-xl font-exo font-light mb-2 animate-glow-pulse">
            click anywhere to enter
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
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