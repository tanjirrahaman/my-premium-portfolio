'use client';

import Image from 'next/image';
import { Terminal, ArrowUpRight, Code, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';

// গ্লাস মরফিজম পার্টিকেল সিস্টেম কম্পোনেন্ট (পরের এরর এড়াতে এক ফাইলে রাখা হলো)
const PremiumParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles = [];
    const particleCount = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 0.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = Math.random() > 0.5 ? '#00f2fe' : '#9d4edd'; // Cyan or Purple
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.random() > 0.5 ? Math.PI * 2 : 0);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // ফ্লোটিং মোশন
        this.y -= Math.random() * 0.1 + 0.05;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.x < -10) this.x = canvas.width + 10;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] pt-28 overflow-hidden">
      
      {/* ১. কাস্টম পার্টিকেল সিস্টেম ব্যাকগ্রাউন্ড (Turbopack Safe) */}
      <PremiumParticles />

      {/* ২. অরবিটাল লাইট ডেকোরেশন গ্রিড ও গ্লো */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full blur-[160px] pointer-events-none animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#9d4edd]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="layout-container relative z-10 w-full px-6 md:px-12 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* --- LEFT SIDE: PREMIUM TEXT & ACTIONS --- */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* প্রফেশনাল এভেলেবিলিটি স্ট্যাটাস ব্যাজ */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-xl mb-10 group hover:border-[#00f2fe]/40 transition-all duration-500 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe] relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2fe]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 group-hover:text-white font-medium transition-colors">
              Available For High-Scale Digital Architecture
            </span>
          </div>

          {/* মেগা এজেন্সি টাইটেল */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.05] mb-8">
            Architecting Elite <br />
            <span className="bg-gradient-to-r from-[#00f2fe] via-white to-[#9d4edd] bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h1>

          {/* প্রফেশনাল সাব-ডেসক্রিপশন */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl lg:max-w-none mx-auto lg:mx-0 font-light leading-relaxed mb-14">
            I bridge the gap between heavy-duty engineering workflows and fluid aesthetic perfection. Specializing in high-fidelity full-stack products engineered for modern scale.
          </p>

          {/* ইন্টারঅ্যাক্টিভ অ্যাকশন বাটনস */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 max-w-sm sm:max-w-none w-full">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-9 py-4.5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] text-black font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_40px_rgba(0,242,254,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore Projects
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-9 py-4.5 rounded-full bg-white/[0.02] border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Terminal size={15} className="text-[#00f2fe]" />
              Initiate Session
            </a>
          </div>


        </div>

       {/* --- RIGHT SIDE: PREMIUM PHOTO WIDGET --- */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
          
          {/* অরবিটাল কন্টেইনার */}
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] flex items-center justify-center">
            
            {/* আপনার ফটো - ফুল সাইজে */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.2)] group-hover:scale-[1.02] transition-transform duration-700 ease-out">
              <Image 
                src="/my-photo.jpg" 
                alt="Md Tanjir Rahaman | Full Stack Developer" 
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 ease-out" 
                priority
              />
            </div>

            {/* ডেকোরেটিভ অরবিটস */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-[#00f2fe]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-[#9d4edd]/20 animate-[spin_80s_linear_infinite_reverse]" />
            </div>

            {/* নিয়ন গ্লো ইফেক্টস */}
            <div className="absolute w-[250px] h-[250px] bg-[#00f2fe]/10 rounded-full blur-[80px] pointer-events-none z-0" />
            
            {/* প্রিমিয়াম ট্যাগলাইন উইজেট */}
            <div className="absolute bottom-[-10px] z-20 px-6 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-2xl flex flex-col items-center shadow-2xl">
               <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Md Tanjir Rahaman</span>
               <span className="text-[9px] font-mono text-[#00f2fe] uppercase tracking-widest mt-0.5">
                  Full Stack • AI Solutions • Growth Architect
               </span>
            </div>
          </div>

          {/* ডেকোরেশন */}
          <div className="absolute -top-10 -right-10 w-[100px] h-[100px] border-[0.5px] border-dashed border-white/5 rounded-full opacity-50 z-0 animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-[120px] h-[120px] border-[0.5px] border-dashed border-white/5 rounded-full opacity-40 z-0 animate-pulse" />
        </div>
      </div>
    </section>
  );
}