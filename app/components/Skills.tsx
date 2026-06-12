import {
  BarChart2,
  Eye,
  Users,
  Building2,
  TrendingUp,
  Package,
  PieChart,
  Briefcase,
  Clock,
  Star,
  Table2,
  Pen,
  Paintbrush,
  Image,
  Presentation,
} from "lucide-react";

const skills = [
  // Retail & Operations
  { icon: Briefcase,    label: "Retail Operations",           category: "ops" },
  { icon: Eye,          label: "Visual Merchandising",        category: "ops" },
  { icon: Users,        label: "Team Leadership",             category: "ops" },
  { icon: Building2,    label: "Store Openings & Remodels",   category: "ops" },
  { icon: TrendingUp,   label: "KPI Performance",             category: "ops" },
  { icon: Package,      label: "Inventory & Omni Operations", category: "ops" },
  // Tech tools
  { icon: BarChart2,    label: "Power BI",                    category: "tech" },
  { icon: Clock,        label: "Workday",                     category: "tech" },
  { icon: Star,         label: "UKG Pro",                     category: "tech" },
  { icon: PieChart,     label: "Medallia",                    category: "tech" },
  { icon: Table2,       label: "Excel",                       category: "tech" },
  // Creative
  { icon: Pen,          label: "Adobe InDesign",              category: "creative" },
  { icon: Paintbrush,   label: "Adobe Illustrator",           category: "creative" },
  { icon: Image,        label: "Photoshop",                   category: "creative" },
  { icon: Presentation, label: "PowerPoint",                  category: "creative" },
];

const categoryLabel: Record<string, string> = {
  ops:      "Operations & Leadership",
  tech:     "Technology & Analytics",
  creative: "Creative & Presentation",
};

const grouped = Object.entries(
  skills.reduce<Record<string, typeof skills>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {})
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg">
            A diverse skill set spanning retail operations, analytics, and creative tools.
          </p>
        </div>

        <div className="space-y-12">
          {grouped.map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-5">
                {categoryLabel[cat]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="card-hover group bg-[#141414] border border-white/5 hover:border-orange-500/30 rounded-xl p-5 flex flex-col items-center text-center gap-3 cursor-default"
                  >
                    <div className="w-10 h-10 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center transition-colors">
                      <Icon size={19} className="text-orange-500" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
