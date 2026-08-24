import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  FileText,
  Database,
  Cpu,
  BarChart3,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 256 256" fill="currentColor">
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

export default function PremiumPortfolio() {
  const [activeTab, setActiveTab] = useState<'ai' | 'data' | 'bi'>('ai');

  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen text-black antialiased selection:bg-black selection:text-white">

      {/* Dynamic Loop Keyframes for FinTech Marquee Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .tech-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .tech-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]/80 backdrop-blur-md border-b border-black/5 px-6 py-4">
        <div className="max-w-[88rem] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <LogoIcon className="w-6 h-6 text-black transition-transform duration-500 group-hover:rotate-180" />
            <span className="text-xl font-semibold tracking-tighter">BAO TIN LUONG</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#expertise" className="hover:text-black transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-black transition-colors">Selected Work</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Let's talk</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen pt-28 pb-12 px-6 flex flex-col justify-between max-w-[88rem] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">

          {/* Main Hook Headline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Data Analyst & AI roles
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]" style={{ letterSpacing: '-0.05em' }}>
              Turning Data.<br />
              Into <span className="text-neutral-400">Decisions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Hi, I'm a Melbourne-based Data Analyst focused on commercial reporting, data quality, and analytics workflows. My projects cover BI dashboards, Python pipelines, public data analysis, and stakeholder-ready executive summaries.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="bg-black text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-3 group hover:bg-neutral-800 transition-all">
                <span>Explore Selected Works</span>
                <div className="bg-white rounded-full p-1 text-black group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
              <button className="border border-black/10 bg-white hover:bg-neutral-50 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all">
                <FileText className="w-4 h-4 text-neutral-500" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* FinTech Aesthetic Visual Column */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="w-full h-[400px] bg-[#2B2644] rounded-2xl p-8 flex flex-col justify-between shadow-xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="flex justify-between items-start relative z-10">
                <LogoIcon className="w-8 h-8 opacity-40 text-white" />
                <span className="text-xs uppercase tracking-widest font-mono text-white/40">SYSTEM STATUS: ACTIVE</span>
              </div>
              <div className="space-y-2 relative z-10">
                <div className="text-xs font-mono text-indigo-300">FEATURED PORTFOLIO</div>
                <div className="text-3xl font-bold tracking-tight">BI, Analytics, and Data Products</div>
                <p className="text-white/60 text-xs font-normal">
                  Main case studies across MacroBrief, Student Insights, and ICMRA Strategic Analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Tech Marquee Loop */}
        <div className="w-full border-y border-black/5 py-4 overflow-hidden mt-12 bg-white/40 backdrop-blur-sm rounded-xl">
          <div className="tech-marquee-track">
            {['Python', 'SQL', 'BigQuery', 'Pandas', 'Looker Studio', 'Power BI', 'Excel', 'FastAPI', 'Data Quality'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 mx-12 shrink-0">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500 font-mono">{tech}</span>
              </div>
            ))}
            {/* Duplicated for seamless rendering */}
            {['Python', 'SQL', 'BigQuery', 'Pandas', 'Looker Studio', 'Power BI', 'Excel', 'FastAPI', 'Data Quality'].map((tech, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 mx-12 shrink-0">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-sm font-semibold uppercase tracking-wider text-neutral-500 font-mono">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE / SKILLS AREA ================= */}
      <section id="expertise" className="bg-white border-y border-black/5 py-24 px-6 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-4 space-y-4">
            <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest block">Functional Capability</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Core Stack & Ecosystem</h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              A balanced approach to engineering. I structure workflows across three core spectrums to deliver clean, production-ready systems.
            </p>
            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => setActiveTab('ai')}
                className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium flex items-center justify-between ${activeTab === 'ai' ? 'bg-black text-white' : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'}`}
              >
                <div className="flex items-center gap-3">
                  <Cpu className="w-4 h-4" />
                  <span>AI Validation & Automation</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium flex items-center justify-between ${activeTab === 'data' ? 'bg-black text-white' : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'}`}
              >
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4" />
                  <span>Data Engineering & Modeling</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
              <button
                onClick={() => setActiveTab('bi')}
                className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium flex items-center justify-between ${activeTab === 'bi' ? 'bg-black text-white' : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'}`}
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4" />
                  <span>BI Architecture & Metrics</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#F5F5F5] rounded-2xl p-8 min-h-[300px] flex flex-col justify-between border border-black/5">
            {activeTab === 'ai' && (
              <div className="space-y-6">
                <div className="bg-black text-white p-2.5 rounded-lg w-fit"><Cpu className="w-5 h-5" /></div>
                <h3 className="text-2xl font-bold tracking-tight">AI Quality Assurance</h3>
                <p className="text-neutral-600 leading-relaxed text-base max-w-2xl">
                  Building test datasets, documenting model-output issues, and using Python automation to make financial and insurance AI validation more repeatable.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'QA Automation', 'NLP', 'Data Validation', '200+ Q&A Pairs'].map((s) => (
                    <span key={s} className="bg-white border border-black/5 px-3 py-1 rounded-md text-xs font-mono font-semibold text-neutral-600">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'data' && (
              <div className="space-y-6">
                <div className="bg-black text-white p-2.5 rounded-lg w-fit"><Database className="w-5 h-5" /></div>
                <h3 className="text-2xl font-bold tracking-tight">Scalable Data Pipelines</h3>
                <p className="text-neutral-600 leading-relaxed text-base max-w-2xl">
                  Using Python, SQL, and structured validation to transform raw files and APIs into reusable facts, dimensions, marts, and reporting-ready datasets.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL', 'BigQuery SQL'].map((s) => (
                    <span key={s} className="bg-white border border-black/5 px-3 py-1 rounded-md text-xs font-mono font-semibold text-neutral-600">{s}</span>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'bi' && (
              <div className="space-y-6">
                <div className="bg-black text-white p-2.5 rounded-lg w-fit"><BarChart3 className="w-5 h-5" /></div>
                <h3 className="text-2xl font-bold tracking-tight">Business Intelligence Analytics</h3>
                <p className="text-neutral-600 leading-relaxed text-base max-w-2xl">
                  Designing business-facing reporting in Looker Studio and Power BI, with attention to KPI definitions, data quality, and clear executive communication.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Looker Studio', 'Power BI', 'Excel', 'KPI Dashboards', 'Executive Reporting'].map((s) => (
                    <span key={s} className="bg-white border border-black/5 px-3 py-1 rounded-md text-xs font-mono font-semibold text-neutral-600">{s}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-black/5 mt-8 pt-6 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>SYSTEM LOG: 0.1s LATENCY RUNTIME</span>
              <span>SECURE ACCESS</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SELECTED WORK (BENTO GRID) ================= */}
      <section id="projects" className="py-24 px-6 max-w-[88rem] mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest block">Case Studies</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Main Portfolio Projects</h2>
          </div>
          <p className="text-neutral-500 text-sm md:text-base max-w-xs font-normal">
            Three completed analytics case studies lead the portfolio. Additional projects stay marked as active work until the evidence and documentation are complete.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Main Hero Project Card - Spans 8 columns */}
          <div className="md:col-span-8 bg-[#2B2644] text-white rounded-2xl p-8 md:p-12 flex flex-col justify-between shadow-lg relative overflow-hidden group min-h-[460px]">
            <img
              src="/macrobrief-looker-dashboard.png"
              alt="MacroBrief Looker Studio dashboard preview"
              className="absolute inset-0 h-full w-full object-cover object-top opacity-20 transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B2644] via-[#2B2644]/90 to-[#2B2644]/70" />
            <div className="flex justify-between items-start relative z-10">
              <span className="text-xs font-mono px-3 py-1 bg-white/10 rounded-full backdrop-blur-md text-indigo-200">MAIN COMPLETED PROJECT</span>
              <a href="https://github.com/Finn043/macrobrief" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white" aria-label="Open MacroBrief GitHub project">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-4 relative z-10 mt-20">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">MacroBrief</h3>
              <p className="text-white/70 max-w-xl text-base font-normal leading-relaxed">
                Built a repeatable economic analysis workflow that converts World Bank time series into comparison marts, a Looker Studio dashboard, and a stakeholder-ready analyst brief.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Python', 'World Bank API', 'Time Series', 'Looker Studio'].map((t) => (
                  <span key={t} className="bg-white/10 text-white/90 text-xs font-mono px-2.5 py-1 rounded-md">{t}</span>
                ))}
              </div>
              <a
                href="https://datastudio.google.com/reporting/91b52781-28ab-4d0d-aa12-716720592161"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-200 transition-colors pt-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open dashboard</span>
              </a>
            </div>
          </div>

          {/* Metric Insight Card - Spans 4 columns */}
          <div className="md:col-span-4 bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Completed Focus</div>
            <div className="space-y-2 my-auto">
              <div className="text-6xl md:text-7xl font-bold tracking-tighter text-black">3</div>
              <p className="text-sm text-neutral-600 font-medium">
                Main projects: MacroBrief, Student Insights, and ICMRA Strategic Analytics 2019-2025.
              </p>
            </div>
            <div className="border-t border-black/5 pt-4 text-xs font-mono text-neutral-400">
              FEATURED FIRST
            </div>
          </div>

          {/* Secondary Project 1 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:scale-[1.005] transition-transform min-h-[380px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">MAIN COMPLETED PROJECT</span>
              <span className="text-xs font-mono text-neutral-400">FASTAPI</span>
            </div>
            <a
              href="https://github.com/Finn043/student-insights-faq"
              target="_blank"
              rel="noreferrer"
              className="block mt-8 rounded-xl overflow-hidden border border-black/5 bg-neutral-50 group/dashboard"
              aria-label="Open Student Insights GitHub project"
            >
              <img
                src="/student-insights-dashboard.png"
                alt="Student Insights and FAQ dashboard preview"
                className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover/dashboard:scale-[1.03]"
              />
            </a>
            <div className="space-y-3 mt-6">
              <h4 className="text-2xl font-bold tracking-tight">Student Insights</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Structured a privacy-safe 520-page course corpus, identified recurring information gaps, and served searchable FAQ answers through a tested FastAPI service.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Python', 'FastAPI', 'Pandas', 'Text Processing'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
              <a
                href="https://github.com/Finn043/student-insights-faq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-neutral-600 transition-colors pt-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open GitHub</span>
              </a>
            </div>
          </div>

          {/* Secondary Project 2 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:scale-[1.005] transition-transform min-h-[380px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">MAIN COMPLETED PROJECT</span>
              <span className="text-xs font-mono text-neutral-400">POWER BI</span>
            </div>
            <a
              href="https://github.com/Finn043/icmra-strategic-analytics"
              target="_blank"
              rel="noreferrer"
              className="block mt-8 rounded-xl overflow-hidden border border-black/5 bg-neutral-50 group/dashboard"
              aria-label="Open ICMRA Strategic Analytics GitHub project"
            >
              <img
                src="/icmra-executive-infographic.png"
                alt="ICMRA Strategic Analytics Power BI executive infographic preview"
                className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover/dashboard:scale-[1.03]"
              />
            </a>
            <div className="space-y-3 mt-6">
              <h4 className="text-2xl font-bold tracking-tight">ICMRA Strategic Analytics 2019-2025</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Created a Power BI file and executive infographic for an ICMRA fundraising performance review, covering revenue trends, campaign ROI, donor segmentation, regional revenue, and board-level actions.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Power BI', 'Fundraising Analytics', 'Donor Segmentation', 'Executive Infographic'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
              <a
                href="https://github.com/Finn043/icmra-strategic-analytics"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-neutral-600 transition-colors pt-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open GitHub</span>
              </a>
            </div>
          </div>

          {/* In-progress Project 1 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white/70 border border-dashed border-black/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm min-h-[280px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full">IN PROGRESS</span>
              <span className="text-xs font-mono text-neutral-400">NOT COMPLETE</span>
            </div>
            <div className="space-y-3 mt-12">
              <h4 className="text-2xl font-bold tracking-tight text-neutral-700">Automated ETL Analytics</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                BigQuery data pipeline and dashboard work are still being finalized, so this project is listed as active work rather than a completed case study.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['BigQuery', 'SQL Marts', 'Looker Studio Pending', 'Pipeline QA'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* In-progress Project 2 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white/70 border border-dashed border-black/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm min-h-[280px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full">IN PROGRESS</span>
              <span className="text-xs font-mono text-neutral-400">NOT COMPLETE</span>
            </div>
            <div className="space-y-3 mt-12">
              <h4 className="text-2xl font-bold tracking-tight text-neutral-700">Retail Electronics Analytics</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Amazon review analytics pipeline is still being refined for final dashboard evidence and project documentation.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Python', 'JSONL Streaming', 'Data Marts', 'Dashboard Pending'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER / CONTACT AREA ================= */}
      <footer id="contact" className="bg-black text-white px-6 pt-24 pb-12 w-full mt-auto">
        <div className="max-w-[88rem] mx-auto space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's coordinate an executive sync.</h2>
              <p className="text-white/60 text-base max-w-md font-normal">
                Looking for a dedicated analyst or AI specialist to clean up technical operational risks? Let's drop a secure note.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-mono">GH</a>
                <a href="#" className="text-white/40 hover:text-white transition-colors text-xs font-mono">IN</a>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 space-y-6 border border-white/10">
              <div className="text-sm font-mono text-indigo-300">DIRECT ENQUIRY ROUTE</div>
              <div className="space-y-1">
                <div className="text-xs text-white/40 font-medium uppercase">Direct Corporate Email</div>
                <a href="mailto:hello@baotin.dev" className="text-xl md:text-2xl font-bold text-white hover:underline block break-all tracking-tight">
                  hello@baotin.dev
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-white/40 font-medium uppercase">Primary Node Location</div>
                <div className="text-base font-semibold text-white">Melbourne, Victoria, Australia</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-4 h-4 text-white" />
              <span>BAO TIN LUONG © 2026</span>
            </div>
            <div>BUILT ON PURE FINTECH STRUCTURAL FRAMEWORKS</div>
          </div>

        </div>
      </footer>

    </div>
  );
}
