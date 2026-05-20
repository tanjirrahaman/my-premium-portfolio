'use client';

import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      {/* গ্লাস ইফেক্ট লেয়ার */}
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* ব্র্যান্ড সেকশন */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-white tracking-widest uppercase">Tanjir <span className="text-[#00f2fe]">.</span></h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 font-semibold">Digital Architect & Developer</p>
        </div>

        {/* সোশ্যাল আইকনস */}
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/md-tanjir-rahaman-3a45223a8" className="text-gray-400 hover:text-[#00f2fe] transition-all duration-300 hover:-translate-y-1">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/tanjirrahaman" className="text-gray-400 hover:text-[#00f2fe] transition-all duration-300 hover:-translate-y-1">
            <FaGithub size={20} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61584234435633" className="text-gray-400 hover:text-[#00f2fe] transition-all duration-300 hover:-translate-y-1">
            <FaFacebook size={20} />
          </a>
        </div>

        {/* কপিরাইট */}
        <div className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          © 2026 Tanjir. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}