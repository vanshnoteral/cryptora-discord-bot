import { Card } from '@/components/ui/card';
import { Crown, Code, Shield, Scale, Music, Gamepad2 } from 'lucide-react';

export default function AboutSection() {
  const teamMembers = [
    {
      name: 'Npg',
      role: 'Owner',
      icon: Crown,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
    },
    {
      name: 'Sandeep',
      role: 'Developer',
      icon: Code,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
    },
    {
      name: 'Vansh',
      role: 'Admin',
      icon: Shield,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient mb-6" data-testid="about-title">
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

        {/* Team section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card 
                key={member.name}
                className={`glass-card p-8 text-center hover-elevate transition-all duration-300 ${member.bgColor} border-opacity-30`}
                data-testid={`team-member-${member.name.toLowerCase()}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${member.bgColor} mb-4 border border-current border-opacity-30`}>
                  <Icon className={`w-8 h-8 ${member.color}`} />
                </div>
                <h3 className={`text-2xl font-orbitron font-bold ${member.color} mb-2`}>
                  {member.name}
                </h3>
                <p className="text-gray-400 font-exo">
                  {member.role}
                </p>
                
              </Card>
            );
          })}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="glass-card p-6 text-center hover-elevate" data-testid="stat-security">
            <div className="text-3xl mb-2"><Shield className="w-8 h-8 mx-auto text-neon-cyan" /></div>
            <div className="text-lg font-orbitron font-bold text-neon-cyan">Security</div>
            <div className="text-sm text-gray-400">Advanced Protection</div>
          </div>
          <div className="glass-card p-6 text-center hover-elevate" data-testid="stat-moderation">
            <div className="text-3xl mb-2"><Scale className="w-8 h-8 mx-auto text-neon-purple" /></div>
            <div className="text-lg font-orbitron font-bold text-neon-purple">Moderation</div>
            <div className="text-sm text-gray-400">Smart AutoMod</div>
          </div>
          <div className="glass-card p-6 text-center hover-elevate" data-testid="stat-music">
            <div className="text-3xl mb-2"><Music className="w-8 h-8 mx-auto text-neon-blue" /></div>
            <div className="text-lg font-orbitron font-bold text-neon-blue">Music</div>
            <div className="text-sm text-gray-400">High Quality Audio</div>
          </div>
          <div className="glass-card p-6 text-center hover-elevate" data-testid="stat-fun">
            <div className="text-3xl mb-2"><Gamepad2 className="w-8 h-8 mx-auto text-neon-cyan" /></div>
            <div className="text-lg font-orbitron font-bold text-neon-cyan">Fun & Games</div>
            <div className="text-sm text-gray-400">Entertainment</div>
          </div>
        </div>
      </div>
    </section>
  );
}