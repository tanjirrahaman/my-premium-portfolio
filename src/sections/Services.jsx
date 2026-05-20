'use client';

import { Code2, ShoppingBag, Headset, ArrowUpRight, Globe, Bot, Mic2 } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      id: 1,
      icon: <Code2 className="text-[#00f2fe] shrink-0" size={28} />,
      title: "Full-Stack Engineering",
      desc: "Developing high-performance, scalable web architectures. From complex MERN stack applications to custom API integrations, I build for durability.",
      tag: "SYSTEM // ARCHITECTURE"
    },
    {
      id: 2,
      icon: <Bot className="text-[#9d4edd] shrink-0" size={28} />,
      title: "AI-Powered Solutions",
      desc: "Leveraging Prompt Engineering & AI tools to automate content creation, image generation, and intelligent workflow optimization to maximize output efficiency.",
      tag: "AI // AUTOMATION"
    },
    {
      id: 3,
      icon: <ShoppingBag className="text-[#00f2fe] shrink-0" size={28} />,
      title: "E-commerce Ecosystems",
      desc: "Engineered digital storefronts with secure payment conduits, automated inventory logic, and high-conversion UI/UX pipelines.",
      tag: "COMMERCE // SCALE"
    },
    {
      id: 4,
      icon: <Globe className="text-[#9d4edd] shrink-0" size={28} />,
      title: "Headless CMS Solutions",
      desc: "Deploying decoupled WordPress architectures for ultra-fast loading, granular dashboard control, and enterprise-grade SEO performance.",
      tag: "WORDPRESS // CMS"
    },
    {
      id: 5,
      icon: <Mic2 className="text-[#00f2fe] shrink-0" size={28} />,
      title: "Promotional Media & Content",
      desc: "Creating high-fidelity video content and acting as a Brand Ambassador via live-streaming and interactive product advocacy to foster direct community trust.",
      tag: "MEDIA // ADVOCACY"
    },
    {
      id: 6,
      icon: <Headset className="text-[#9d4edd] shrink-0" size={28} />,
      title: "Operations & Support",
      desc: "Providing 24/7 technical oversight and high-touch support infrastructure to ensure seamless end-to-end user journeys.",
      tag: "SLA // OPS"
    }
  ];

  return (
    <section id="services" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 bg-[#050505] border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00f2fe]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-[#9d4edd]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="layout-container relative z-10 w-full px-6 md:px-12 mx-auto max-w-7xl">
        <div className="mb-16 text-left">
          <span className="text-xs uppercase text-[#9d4edd] font-semibold tracking-[0.25em] mb-3 block">AVILABLE SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            High-Impact Solutions <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Engineered For The AI Era.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent relative group overflow-hidden flex flex-col justify-between cursor-pointer min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:border-white/10 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/5 via-transparent to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:scale-105 transition-all relative z-10">
                    {service.icon}
                  </div>
                  <ArrowUpRight size={18} className="text-gray-600 group-hover:text-[#00f2fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-[#00f2fe] transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{service.desc}</p>
              </div>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">{service.tag}</span>
                <span className="text-[11px] font-mono text-[#9d4edd] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">// ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}