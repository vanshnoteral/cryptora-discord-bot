import { Button } from '@/components/ui/button';
import cryptoraLogo from '@assets/21e8412082ea668bd2d5b49e2619fb64_1758208026092.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
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
          <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-2xl scale-150 animate-glow-pulse" />
          <img
            src={cryptoraLogo}
            alt="Cryptora Logo"
            className="relative w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.4))',
            }}
          />
        </div>

        {/* Main title */}
        <h1 className="font-orbitron text-7xl md:text-9xl font-black text-gradient neon-glow mb-6" data-testid="hero-title">
          CRYPTORA
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 font-exo font-light mb-12 max-w-4xl mx-auto leading-relaxed">
          Your All-in-One <span className="text-neon-cyan neon-glow">Security</span>, 
          <span className="text-neon-purple neon-glow"> Moderation</span> & 
          <span className="text-neon-blue neon-glow"> Fun</span> Discord Bot
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-exo font-semibold bg-neon-cyan text-black hover:bg-neon-cyan/90 neon-border transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1324050005467730091", '_blank')}
            data-testid="button-invite-bot"
          >
            <span className="mr-2">🚀</span>
            Invite Bot
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-4 text-lg font-exo font-semibold border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:scale-105"
            data-testid="button-support-server"
          >
            <span className="mr-2">💬</span>
            Support Server
          </Button>
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glass-card p-4 rounded-lg hover-elevate" data-testid="stat-commands">
            <div className="text-3xl font-orbitron font-bold text-neon-cyan neon-glow">431+</div>
            <div className="text-sm text-gray-400 font-exo">Commands</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-elevate" data-testid="stat-slash-commands">
            <div className="text-3xl font-orbitron font-bold text-neon-purple neon-glow">92</div>
            <div className="text-sm text-gray-400 font-exo">Slash Commands</div>
          </div>
          <div className="glass-card p-4 rounded-lg hover-elevate" data-testid="stat-all-in-one">
            <div className="text-3xl font-orbitron font-bold text-neon-blue neon-glow">∞</div>
            <div className="text-sm text-gray-400 font-exo">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}