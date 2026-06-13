import { Mail, ExternalLink, GitFork } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio",  href: "#portfolio" },
  { label: "Tools",      href: "#tools" },
  { label: "Contact",    href: "#contact" },
];

// UPDATE: replace social hrefs with real URLs
const socials = [
  { icon: Mail,     href: "mailto:alexvasquez08@gmail.com",        label: "Email" },
  { icon: ExternalLink, href: "https://www.linkedin.com/in/alexander-v-b5a127100", label: "LinkedIn" },
  { icon: GitFork,      href: "https://github.com/alexvasquez",        label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="text-white font-bold text-xl tracking-tight hover:text-orange-700 transition-colors"
            >
              AV<span className="text-orange-700">.</span>
            </a>
            <p className="text-gray-600 text-xs mt-1.5 max-w-xs">
              {/* UPDATE: your short tagline / copyright year */}
              Retail Operations &amp; Visual Merchandising Leader
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-orange-700 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-orange-700/15 hover:text-orange-700 text-gray-500 flex items-center justify-center transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-700 text-xs">
          © {new Date().getFullYear()} Alexander E. Vásquez. All rights reserved. &nbsp;·&nbsp; Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
