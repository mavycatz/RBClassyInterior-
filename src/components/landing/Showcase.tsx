import React from 'react';
import { motion } from 'motion/react';

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,27,27,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">Product View</span>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.02]">
            An interface built for decision making
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/55">
            Layered panels, readable data, and focused actions — presented clearly for payroll work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0 }}
          className="relative"
        >
          <div className="absolute -inset-x-10 -top-10 h-[60%] bg-gradient-to-b from-primary/18 to-transparent blur-[120px]" />
          <div className="relative rounded-[28px] border border-white/[0.09] bg-gradient-to-br from-white/[0.14] via-white/[0.06] to-transparent backdrop-blur-2xl shadow-[0_120px_200px_-120px_rgba(239,68,68,0.5)] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-6 lg:px-10 py-6 border-b border-white/[0.06]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Dashboard</p>
                <p className="mt-2 text-white/90 text-lg">Payroll Run • October 2026</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span>Demo data</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Monthly view</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 p-6 lg:p-10">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  {[{k:'Net Payroll',v:'$13,692.50'},{k:'Employees',v:'5'},{k:'Pending',v:'1'}].map((x,i)=>(
                    <motion.div key={x.k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i*0.08 }} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                      <p className="text-xs text-white/40">{x.k}</p>
                      <p className="mt-3 text-2xl font-heading text-white">{x.v}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                    <p className="text-sm text-white/80">Payroll History</p>
                    <p className="text-xs text-white/40">Recent</p>
                  </div>
                  {[{p:'October 2026',s:'3 processed • 1 pending'},{p:'September 2026',s:'5 processed'},{p:'August 2026',s:'5 processed'}].map((row,idx)=>(
                    <div key={row.p} className="flex items-center justify-between px-6 py-4 border-b border-white/[0.04] last:border-b-0">
                      <p className="text-white/90">{row.p}</p>
                      <p className="text-sm text-white/40">{row.s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-sm text-white/80">Salary Breakdown</p>
                    <p className="text-xs text-white/40">Totals</p>
                  </div>
                  <div className="space-y-3">
                    {[{l:'Basic Salary',v:'$26,100'},{l:'Overtime',v:'$850'},{l:'Allowances',v:'$750'},{l:'Deductions',v:'$2,000'},{l:'Tax',v:'$2,407.5'}].map((x,i)=>(
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-white/50">{x.l}</span>
                        <span className="text-sm text-white/90">{x.v}</span>
                      </div>
                    ))}
                    <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-white/80">Net Pay</span>
                      <span className="text-lg font-heading text-white">$24,342.5</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-primary/25 to-transparent p-6">
                  <p className="text-sm text-white/80 mb-2">Payslips</p>
                  <p className="text-3xl font-heading text-white">3 ready</p>
                  <p className="mt-2 text-sm text-white/50">Awaiting review and distribution</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
