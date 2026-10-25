import React from 'react';
import { motion } from 'motion/react';
import { Users, Calculator, FileText, BarChart3 } from 'lucide-react';

const items = [
  { icon: Users, title: 'Employee Records', desc: 'Keep profiles, roles, and departments structured in one place.' },
  { icon: Calculator, title: 'Payroll Computation', desc: 'Organize earnings, allowances, deductions, and tax with a consistent flow.' },
  { icon: FileText, title: 'Payslip Output', desc: 'Generate clear payslips designed for review and recordkeeping.' },
  { icon: BarChart3, title: 'Payroll Reporting', desc: 'Track payroll activity with a focused, readable overview.' },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(153,27,27,0.14),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">Capabilities</span>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
                Precision built into every step
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/55 leading-relaxed">
                Focused functionality arranged with intent. No clutter, just what keeps payroll organized.
              </p>
            </motion.div>
          </div>
          <div className="space-y-4">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.9, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.1] to-white/[0.02] backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="relative p-8 lg:p-10 flex flex-col sm:flex-row gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-white mb-2">{item.title}</h3>
                      <p className="text-white/55 leading-relaxed max-w-xl">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
