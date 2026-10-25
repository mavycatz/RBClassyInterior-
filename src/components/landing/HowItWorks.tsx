import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Manage Employees', desc: 'Define roles, departments, and employee details with structure.' },
  { num: '02', title: 'Process Payroll', desc: 'Review components and prepare each payroll run with clarity.' },
  { num: '03', title: 'Generate Payslips', desc: 'Produce payslips and keep the run organized for reference.' },
];

const HowItWorks = () => {
  return (
    <section id="workflow" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">Workflow</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
            A connected path from start to finish
          </h2>
        </motion.div>
        <div className="relative grid lg:grid-cols-3 gap-6">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
            <svg className="w-full" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="url(#line)" strokeWidth="1" />
              <defs>
                <linearGradient id="line" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(239,68,68,0.5)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.1] to-white/[0.02] backdrop-blur-xl p-8 lg:p-9 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/40">{step.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(239,68,68,0.12)]" />
                </div>
                <h3 className="font-heading text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
