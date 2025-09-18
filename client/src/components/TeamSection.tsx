import { Card } from '@/components/ui/card';
import { Crown, Code2, ShieldCheck } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Npg',
      role: 'Owner',
      icon: Crown,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/30',
      gradient: 'from-neon-cyan/20 to-transparent',
      description: 'Visionary leader behind Cryptora',
    },
    {
      name: 'Sandeep',
      role: 'Developer',
      suffix: '(OP)',
      icon: Code2,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
      gradient: 'from-neon-purple/20 to-transparent',
      description: 'Lead developer and architect',
    },
    {
      name: 'Vansh',
      role: 'Admin',
      icon: ShieldCheck,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30',
      gradient: 'from-neon-blue/20 to-transparent',
      description: 'Community manager and administrator',
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient neon-glow mb-6" data-testid="team-title">
            Meet The Team
          </h2>
          <div className="h-1 w-24 mx-auto gradient-cyber mb-8" />
          <p className="text-lg text-gray-400 font-exo max-w-2xl mx-auto">
            The brilliant minds behind Cryptora's development and management
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card 
                key={member.name}
                className={`glass-card p-8 text-center hover-elevate transition-all duration-300 hover:scale-105 relative overflow-hidden border ${member.borderColor}`}
                data-testid={`team-${member.name.toLowerCase()}`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-50`} />
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${member.bgColor} mb-6 border-2 ${member.borderColor} mx-auto`}>
                    <Icon className={`w-10 h-10 ${member.color}`} />
                  </div>

                  {/* Name and role */}
                  <h3 className={`text-2xl font-orbitron font-bold ${member.color} neon-glow mb-2`}>
                    {member.name}
                    {member.suffix && (
                      <span className="text-sm text-gray-400 ml-2 font-exo">
                        {member.suffix}
                      </span>
                    )}
                  </h3>
                  
                  <div className={`inline-block px-4 py-2 rounded-full ${member.bgColor} border ${member.borderColor} mb-4`}>
                    <span className={`font-exo font-semibold ${member.color}`}>
                      {member.role}
                    </span>
                  </div>

                  <p className="text-gray-400 font-exo text-sm">
                    {member.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="flex justify-center space-x-2 mt-6">
                    <div className={`w-2 h-2 rounded-full ${member.color.replace('text-', 'bg-')} opacity-70`} />
                    <div className={`w-2 h-2 rounded-full ${member.color.replace('text-', 'bg-')} opacity-50`} />
                    <div className={`w-2 h-2 rounded-full ${member.color.replace('text-', 'bg-')} opacity-30`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Team stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 text-center hover-elevate" data-testid="team-stat-experience">
            <div className="text-3xl font-orbitron font-bold text-neon-cyan neon-glow">5+</div>
            <div className="text-gray-400 font-exo">Years Experience</div>
          </div>
          <div className="glass-card p-6 text-center hover-elevate" data-testid="team-stat-servers">
            <div className="text-3xl font-orbitron font-bold text-neon-purple neon-glow">1000+</div>
            <div className="text-gray-400 font-exo">Servers Served</div>
          </div>
          <div className="glass-card p-6 text-center hover-elevate" data-testid="team-stat-support">
            <div className="text-3xl font-orbitron font-bold text-neon-blue neon-glow">24/7</div>
            <div className="text-gray-400 font-exo">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}