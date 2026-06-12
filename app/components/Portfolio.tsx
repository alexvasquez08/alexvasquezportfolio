import { Eye, Settings, Users, BarChart2, Building2, ArrowUpRight } from "lucide-react";
import VMGallery from "./VMGallery";

interface Project {
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

// UPDATE: replace with real project descriptions, links, or images
const projects: Project[] = [
  {
    icon: Eye,
    title: "Retail Visual Merchandising",
    category: "Visual Strategy",
    description:
      "Designed and executed large-scale floorset and seasonal merchandising plans for a high-volume flagship store, improving product visibility and sell-through rates across all departments.",
    tags: ["Floorsets", "Brand Standards", "Seasonal Campaigns", "Window Displays"],
  },
  {
    icon: Settings,
    title: "Store Operations Improvement",
    category: "Operations",
    description:
      "Led a comprehensive operational audit and process overhaul that reduced execution gaps, increased compliance scores, and improved overall store profitability metrics.",
    tags: ["Process Optimization", "Compliance", "Audit", "SOP Development"],
  },
  {
    icon: Users,
    title: "Team Training & Development",
    category: "People Leadership",
    description:
      "Built and delivered an internal training curriculum for associates and managers on visual standards, omni-channel processes, and customer experience best practices.",
    tags: ["Coaching", "Onboarding", "Visual Standards", "Customer Experience"],
  },
  {
    icon: BarChart2,
    title: "KPI Performance Tracking",
    category: "Analytics",
    description:
      "Developed a Power BI dashboard framework to monitor department-level KPIs in real time, enabling faster decision-making and proactive performance intervention.",
    tags: ["Power BI", "KPIs", "Reporting", "Data Analysis"],
  },
  {
    icon: Building2,
    title: "New Store Openings & Remodels",
    category: "Project Management",
    description:
      "Played a key role in 10+ store opening and remodel projects — coordinating visual setup, fixture placement, team scheduling, and operational readiness from pre-open through grand opening.",
    tags: ["Project Management", "Store Openings", "Remodels", "Coordination"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Portfolio & Projects
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg">
            Key initiatives and projects that demonstrate impact, leadership, and executional excellence.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="card-hover group bg-[#141414] border border-white/5 hover:border-orange-500/25 rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              >
                {/* Icon + category */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center transition-colors">
                    <Icon size={20} className="text-orange-500" />
                  </div>
                  <span className="text-xs text-gray-600 uppercase tracking-wider font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-white/4 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bg-[#141414] border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
            <ArrowUpRight size={24} className="text-orange-500/40" />
            <p className="text-gray-600 text-sm">
              {/* UPDATE: link to case studies, Behance, LinkedIn, etc. */}
              More case studies coming soon
            </p>
          </div>
        </div>

        {/* Visual Merchandising Photo Gallery */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Visual Merchandising Gallery
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Real in-store execution — click any photo to view full size.
            </p>
          </div>
          <VMGallery />
        </div>
      </div>
    </section>
  );
}
