import { User, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "15+", label: "Years of Experience" },
  { icon: Users,      value: "50+",  label: "Team Members Led" },
  { icon: Award,      value: "10+",  label: "Store Openings" },
  { icon: User,       value: "100%", label: "Customer-First Focus" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
          <div className="space-y-5 text-gray-400 leading-relaxed">
            {/* UPDATE: edit this summary with your actual background */}
            <p className="text-base sm:text-lg">
              I am a seasoned retail operations and visual merchandising leader
              with over{" "}
              <span className="text-white font-semibold">15 years</span> of
              progressive experience in high-volume retail environments. My
              career has been defined by a relentless focus on{" "}
              <span className="text-orange-400 font-medium">
                store performance, visual execution
              </span>
              , and building teams that consistently exceed expectations.
            </p>
            <p>
              Throughout my tenure at Old&nbsp;Navy / Gap&nbsp;Inc. and CCN
              Dominican Republic, I have led cross-functional teams, spearheaded
              store openings and full-scale remodels, and implemented
              merchandising strategies that directly drove{" "}
              <span className="text-white font-semibold">KPI growth</span>{" "}
              across departments including Babies, Girls, Boys, and Mens.
            </p>
            <p>
              I bring a data-informed approach to operations — leveraging tools
              like <span className="text-orange-400 font-medium">Power&nbsp;BI</span>,
              Medallia, and Workday to translate insights into action. My passion
              lies at the intersection of{" "}
              <span className="text-white font-semibold">
                people, process, and brand standards
              </span>
              , creating environments where both teams and customers thrive.
            </p>
            <p>
              Currently seeking challenging leadership roles in retail
              operations, visual merchandising, and remote business management
              where I can deliver measurable impact from day one.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Visual Merchandising",
                "Retail Operations",
                "Team Development",
                "Store Openings",
                "KPI Growth",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="card-hover bg-[#161616] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
