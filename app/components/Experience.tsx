import { MapPin, Calendar, ChevronRight } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const jobs: Job[] = [
  {
    company: "Old Navy — Gap Inc.",
    role: "Assistant General Manager",
    period: "2022 – Present",
    location: "United States",
    description:
      "Lead a high-volume Old Navy store through complex operational demands, driving team performance, customer satisfaction, and measurable KPI outcomes in a fast-paced retail environment.",
    achievements: [
      "Onboard, train, and coach 40+ team members to quickly adopt internal systems and workflows, improving ramp-up time and overall productivity",
      "Build strong customer relationships through proactive engagement and personalized support, strengthening loyalty and repeat purchasing behaviors",
      "Analyze customer feedback data using Medallia to uncover friction points and recommend improvements that enhance customer satisfaction",
      "Leverage Power BI insights to guide team performance, support decision-making, and track operational KPIs aligned with customer outcomes",
      "Collaborate cross-functionally with visual, marketing, and merchandising partners to improve customer experience and product accessibility",
      "Lead change management initiatives, maintaining performance during shifting priorities and organizational restructuring",
    ],
  },
  {
    company: "Centro Cuesta Nacional (CCN) — Dominican Republic",
    role: "Visual Merchandising Manager",
    period: "Aug 2022 – Jul 2025",
    location: "Dominican Republic",
    description:
      "Served as strategic visual merchandising partner across a 15+ location retail network, connecting HQ standards with regional execution to elevate the customer experience across all touchpoints.",
    achievements: [
      "Served as strategic partner for 15+ locations, enabling store teams to implement visual standards that improved customer navigation and adoption of new product lines",
      "Acted as primary point of contact between HQ and regional teams, ensuring clarity, timely communication, and consistent execution that strengthened customer experience",
      "Partnered cross-functionally with purchasing managers, creative leadership, and operations teams to launch new store expansions and renovations, reducing operational disruption",
      "Collaborated closely with stakeholders to collect feedback, identify issues early, and coordinate resolutions — improving store readiness and accessibility for customers",
      "Developed enablement materials and guides that standardized best practices across the region",
    ],
  },
  {
    company: "Aéropostale — Colorado",
    role: "Store Manager",
    period: "Jan 2013 – May 2015",
    location: "Colorado, USA",
    description:
      "Managed full store operations and team development at a high-volume Aéropostale location, consistently meeting daily revenue goals through data-driven decision-making and a customer-first culture.",
    achievements: [
      "Drove customer satisfaction and repeat business through personalized guidance and consistent issue resolution",
      "Analyzed customer performance data (conversion, sales per traffic, markdown sell-through, UPT) to identify opportunities for engagement and product optimization",
      "Coached team members on product knowledge and communication, improving customer onboarding to new collections and styles",
      "Implemented feedback-driven improvements, consistently reaching daily revenue goals in a high-volume retail environment",
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
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-700 via-gray-700 to-transparent" />

          {jobs.map((job, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1.5 w-4 h-4 bg-orange-700 rounded-full border-2 border-[#0d0d0d] shadow-[0_0_10px_rgba(194,65,12,0.6)]" />

              <div className="card-hover bg-[#141414] border border-white/5 hover:border-orange-700/20 rounded-2xl p-7 ml-4">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      {job.role}
                    </h3>
                    <p className="text-orange-600 font-semibold mt-0.5">{job.company}</p>
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
                        className="text-orange-700 shrink-0 mt-0.5"
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
