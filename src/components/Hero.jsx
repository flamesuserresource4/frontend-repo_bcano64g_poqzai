import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download, Mail } from 'lucide-react';

export default function Hero() {
  const handleDownload = () => {
    // Replace with actual resume URL if available
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <Rocket size={14} /> Personal Talent Showcase SaaS
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Hi, I’m Sai — building at the edge of robotics, electronics, and the web.
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          Explore my projects, quantified skills, and milestones. Assess fit fast and reach out when you’re ready.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Download size={16} /> Download Resume
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>
    </section>
  );
}
