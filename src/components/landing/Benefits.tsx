import React from 'react';
import { motion } from 'motion/react';

const benefits = [
  { title: 'Less manual work', desc: 'Keep tasks structured so routine payroll work stays focused.' },
  { title: 'Organized records', desc: 'Maintain employee and payroll records in a consistent, readable form.' },
  { title: 'Easier review', desc: 'See totals and status at a glance without digging through spreadsheets.' },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">Benefits</span>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
                Clarity over complexity
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/55 leading-relaxed">
                Designed to bring order to payroll without adding unnecessary steps.
              </p>
            </motion.div>
          </div>
          <div className="space-y-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.1] to-white/[0.02] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="p-8 lg:p-10">
                  <h3 className="font-heading text-3xl text-white mb-3">{b.title}</h3>
                  <p className="text-lg text-white/55 leading-relaxed max-w-2xl">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
