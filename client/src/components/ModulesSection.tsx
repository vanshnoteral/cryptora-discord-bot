import { Card } from '@/components/ui/card';
import { 
  Shield, 
  Scale, 
  Music, 
  ShieldCheck, 
  UserPlus, 
  Star, 
  MessageSquare,
  Wrench,
  Gift,
  Mic,
  Gamepad2,
  Zap,
  Smile
} from 'lucide-react';

export default function ModulesSection() {
  const mainModules = [
    {
      name: 'Security',
      icon: Shield,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/30',
      description: 'Advanced server protection',
    },
    {
      name: 'Automoderation',
      icon: Scale,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
      description: 'Smart automated moderation',
    },
    {
      name: 'Music',
      icon: Music,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30',
      description: 'High-quality music streaming',
    },
    {
      name: 'Moderation',
      icon: ShieldCheck,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/30',
      description: 'Manual moderation tools',
    },
    {
      name: 'Welcomer',
      icon: UserPlus,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
      description: 'Custom welcome messages',
    },
    {
      name: 'Custom Roles',
      icon: Star,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30',
      description: 'Dynamic role management',
    },
    {
      name: 'Autoresponder',
      icon: MessageSquare,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/30',
      description: 'Automated message responses',
    },
  ];

  const extraModules = [
    { name: 'Utility', icon: Wrench, color: 'text-gray-400' },
    { name: 'Giveaway', icon: Gift, color: 'text-gray-400' },
    { name: 'Voice', icon: Mic, color: 'text-gray-400' },
    { name: 'Games', icon: Gamepad2, color: 'text-gray-400' },
    { name: 'Extra Roles', icon: Zap, color: 'text-gray-400' },
    { name: 'Fun', icon: Smile, color: 'text-gray-400' },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient neon-glow mb-6" data-testid="modules-title">
            Bot Modules
          </h2>
          <div className="h-1 w-24 mx-auto gradient-cyber mb-8" />
          <p className="text-lg text-gray-400 font-exo max-w-2xl mx-auto">
            Comprehensive suite of features designed for complete Discord server management
          </p>
        </div>

        {/* Main modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {mainModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.name}
                className={`glass-card p-6 hover-elevate transition-all duration-300 hover:scale-105 ${module.bgColor} border ${module.borderColor}`}
                data-testid={`module-${module.name.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${module.bgColor} mb-4 border ${module.borderColor}`}>
                  <Icon className={`w-6 h-6 ${module.color}`} />
                </div>
                <h3 className={`text-xl font-orbitron font-bold ${module.color} neon-glow mb-2`}>
                  {module.name}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {module.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Extra modules */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-bold text-gray-300 mb-8" data-testid="extra-modules-title">
            Additional Modules
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {extraModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <div 
                  key={module.name}
                  className="glass-card px-4 py-3 flex items-center space-x-3 hover-elevate transition-all duration-300"
                  data-testid={`extra-module-${module.name.toLowerCase().replace(' ', '-')}`}
                >
                  <Icon className={`w-5 h-5 ${module.color}`} />
                  <span className={`font-exo ${module.color}`}>{module.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}