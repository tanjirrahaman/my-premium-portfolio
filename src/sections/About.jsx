'use client';

import { useEffect, useState, useRef } from 'react';
import { Briefcase, Trophy, Users, CheckCircle2 } from 'lucide-react';

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let totalMiliseconds = duration * 1000;
          let incrementTime = Math.floor(totalMiliseconds / end);
          
          let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={countRef}>{count}</span>;
}

export default function About() {
  const skills = [
    { name: 'React / Next.js', category: 'Frontend' },
    { name: 'Node.js / Express', category: 'Backend' },
    { name: 'MongoDB / PostgreSQL', category: 'Database' },
    { name: 'Tailwind CSS / GSAP', category: 'Design' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'Git / GitHub DevOps', category: 'Tools' },
  ];

  const stats = [
    { id: 1, icon: <Briefcase className="text-neon-cyan" size={22} />, number: '6', label: 'Years Experience', suffix: 'Y+' },
    { id: 2, icon: <Trophy className="text-neon-purple" size={22} />, number: '40', label: 'Projects Delivered', suffix: '+' },
    { id: 3, icon: <Users className="text-neon-cyan" size={22} />, number: '15', label: 'Happy Clients', suffix: '+' },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-[#050505] border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="layout-container relative z-10 w-full px-6 md:px-12 mx-auto max-w-7xl">
        <div className="mb-16 text-left">
          <span className="text-xs uppercase text-neon-cyan font-semibold tracking-[0.25em] mb-3 block">ABOUT ME</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Crafting Digital Experiences <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">With Code & Imagination.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 text-base text-gray-400 leading-relaxed font-light">
            <p>
I am a versatile digital professional specializing in web development, WordPress solutions, e-commerce support, customer service management, and email marketing. I focus on building clean, responsive, and high-performing digital experiences that blend strong design with real business impact. With a problem-solving mindset and attention to detail, I help brands grow through both technical expertise and smart digital strategy.            </p>
            
            <div className="mt-6">
              <h3 className="text-white font-bold text-lg mb-4 tracking-wide uppercase text-xs text-neon-cyan">// Core Arsenal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:border-white/10 transition-colors">
                    <CheckCircle2 size={16} className="text-neon-cyan shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono uppercase">{skill.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            {stats.map((stat) => (
              <div key={stat.id} className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center gap-5 relative group overflow-hidden hover:border-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {stat.icon}
                </div>
                <div className="flex flex-col relative z-10">
                  <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    <AnimatedCounter value={stat.number} />
                    <span className="text-neon-cyan">{stat.suffix}</span>
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mt-1">{stat.label}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 p-5 border border-dashed border-white/10 rounded-2xl text-left bg-transparent">
              <p className="text-xs text-gray-500 font-mono leading-relaxed">
                <span className="text-neon-purple font-bold">// CURRENT STATUS:</span> Available for remote contracts, full-time positions, and architectural consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}