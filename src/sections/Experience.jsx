'use client';

export default function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Lead Developer & E-commerce Architect",
      company: "RetailBd & Ecomdrive Software",
      desc: "Leading core development for Ecomdrive Software, managing end-to-end e-commerce solutions, and overseeing complex technical support infrastructure for Mobile Accessories Bangladesh."
    },
    {
      year: "2023 - 2025",
      role: "Full-Stack Developer (Remote)",
      company: "Softatech (Netherlands) & Philippines Tech Team",
      desc: "Collaborated in an international environment to deliver scalable web applications. Managed remote workflows and cross-functional technical tasks alongside a dedicated Philippines-based development team."
    },
    {
      year: "2021 - 2024",
      role: "Manager, Support & Web Infrastructure",
      company: "Prothoma Bangladesh",
      desc: "Directed e-commerce development, website maintenance, and customer support strategies. Successfully bridged the gap between technical infrastructure and user experience."
    },
    {
      year: "2020 - 2021",
      role: "Customer Relationship Manager",
      company: "Green Tiger Electric Vehicle Ltd.",
      desc: "Spearheaded customer relationship strategies and operational communications, ensuring high service standards within the burgeoning EV market sector."
    },
    {
      year: "2020 - Present",
      role: "Independent Technical Consultant",
      company: "9+ Personal Clients",
      desc: "Delivering tailored WordPress solutions and high-performance e-commerce builds for diverse global clients, focusing on custom themes, optimization, and seamless store management."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16">
          <span className="text-xs uppercase text-[#9d4edd] font-semibold tracking-[0.25em] mb-3 block">PROFESSIONAL TIMELINE</span>
          <h2 className="text-3xl md:text-5xl font-black text-white">Career Progression</h2>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              {/* টাইমলাইন ডট */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#9d4edd] rounded-full shadow-[0_0_10px_#9d4edd]" />
              
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/[0.04]">
                <span className="text-[#9d4edd] font-mono text-xs font-bold">{exp.year}</span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                <h4 className="text-sm text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}