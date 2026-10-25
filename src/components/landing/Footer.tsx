import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-md opacity-30" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">RB</span>
              </div>
            </div>
            <span className="text-white/90 font-heading">RB Payroll System</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#features" className="hover:text-white/70 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-white/70 transition-colors">Showcase</a>
            <a href="#workflow" className="hover:text-white/70 transition-colors">Workflow</a>
            <a href="#benefits" className="hover:text-white/70 transition-colors">Benefits</a>
          </div>
          <p className="text-sm text-white/30">© 2026 RB Payroll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
