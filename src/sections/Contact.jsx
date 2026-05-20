'use client';

import { useState } from 'react';
import { Send, Mail, Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        alert('Failed to send message.');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* কন্টাক্ট ইনফো সাইড */}
        <div>
          <span className="text-xs uppercase text-[#00f2fe] font-semibold tracking-[0.25em] mb-3 block"> GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's build something <br /> <span className="text-[#00f2fe]">iconic.</span></h2>
          <p className="text-gray-400 mb-8">Ready to start a new project? Reach out directly via the channels below or send me a message through the form.</p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:tanji@example.com" className="flex items-center gap-3 text-white hover:text-[#00f2fe] transition-colors">
              <Mail size={18} /> tanjirshanto56@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/md-tanjir-rahaman-3a45223a8" className="p-3 bg-white/5 rounded-full hover:bg-[#00f2fe]/20 transition-all text-white"><FaLinkedin size={20} /></a>
              <a href="https://github.com/tanjirrahaman" className="p-3 bg-white/5 rounded-full hover:bg-[#00f2fe]/20 transition-all text-white"><FaGithub size={20} /></a>
              <a href="https://web.facebook.com/profile.php?id=61584234435633" className="p-3 bg-white/5 rounded-full hover:bg-[#00f2fe]/20 transition-all text-white"><FaFacebook size={20} /></a>
              <a href="https://wa.link/zncqss" className="p-3 bg-white/5 rounded-full hover:bg-[#00f2fe]/20 transition-all text-white"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        {/* ফর্ম সাইড (গ্লাস মরফিজম) */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-md">
          {status === 'success' ? (
            <div className="h-[300px] flex flex-col items-center justify-center text-center">
              <CheckCircle2 size={48} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Name" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00f2fe] transition-all" />
              <input name="email" type="email" placeholder="Email" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00f2fe] transition-all" />
              <textarea name="message" placeholder="Message" rows={4} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#00f2fe] transition-all"></textarea>
              
              <button 
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#00f2fe] to-[#9d4edd] text-black font-bold rounded-xl hover:opacity-90 transition-all"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={16} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}