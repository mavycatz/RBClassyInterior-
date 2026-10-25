import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.22),transparent_70%)] blur-[160px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">Ready</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.0]">
            Make every payroll run
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">simpler.</span>
          </h2>
          <p className="mt-6 text-lg text-white/55 max-w-2xl mx-auto">
            Bring structure and clarity to your payroll workflow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="group relative overflow-hidden px-8 py-4 rounded-lg text-sm font-medium text-white">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-[background-position] duration-700" />
              <span className="absolute inset-px rounded-[7px] bg-gradient-to-r from-primary to-accent" />
              <span className="relative flex items-center gap-2">
                Sign In
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
