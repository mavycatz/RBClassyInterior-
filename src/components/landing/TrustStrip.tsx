import React from 'react';
import { motion } from 'motion/react';

const items = ['Employee Management', 'Structured Payroll', 'Secure Records', 'Organized Payslips'];

const TrustStrip = () => {
  return (
    <section className="relative border-y border-white/[0.06] py-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-accent/70" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;
