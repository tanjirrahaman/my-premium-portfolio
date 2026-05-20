'use client';

import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projectsData = [
    { id: 1, title: "High-End Digital Agency Landing Page", desc: "A futuristic agency website design featuring multiple services, animated sections, and a luxury UI crafted for global clients.", image: "/projects/1.png", tags: ["Next.js", "Node.js", "MongoDB"], liveUrl: "#" },
    { id: 2, title: "Doctor Personal Portfolio", desc: "A sleek personal portfolio design showcasing skills, works, and achievements with smooth animations and a premium dark aesthetic.", image: "/projects/2.png", tags: ["React", "Tailwind", "Chart.js"], liveUrl: "#" },
    { id: 3, title: "Futuristic SaaS Dashboard Interface", desc: "A modern analytics dashboard built with a clean dark UI, glassmorphism elements, and real-time data visualization for a seamless user experience.", image: "/projects/3.png", tags: ["WordPress", "PHP", "API"], liveUrl: "#" },
    { id: 4, title: "Luxury E-commerce Shopping Experience", desc: "A high-end online store UI designed with premium product layout, smooth interactions, and a modern checkout flow for better conversions.", image: "/projects/4.png", tags: ["Next.js", "Stripe", "PostgreSQL"], liveUrl: "#" },
    { id: 5, title: "ZSmart Customer Support System UI", desc: "A real-time support dashboard with live chat, ticket management, and analytics designed for efficient customer service operations.", image: "/projects/5.png", tags: ["React", "GSAP", "Vite"], liveUrl: "#" },
    { id: 6, title: "IT Company CEO Personal Portfolio", desc: "A technology entrepreneur and CEO leading innovative IT solutions that empower businesses through software, web platforms, and digital transformation.", image: "/projects/6.png", tags: ["OpenAI", "Python", "React"], liveUrl: "#" }
  ];

  return (
    <section id="projects" className="relative w-full py-24 bg-[#050505] border-t border-white/5">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00f2fe]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="layout-container relative z-10 w-full px-6 md:px-12 mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-xs uppercase text-[#00f2fe] font-semibold tracking-[0.25em] mb-3 block">SELECTED PROJECTS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Engineering Code Into <br />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">High-Impact Architectures.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-white/10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-md text-[9px] font-mono text-gray-400 bg-white/5 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                  <a href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#00f2fe] transition-colors">
                    View <LinkIcon size={12} />
                  </a>
                  <span className="text-[9px] font-mono text-[#9d4edd] font-semibold">// CASE STUDY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}