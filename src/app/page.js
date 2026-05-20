'use client';

import { useState, useEffect } from 'react';
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen w-full bg-[#050505]" />;
  }

  return (
    <div className="w-full relative bg-[#050505] overflow-hidden">
      
      {/* ১. অ্যানিমেটেড হিরো সেকশন */}
      <Hero />

      {/* ২. প্রিমিয়াম এবাউট মি */}
      <About />

      {/* ৩. লাক্সারি সার্ভিস গ্রিড */}
      <Services />

      {/* ৪. মডার্ন ইন্টারেক্টিভ স্কিলস ড্যাশবোর্ড */}
      <Skills />

      {/* ৫. এলিট টেক কোম্পানি লেভেল প্রজেক্ট শোকেস */}
      <Projects />

      {/* ৬. এক্সপেরিয়েন্স সেকশন (কম্পোনেন্ট থেকে আসছে) */}
      <Experience />

      {/* ৭. কন্টাক্ট সেকশন (কম্পোনেন্ট থেকে আসছে) */}
      <Contact />

      {/* ৮. ফুটার */}
      <Footer />

    </div>
  );
}