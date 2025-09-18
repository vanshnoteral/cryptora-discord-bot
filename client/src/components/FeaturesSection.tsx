import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Terminal, Command, Bot } from 'lucide-react';

export default function FeaturesSection() {
  const [typedText, setTypedText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  
  const commands = [
    '&help security',
    '&ban @user reason',
    '&play lofi hip hop',
    '&giveaway create',
    '&automod setup'
  ];

  const features = [
    {
      title: '431 Commands',
      description: 'Extensive command library for every need',
      icon: Command,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10',
      borderColor: 'border-neon-cyan/30',
    },
    {
      title: '92 Slash Commands',
      description: 'Modern Discord slash command support',
      icon: Terminal,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
    },
    {
      title: 'All-in-One Bot',
      description: 'Everything you need in one powerful bot',
      icon: Bot,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30',
    },
  ];

  useEffect(() => {
    const command = commands[currentCommand];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= command.length) {
        setTypedText(command.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCommand]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-gradient neon-glow mb-6" data-testid="features-title">
            Features
          </h2>
          <div className="h-1 w-24 mx-auto gradient-cyber mb-8" />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className={`glass-card p-8 text-center hover-elevate transition-all duration-300 hover:scale-105 ${feature.bgColor} border ${feature.borderColor}`}
                data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${feature.bgColor} mb-6 border ${feature.borderColor}`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-3xl font-orbitron font-bold ${feature.color} neon-glow mb-4`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-exo">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Command demo */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-orbitron font-bold text-center text-gray-300 mb-8" data-testid="command-demo-title">
            Command Preview
          </h3>
          <div className="glass-card p-6 rounded-lg border border-neon-cyan/30">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-gray-400 font-mono text-sm ml-4">Terminal</span>
            </div>
            <div className="font-mono text-neon-cyan" data-testid="command-terminal">
              <span className="text-neon-purple">cryptora@discord:~$</span>
              <span className="ml-2">
                {typedText}
                <span className="typing-animation">|</span>
              </span>
            </div>
          </div>
          <p className="text-center text-gray-400 font-exo text-sm mt-4">
            Try any command with <span className="text-neon-cyan font-semibold">&help &lt;command&gt;</span>
          </p>
        </div>
      </div>
    </section>
  );
}