import { MapPin, Calendar, ChevronRight } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

// UPDATE: edit job details, dates, and achievements as needed
const jobs: Job[] = [
  {
    company: "Old Navy / Gap Inc.",
    role: "Senior Manager / Assistant General Manager",
    period: "2014 – Present",
    location: "United States",
    description:
      "Led store operations and visual merchandising execution across a high-volume Old Navy flagship location, consistently delivering results above plan in a fast-paced, customer-centric retail environment.",
    achievements: [
      "Managed and developed a team of 50+ associates, improving retention and engagement through structured coaching programs",
      "Spearheaded visual merchandising resets and floorset execution across Babies, Girls, Boys, and Mens departments",
      "Improved department-level KPIs by implementing data-driven planning using Power BI and Medallia insights",
      "Partnered with District leadership to support 10+ store openings, remodels, and grand re-openings",
      "Drove omni-channel operational excellence including BOPIS, ship-from-store, and inventory accuracy initiatives",
      "Trained and onboarded new managers on visual standards, Workday, UKG Pro, and compliance procedures",
    ],
  },
  {
    company: "CCN Dominican Republic",
    role: "Regional Visual Merchandising Coordinator",
    period: "2008 – 2013",
    location: "Dominican Republic",
    description:
      "Oversaw visual merchandising strategy and execution across a multi-store retail network in the Dominican Republic, elevating brand standards and driving customer engagement at every touchpoint.",
    achievements: [
      "Developed and enforced brand visual standards across 15+ retail locations in the region",
      "Coordinated seasonal campaign rollouts, window displays, and promotional setups",
      "Collaborated with buying and marketing teams to align in-store experience with brand campaigns",
      "Created training guides and facilitated visual merchandising workshops for store teams",
      "Reduced execution time for floorsets by 30% through improved planning and communication workflows",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <span className="section-accent" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <p className="text-gray-500 mt-3 text-base max-w-lg">
            A proven track record of delivering results in retail leadership and visual strategy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500 via-gray-700 to-transparent" />

          {jobs.map((job, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#0d0d0d] shadow-[0_0_10px_rgba(249,115,22,0.6)]" />

              <div className="card-hover bg-[#141414] border border-white/5 hover:border-orange-500/20 rounded-2xl p-7 ml-4">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-orange-400 font-semibold mt-0.5">{job.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {job.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <ChevronRight
                        size={14}
                        className="text-orange-500 shrink-0 mt-0.5"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
