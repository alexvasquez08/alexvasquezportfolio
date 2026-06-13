import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-6 bg-gradient-to-r from-orange-800/10 via-orange-700/5 to-transparent border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left text */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-orange-700/15 border border-orange-700/30 rounded-2xl flex items-center justify-center shrink-0">
              <FileText size={26} className="text-orange-700" />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl sm:text-2xl">
                Download My Resume
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Full work history, skills, and achievements — ready to share.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* UPDATE: replace href with actual resume PDF path, e.g. "/resume.pdf" */}
            <a
              href="/resume.pdf"
              download
              className="group flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(194,65,12,0.25)] hover:shadow-[0_0_30px_rgba(194,65,12,0.4)] text-sm"
            >
              <Download size={16} />
              Download PDF
            </a>
            {/* UPDATE: replace href with Google Drive preview link or PDF viewer */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/15 hover:border-orange-700/50 text-gray-300 hover:text-orange-600 font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            >
              <Eye size={16} />
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
