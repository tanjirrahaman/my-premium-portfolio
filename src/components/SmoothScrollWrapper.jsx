'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP গ্লোবাল প্লাগইন রেজিস্টার (যাতে প্রজেক্টের যেকোনো জায়গা থেকে ScrollTrigger এক্সেস করা যায়)
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    // ১. ল্যানিস স্মুথ স্ক্রোল কনফিগারেশন
    const lenis = new Lenis({
      duration: 1.4,      // আল্ট্রা প্রিমিয়াম ইনার্শিয়াল স্ক্রোলিং এক্সপেরিয়েন্স
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // ২. GSAP এর সাথে Lenis ইন্টিগ্রেশন (যাতে স্ক্রোল অ্যানিমেশন নিখুঁতভাবে কাজ করে)
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // ক্লিনআপ ফাংশন (মেমোরি লিক বন্ধ করার জন্য)
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}