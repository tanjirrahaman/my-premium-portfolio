'use client';

import { useState } from 'react';
import { Layout, Server, Globe, Mail, Headphones, Terminal, Bot, PenTool } from 'lucide-react';

export default function Skills() {
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <Layout size={18} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={18} /> },
    { id: 'cms', name: 'WordPress', icon: <Globe size={18} /> },
    { id: 'ai', name: 'AI & Tools', icon: <Bot size={18} /> }, // নতুন ক্যাটাগরি
    { id: 'content', name: 'Content', icon: <PenTool size={18} /> }, // নতুন ক্যাটাগরি
    { id: 'support', name: 'Support', icon: <Headphones size={18} /> },
  ];

  const skillsData = {
    frontend: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'GSAP / Framer Motion', level: 80 },
      { name: 'HTML5 / CSS3', level: 98 },
    ],
    backend: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL / SQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase', level: 82 },
    ],
    cms: [
      { name: 'Custom Theme Dev', level: 90 },
      { name: 'Elementor / Divi', level: 95 },
      { name: 'WooCommerce', level: 88 },
      { name: 'LMS / Membership', level: 85 },
      { name: 'ACF / Custom Post Types', level: 80 },
    ],
    ai: [
      { name: 'Prompt Engineering', level: 95 },
      { name: 'AI Workflow Automation', level: 90 },
      { name: 'Midjourney / DALL-E', level: 88 },
      { name: 'LLM Integration', level: 85 },
      { name: 'AI Agent Setup', level: 82 },
    ],
    content: [
      { name: 'Copywriting / SEO', level: 92 },
      { name: 'Video Scripting', level: 88 },
      { name: 'Content Strategy', level: 85 },
      { name: 'Promotional Design', level: 90 },
      { name: 'Social Media Management', level: 85 },
    ],
    support: [
      { name: 'Zendesk / Intercom', level: 88 },
      { name: 'Live Chat Systems', level: 92 },
      { name: 'Ticketing Workflow', level: 85 },
      { name: 'Technical QA', level: 80 },
      { name: 'Remote Resolution', level: 82 },
    ],
  };

  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-[#050505] border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="layout-container relative z-10 w-full px-6 md:px-12 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase text-[#00f2fe] font-semibold tracking-[0.25em] mb-3 block">TECHNICAL ARSENAL</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Mastering The Digital <br /> 
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] bg-clip-text text-transparent">Tech & AI Ecosystem.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-white/[0.03] border border-white/10 rounded-full w-fit mx-auto backdrop-blur-xl relative z-20">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 z-10 ${
                  isActive 
                    ? 'text-black bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] shadow-[0_0_15px_rgba(0,242,254,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="bg-white/[0.01] p-8 md:p-12 rounded-[2rem] border border-white/5 backdrop-blur-md min-h-[350px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {skillsData[activeTab].map((skill, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                    <Terminal size={14} className="text-[#00f2fe] opacity-75" />
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#9d4edd] font-bold">{skill.level}%</span>
                </div>
                
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] rounded-full relative transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}