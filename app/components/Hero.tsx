"use client";

import { ArrowDown, FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-700/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-700/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Availability badge */}
        <div className="animate-fadeIn inline-flex items-center gap-2 bg-orange-700/10 border border-orange-700/30 text-orange-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse" />
          {/* UPDATE: change "Open to Opportunities" to reflect your current status */}
          Open to Opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fadeInUp text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
          {/* UPDATE: your full name */}
          Alexander E.{" "}
          <span className="gradient-text">Vásquez</span>
        </h1>

        {/* Title */}
        <p className="animate-fadeInUp delay-100 text-lg sm:text-xl text-orange-600 font-semibold mb-5 tracking-wide uppercase">
          {/* UPDATE: your professional title */}
          Retail Operations &amp; Visual Merchandising Leader
        </p>

        {/* Tagline */}
        <p className="animate-fadeInUp delay-200 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {/* UPDATE: your short tagline */}
          15+ years of experience driving store performance, visual execution,
          team development, and operational excellence.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeInUp delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#resume"
            className="group flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_24px_rgba(194,65,12,0.3)] hover:shadow-[0_0_32px_rgba(194,65,12,0.45)]"
          >
            <FileText size={17} />
            View Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/20 hover:border-orange-700/60 text-white hover:text-orange-600 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            <Mail size={17} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-orange-700 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
