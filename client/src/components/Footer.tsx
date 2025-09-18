import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Github, MessageCircle } from 'lucide-react';
import cryptoraLogo from '@assets/21e8412082ea668bd2d5b49e2619fb64_1758208026092.png';

export default function Footer() {
  const botInviteUrl = "https://discord.com/oauth2/authorize?client_id=1324050005467730091";

  return (
    <footer className="relative py-16 px-6 border-t border-neon-cyan/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={cryptoraLogo}
                alt="Cryptora Logo"
                className="w-12 h-12"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))',
                }}
              />
              <span className="text-2xl font-orbitron font-bold text-gradient">
                CRYPTORA
              </span>
            </div>
            <p className="text-gray-400 font-exo leading-relaxed">
              The ultimate all-in-one Discord bot for security, moderation, music, and fun. 
              Trusted by thousands of servers worldwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-neon-cyan neon-glow mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a 
                href={botInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-cyan transition-colors font-exo"
                data-testid="footer-link-invite"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Invite Bot</span>
              </a>
              <a 
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-purple transition-colors font-exo"
                data-testid="footer-link-support"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Support Server</span>
              </a>
              <a 
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors font-exo"
                data-testid="footer-link-vote"
              >
                <Heart className="w-4 h-4" />
                <span>Vote Cryptora</span>
              </a>
            </div>
          </div>

          {/* Team & Credits */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-neon-purple neon-glow mb-6">
              About Devs
            </h3>
            <div className="space-y-3">
              <div className="text-gray-400 font-exo">
                <span className="text-neon-cyan">Bot Created by:</span> Sandeep & Npg
              </div>
              <div className="text-gray-400 font-exo">
                <span className="text-neon-purple">Website by:</span> Vansh
              </div>
              <Button 
                variant="outline"
                size="sm"
                className="mt-4 border-neon-blue text-neon-blue hover:bg-neon-blue/10"
                data-testid="button-about-devs"
              >
                About Developers
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 rounded-lg text-center mb-12">
          <h3 className="text-2xl font-orbitron font-bold text-gradient neon-glow mb-4">
            Ready to Enhance Your Server?
          </h3>
          <p className="text-gray-400 font-exo mb-6 max-w-2xl mx-auto">
            Join thousands of Discord servers using Cryptora for advanced security, 
            moderation, and entertainment features.
          </p>
          <Button 
            size="lg"
            className="px-8 py-4 text-lg font-exo font-semibold bg-neon-cyan text-black hover:bg-neon-cyan/90 neon-border transition-all duration-300 hover:scale-105"
            onClick={() => window.open(botInviteUrl, '_blank')}
            data-testid="footer-cta-invite"
          >
            Add Cryptora Now
          </Button>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neon-cyan/20">
          <div className="flex items-center space-x-2 text-gray-400 font-exo mb-4 md:mb-0">
            <span>Website Made with</span>
            <Heart className="w-4 h-4 text-neon-purple animate-glow-pulse" />
            <span>by Vansh</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-500 font-exo text-sm">
              © 2024 Cryptora Bot. All rights reserved.
            </span>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="text-gray-400 hover:text-neon-cyan transition-colors"
                data-testid="social-discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-neon-purple transition-colors"
                data-testid="social-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-4 left-4">
        <div className="w-8 h-8 border-l-2 border-b-2 border-neon-cyan/30" />
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 border-r-2 border-b-2 border-neon-purple/30" />
      </div>
    </footer>
  );
}