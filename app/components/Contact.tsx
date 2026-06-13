"use client";

import { useState } from "react";
import { Mail, ExternalLink, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

// UPDATE: fill in your real contact details
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alexvasquez08@gmail.com",
    href: "mailto:alexvasquez08@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/alexander-v-b5a127100",
    href: "https://www.linkedin.com/in/alexander-v-b5a127100",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (000) 000-0000",             // UPDATE: your phone number
    href: "tel:+10000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",                  // UPDATE: your city/state
    href: "#",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UPDATE: wire up your preferred form handler (Formspree, Resend, EmailJS, etc.)
    setSent(true);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg">
            Ready to discuss a leadership opportunity or collaboration? Let&rsquo;s connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#141414] border border-white/5 hover:border-orange-700/30 rounded-xl px-5 py-4 transition-all"
              >
                <div className="w-10 h-10 bg-orange-700/10 group-hover:bg-orange-700/20 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={18} className="text-orange-700" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-orange-600 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          {sent ? (
            <div className="bg-[#141414] border border-orange-700/25 rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle2 size={40} className="text-orange-700" />
              <h3 className="text-white font-bold text-xl">Message Sent!</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-sm text-orange-700 hover:text-orange-600 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#141414] border border-white/5 rounded-2xl p-7 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-[#1a1a1a] border border-white/8 text-gray-300 placeholder-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-700/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-[#1a1a1a] border border-white/8 text-gray-300 placeholder-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-700/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Retail Leadership Opportunity"
                  className="w-full bg-[#1a1a1a] border border-white/8 text-gray-300 placeholder-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-700/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or how I can help..."
                  className="w-full bg-[#1a1a1a] border border-white/8 text-gray-300 placeholder-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-700/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(194,65,12,0.2)] hover:shadow-[0_0_28px_rgba(194,65,12,0.35)]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
