import { Award, CheckCircle2 } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  // UPDATE: replace with actual year / credential ID
  year: string;
  badge?: string;
}

// UPDATE: add/remove certifications and tools as needed
const certifications: Cert[] = [
  {
    title: "Google Project Management Certificate",
    issuer: "Google / Coursera",
    year: "2023",
  },
  {
    title: "Power BI Data Analyst",
    issuer: "Microsoft",
    year: "In Progress",
  },
  {
    title: "Excel — Advanced",
    issuer: "Microsoft",
    year: "2022",
  },
  {
    title: "Adobe Creative Suite",
    issuer: "Adobe",
    year: "Proficient",
  },
  {
    title: "Workday HCM",
    issuer: "Workday",
    year: "Enterprise User",
  },
  {
    title: "UKG Pro (Kronos)",
    issuer: "UKG",
    year: "Enterprise User",
  },
  {
    title: "Medallia CX Platform",
    issuer: "Medallia",
    year: "Enterprise User",
  },
];

const tools = [
  "Power BI",
  "Microsoft Excel",
  "Adobe InDesign",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Microsoft PowerPoint",
  "Workday",
  "UKG Pro",
  "Medallia",
  "Google Workspace",
  "Microsoft Teams",
  "Slack",
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tools & Certifications
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg">
            Credentials and platforms I rely on to deliver results every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-6">
              Certifications & Credentials
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="card-hover flex items-start gap-4 bg-[#141414] border border-white/5 hover:border-orange-700/20 rounded-xl p-5"
                >
                  <div className="w-10 h-10 bg-orange-700/10 rounded-xl flex items-center justify-center shrink-0">
                    <Award size={18} className="text-orange-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-orange-600 font-medium shrink-0 bg-orange-700/10 px-2.5 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools proficiency */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-6">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-2.5 bg-[#141414] border border-white/5 rounded-xl px-4 py-3 text-gray-300 text-sm font-medium hover:border-orange-700/20 transition-colors"
                >
                  <CheckCircle2 size={14} className="text-orange-700 shrink-0" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
