import { Button } from '@/components/ui/button';
import cryptoraLogo from '@assets/21e8412082ea668bd2d5b49e2619fb64_1758208026092.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 cyber-grid opacity-8" />
      
      {/* Floating orbs background */}
      <div className="floating-orbs">
        {[...Array(6)].map((_, i) => (
          <div
            key={`hero-orb-${i}`}
            className="floating-orb"
            style={{
              width: `${Math.random() * 8 + 6}px`,
              height: `${Math.random() * 8 + 6}px`,
              left: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--neon-cyan))' : i % 3 === 1 ? 'hsl(var(--neon-purple))' : 'hsl(var(--neon-blue))',
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/25 via-neon-purple/15 to-neon-blue/25 rounded-full blur-3xl scale-150 animate-glow-pulse" />
          <img
            src={cryptoraLogo}
            alt="Cryptora Logo"
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 50px rgba(128, 0, 255, 0.3))',
            }}
          />
        </div>

        {/* Main title */}
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gradient mb-6" data-testid="hero-title">
          CRYPTORA
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-exo font-light mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Your All-in-One <span className="text-neon-cyan">Security</span>, 
          <span className="text-neon-purple"> Moderation</span> & 
          <span className="text-neon-blue"> Fun</span> Discord Bot
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-exo font-semibold bg-neon-cyan text-black hover:bg-neon-cyan/90 neon-border transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1324050005467730091", '_blank')}
            data-testid="button-invite-bot"
          >
            Invite Bot
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-exo font-semibold border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:scale-105"
            data-testid="button-support-server"
          >
            Support Server
          </Button>
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
          <div className="glass-card p-3 sm:p-4 rounded-lg hover-elevate" data-testid="stat-commands">
            <div className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-neon-cyan">431+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-exo">Commands</div>
          </div>
          <div className="glass-card p-3 sm:p-4 rounded-lg hover-elevate" data-testid="stat-slash-commands">
            <div className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-neon-purple">92</div>
            <div className="text-xs sm:text-sm text-gray-400 font-exo">Slash Commands</div>
          </div>
          <div className="glass-card p-3 sm:p-4 rounded-lg hover-elevate" data-testid="stat-all-in-one">
            <div className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-neon-blue">∞</div>
            <div className="text-xs sm:text-sm text-gray-400 font-exo">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}