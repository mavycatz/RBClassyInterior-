import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const words = ['Payroll,', 'Without', 'the', 'Complexity.'];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [6, -6]);
  const rotateY = useTransform(springX, [-300, 300], [-6, 6]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.18),rgba(153,27,27,0.12)_40%,transparent_70%)] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0A0A0B] to-transparent" />
      </div>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[140px] lg:pt-[170px] pb-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8 inline-flex items-center gap-2"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(239,68,68,0.12)]" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">RB Payroll System</span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.98] mb-6">
              {words.map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '120%', filter: 'blur(12px)' }}
                    animate={{ y: '0%', filter: 'blur(0px)' }}
                    transition={{ duration: 1.0, delay: 0.12 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`inline-block ${i === 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50' : 'text-white'}`}
                  >
                    {word}&nbsp;
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-xl text-lg sm:text-xl text-white/55 leading-relaxed mb-10"
            >
              A smarter way to manage employees, streamline payroll, and keep every payment organized with precision and clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#showcase" className="group relative overflow-hidden px-7 py-3.5 rounded-lg text-sm font-medium text-white">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-[background-position] duration-700" />
                <span className="absolute inset-px rounded-[7px] bg-gradient-to-r from-primary to-accent" />
                <span className="relative flex items-center gap-2">
                  Explore the Platform
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link to="/login" className="px-7 py-3.5 rounded-lg text-sm font-medium text-white/80 border border-white/12 hover:text-white hover:border-white/30 transition-colors text-center">
                Sign In
              </Link>
            </motion.div>
          </div>

          <div className="relative perspective-[1400px] hidden lg:block">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-transparent backdrop-blur-2xl shadow-[0_80px_160px_-80px_rgba(239,68,68,0.45)] overflow-hidden"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Overview</p>
                    <p className="text-white/90 mt-1">October Payroll</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-300/80">In Review</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 px-6 py-5">
                  {[{label:'Net Payroll',value:'$13,692.50'},{label:'Employees',value:'5'},{label:'Pending',value:'1'}].map((item,i)=>(
                    <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i*0.08 }}>
                      <p className="text-xs text-white/40">{item.label}</p>
                      <p className="mt-2 text-xl font-heading text-white">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                      <p className="text-sm text-white/70">Team</p>
                      <p className="text-xs text-white/40">Status</p>
                    </div>
                    {['John Doe','Jane Smith','Mike Johnson'].map((name,idx)=>(
                      <motion.div key={name} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + idx*0.08 }} className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04] last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                          <div>
                            <p className="text-sm text-white/90">{name}</p>
                            <p className="text-xs text-white/40">Employee</p>
                          </div>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 16, 0], rotate: [0, 1, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} className="absolute -top-10 -right-8 rounded-xl border border-white/[0.1] bg-gradient-to-br from-white/[0.18] to-white/[0.06] backdrop-blur-xl px-4 py-3 shadow-[0_60px_120px_-60px_rgba(239,68,68,0.6)]" style={{ transform: 'translateZ(90px)' }}>
                <p className="text-xs text-white/40">This run</p>
                <p className="text-lg font-heading text-white mt-1">$13.7k</p>
              </motion.div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }} className="absolute -bottom-10 -left-10 rounded-xl border border-white/[0.1] bg-white/[0.08] backdrop-blur-xl px-4 py-3" style={{ transform: 'translateZ(80px)' }}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-sm text-white/80">3 payslips ready</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
