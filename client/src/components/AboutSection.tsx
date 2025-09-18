import { Card } from '@/components/ui/card';
import { Shield, Scale, Music, Gamepad2, Zap, Gift } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-4" />
      
      {/* Floating orbs */}
      <div className="floating-orbs">
        {[...Array(4)].map((_, i) => (
          <div
            key={`about-orb-${i}`}
            className="floating-orb"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'hsl(var(--neon-cyan))' : 'hsl(var(--neon-purple))',
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${25 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-gradient mb-6" data-testid="about-title">
            About Cryptora
          </h2>
          <div className="h-1 w-24 mx-auto gradient-cyber mb-8" />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-300 font-exo leading-relaxed" data-testid="about-description">
            Cryptora is an advanced Discord bot designed for <span className="text-neon-cyan font-semibold">security</span>, 
            <span className="text-neon-purple font-semibold"> moderation</span>, 
            <span className="text-neon-blue font-semibold"> music</span>, 
            automod, fun games, giveaways, and more. With <span className="text-neon-cyan font-bold">431+ commands</span> and 
            <span className="text-neon-purple font-bold"> 92 slash commands</span>, it's your ultimate all-in-one bot.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 mb-4 border border-neon-cyan/30">
              <Shield className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-cyan mb-2">Advanced Security</h3>
            <p className="text-gray-300 font-exo text-sm">Comprehensive protection against raids, spam, and malicious activities</p>
          </Card>
          
          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-purple/10 mb-4 border border-neon-purple/30">
              <Scale className="w-6 h-6 text-neon-purple" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-purple mb-2">Smart Moderation</h3>
            <p className="text-gray-300 font-exo text-sm">AI-powered automod with customizable rules and instant responses</p>
          </Card>
          
          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-blue/10 mb-4 border border-neon-blue/30">
              <Music className="w-6 h-6 text-neon-blue" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-blue mb-2">Premium Music</h3>
            <p className="text-gray-300 font-exo text-sm">High-quality music streaming with playlist management and controls</p>
          </Card>

          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/10 mb-4 border border-neon-cyan/30">
              <Gamepad2 className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-cyan mb-2">Fun & Games</h3>
            <p className="text-gray-300 font-exo text-sm">Entertainment features to keep your community engaged</p>
          </Card>

          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-purple/10 mb-4 border border-neon-purple/30">
              <Gift className="w-6 h-6 text-neon-purple" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-purple mb-2">Giveaways</h3>
            <p className="text-gray-300 font-exo text-sm">Create and manage exciting giveaways for your community</p>
          </Card>

          <Card className="futuristic-border glass-card p-6 text-center hover-elevate transition-all duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-blue/10 mb-4 border border-neon-blue/30">
              <Zap className="w-6 h-6 text-neon-blue" />
            </div>
            <h3 className="text-lg font-orbitron font-bold text-neon-blue mb-2">Lightning Fast</h3>
            <p className="text-gray-300 font-exo text-sm">Optimized performance with minimal latency and maximum uptime</p>
          </Card>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="glass-card p-4 md:p-6 text-center hover-elevate" data-testid="stat-security">
            <div className="text-2xl md:text-3xl mb-2"><Shield className="w-6 h-6 md:w-8 md:h-8 mx-auto text-neon-cyan" /></div>
            <div className="text-sm md:text-lg font-orbitron font-bold text-neon-cyan">Security</div>
            <div className="text-xs md:text-sm text-gray-400">Advanced Protection</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center hover-elevate" data-testid="stat-moderation">
            <div className="text-2xl md:text-3xl mb-2"><Scale className="w-6 h-6 md:w-8 md:h-8 mx-auto text-neon-purple" /></div>
            <div className="text-sm md:text-lg font-orbitron font-bold text-neon-purple">Moderation</div>
            <div className="text-xs md:text-sm text-gray-400">Smart AutoMod</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center hover-elevate" data-testid="stat-music">
            <div className="text-2xl md:text-3xl mb-2"><Music className="w-6 h-6 md:w-8 md:h-8 mx-auto text-neon-blue" /></div>
            <div className="text-sm md:text-lg font-orbitron font-bold text-neon-blue">Music</div>
            <div className="text-xs md:text-sm text-gray-400">High Quality Audio</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center hover-elevate" data-testid="stat-fun">
            <div className="text-2xl md:text-3xl mb-2"><Gamepad2 className="w-6 h-6 md:w-8 md:h-8 mx-auto text-neon-cyan" /></div>
            <div className="text-sm md:text-lg font-orbitron font-bold text-neon-cyan">Fun & Games</div>
            <div className="text-xs md:text-sm text-gray-400">Entertainment</div>
          </div>
        </div>
      </div>
    </section>
  );
}