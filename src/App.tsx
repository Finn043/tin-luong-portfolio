import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  FileText,
  Database,
  Cpu,
  BarChart3,
  ExternalLink,
  ArrowUpRight,
  MessageSquare,
  Send
} from 'lucide-react';

const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 256 256" fill="currentColor">
    <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
  </svg>
);

export default function PremiumPortfolio() {
  const [activeTab, setActiveTab] = useState<'ai' | 'data' | 'bi'>('ai');
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [assistantQuestion, setAssistantQuestion] = useState('Which project best shows analytics engineering?');
  const [assistantAnswer, setAssistantAnswer] = useState('Ask about Bao Tin Luong’s projects, experience, tech stack, or contact details.');
  const [assistantMode, setAssistantMode] = useState<'ready' | 'local' | 'llm'>('ready');
  const [assistantLoading, setAssistantLoading] = useState(false);

  async function handleAssistantSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = assistantQuestion.trim();
    if (!question || assistantLoading) return;

    setAssistantLoading(true);
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      setAssistantAnswer(data.answer || 'I could not find that detail in the portfolio knowledge base.');
      setAssistantMode(data.mode === 'llm' ? 'llm' : 'local');
    } catch {
      setAssistantAnswer('The assistant endpoint is unavailable right now. You can still contact Bao directly at tin.bao.luong@gmail.com.');
      setAssistantMode('local');
    } finally {
      setAssistantLoading(false);
    }
  }

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
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
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
      <section className="pt-24 pb-10 px-6 max-w-[88rem] mx-auto w-full">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Main Hook Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#071A2F] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DATA ANALYST / ANALYTICS ENGINEER
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]" style={{ letterSpacing: '-0.04em' }}>
              Cleaner data.<br />
              Faster <span className="text-neutral-400">decisions.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Bao Tin Luong, Melbourne-based Data Analyst and Analytics Engineer. I build robust Python pipelines, BigQuery marts, and interactive dashboards to clean data, reduce noise, and deliver impactful business intelligence.
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

          {/* Portrait Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] overflow-hidden rounded-2xl bg-[#071A2F] shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_30%),linear-gradient(135deg,#071A2F,#0C2742)]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/45">
                <span>Melbourne VIC</span>
                <span>Analytics Portfolio</span>
              </div>
              <img
                src="/profile-large.png"
                alt="Bao Tin Luong professional portrait"
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 object-cover object-[50%_40%] shadow-2xl"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-md">
                <div className="text-sm font-semibold">Bao Tin Luong</div>
                <div className="mt-1 text-xs text-white/65">Python pipelines, BigQuery marts, and BI dashboards.</div>
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

      {/* ================= EXPERIENCE AREA ================= */}
      <section id="experience" className="bg-[#F5F5F5] py-24 px-6 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest block">Career Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Applied analytics in real teams</h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Internship and product-team work across customer analytics, AI validation, data operations, and stakeholder reporting.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {[
              {
                company: 'Filum.ai',
                role: 'Data Analyst Intern',
                period: '2024',
                result: 'Built KPI dashboards and lead scoring models that supported a 15% conversion improvement.',
                details: ['50+ KPIs', 'BigQuery', 'Stakeholder reporting'],
                contributions: [
                  'Designed KPI dashboards for customer engagement, conversion, and retention reporting.',
                  'Built lead scoring analysis in BigQuery to identify stronger conversion signals.',
                  'Translated ambiguous stakeholder questions into metric definitions and reusable reporting views.'
                ],
                tools: ['BigQuery', 'SQL', 'Dashboard QA', 'KPI Design'],
                impact: 'Improved commercial visibility across 50+ KPIs and supported a 15% conversion improvement.'
              },
              {
                company: 'CoverGo',
                role: 'AI Engineer Intern',
                period: '2024',
                result: 'Created validation datasets and Python checks for insurance AI workflows, reducing manual review time by 25%.',
                details: ['200+ Q&A pairs', 'Python automation', 'NLP validation'],
                contributions: [
                  'Built structured test data covering insurance-product questions, edge cases, and expected answers.',
                  'Automated repetitive review checks with Python to make QA evidence easier to reproduce.',
                  'Documented model-output issues so product and engineering teams could triage failures faster.'
                ],
                tools: ['Python', 'Pandas', 'NLP QA', 'Test Datasets'],
                impact: 'Reduced manual AI QA review time by 25% while improving consistency across 200+ validation pairs.'
              },
              {
                company: 'MoMo',
                role: 'Business Intelligence Intern',
                period: '2023',
                result: 'Supported daily data operations over 1M+ rows with 99.95% uptime and trained teams on dashboard usage.',
                details: ['1M+ daily rows', '99.95% uptime', '5+ departments'],
                contributions: [
                  'Monitored daily reporting pipelines and helped maintain operational dashboards for business teams.',
                  'Prepared analysis for product launches and engagement reporting across multiple departments.',
                  'Trained stakeholders on dashboard usage, metric interpretation, and recurring reporting workflows.'
                ],
                tools: ['SQL', 'Excel', 'BI Dashboards', 'Data Operations'],
                impact: 'Maintained reporting workflows over 1M+ daily rows with 99.95% uptime and trained 5+ departments.'
              }
            ].map((item) => (
              <article key={item.company} className="rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
                <button
                  type="button"
                  onClick={() => setExpandedExperience(expandedExperience === item.company ? null : item.company)}
                  className="grid w-full gap-6 p-6 text-left md:grid-cols-[12rem_1fr_auto]"
                  aria-expanded={expandedExperience === item.company}
                >
                  <div>
                    <div className="text-sm font-bold text-[#071A2F]">{item.company}</div>
                    <div className="mt-1 text-xs font-mono uppercase tracking-widest text-neutral-400">{item.period}</div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight">{item.role}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.result}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="rounded-md border border-black/5 bg-neutral-50 px-2.5 py-1 text-xs font-mono text-neutral-500">{detail}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A2F]/8 text-[#071A2F] transition-transform md:self-start" aria-hidden="true">
                    <ArrowRight className={`h-4 w-4 transition-transform ${expandedExperience === item.company ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expandedExperience === item.company ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-6 border-t border-black/5 px-6 pb-6 pt-5 md:grid-cols-[12rem_1fr]">
                      <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Key contributions</div>
                      <div className="space-y-5">
                        <ul className="space-y-2 text-sm leading-relaxed text-neutral-600">
                          {item.contributions.map((contribution) => (
                            <li key={contribution} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#071A2F]" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool) => (
                            <span key={tool} className="rounded-full bg-[#071A2F] px-3 py-1 text-xs font-mono text-white">{tool}</span>
                          ))}
                        </div>

                        <div className="rounded-xl bg-[#EAF1F8] p-4 text-sm font-medium leading-relaxed text-[#071A2F]">
                          <span className="font-bold">Business impact: </span>
                          {item.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
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
            Three analytics case studies lead the portfolio. Active work stays clearly labelled until the evidence and documentation are complete.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Main Hero Project Card - Spans 8 columns */}
          <div className="md:col-span-8 grid min-h-[520px] overflow-hidden rounded-2xl border border-black/5 bg-white text-[#071A2F] shadow-lg lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-mono px-3 py-1 bg-[#071A2F]/8 rounded-full text-[#071A2F]">MAIN COMPLETED PROJECT</span>
                <a href="https://github.com/Finn043/macrobrief" target="_blank" rel="noreferrer" className="w-10 h-10 shrink-0 rounded-full bg-[#071A2F]/8 flex items-center justify-center hover:bg-[#071A2F] hover:text-white transition-all text-[#071A2F]" aria-label="Open MacroBrief GitHub project">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight">Cut macro brief time by 45%</h3>
                <p className="text-slate-700 text-base font-normal leading-relaxed">
                  MacroBrief turns World Bank time series into clean comparison marts and interactive Looker Studio dashboards for repeatable executive briefs.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'BigQuery', 'Looker Studio'].map((t) => (
                    <span key={t} className="bg-[#071A2F]/8 text-[#071A2F] text-xs font-mono px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
                <a
                  href="https://datastudio.google.com/reporting/91b52781-28ab-4d0d-aa12-716720592161"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#071A2F] hover:text-blue-700 transition-colors pt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open dashboard</span>
                </a>
              </div>

              <div className="rounded-xl bg-[#F5F7FA] p-4">
                <div className="mb-3 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>LIVE PREVIEW</span>
                  <span>Filter open</span>
                </div>
                {['Australia', 'United States', 'Vietnam'].map((country, idx) => (
                  <div key={country} className="mb-2 flex items-center justify-between rounded-md bg-white px-2 py-1.5 text-xs">
                    <span>{country}</span>
                    <span className={`h-1.5 rounded-full bg-[#0D3557] transition-all duration-700 hover:w-24 ${idx === 0 ? 'w-12' : idx === 1 ? 'w-16' : 'w-20'}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden bg-[#EAF1F8] lg:min-h-full">
              <img
                src="/macrobrief.png"
                alt="MacroBrief dashboard with filters and economic trend charts"
                className="h-full w-full object-cover object-top contrast-125 saturate-110"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 bg-gradient-to-r from-white/80 to-transparent lg:block" />
            </div>
          </div>

          {/* Metric Insight Card - Spans 4 columns */}
          <div className="md:col-span-4 min-h-[520px] bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Portfolio Focus</div>
            <div className="space-y-2 my-auto">
              <div className="text-6xl md:text-7xl font-bold tracking-tighter text-black">3</div>
              <p className="text-sm text-neutral-600 font-medium">
                Main projects: MacroBrief, Snowflake Revenue Mart, and ICMRA Strategic Analytics 2019-2025.
              </p>
              <div className="mt-8 space-y-3 rounded-xl bg-[#F5F7FA] p-4">
                {['Data Source', 'Processing', 'Marts', 'Dashboard'].map((step, idx) => (
                  <div key={step} className="flex items-center gap-3 text-xs font-semibold text-[#071A2F]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] shadow-sm">{idx + 1}</span>
                    <span className="flex-1 rounded-md bg-white px-3 py-2 shadow-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-black/5 pt-4 text-xs font-mono text-neutral-400">
              MACROBRIEF PIPELINE
            </div>
          </div>

          {/* Secondary Project 1 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white border border-black/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:scale-[1.005] transition-transform min-h-[380px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">ACTIVE WORK</span>
              <span className="text-xs font-mono text-neutral-400">SNOWFLAKE</span>
            </div>
            <a
              href="https://github.com/Finn043/snowflake-customer-revenue-mart"
              target="_blank"
              rel="noreferrer"
              className="block mt-8 rounded-xl overflow-hidden border border-black/5 bg-neutral-50 group/dashboard"
              aria-label="Open Snowflake Customer Revenue Mart GitHub project"
            >
              <img
                src="/snowflake-revenue-mart-preview.svg"
                alt="Snowflake revenue mart dashboard and pipeline preview"
                className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover/dashboard:scale-[1.03]"
              />
            </a>
            <div className="space-y-3 mt-6">
              <h4 className="text-2xl font-bold tracking-tight">Snowflake revenue mart for BI-ready customer analytics</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Models raw customer, order, and channel spend data into Snowflake staging views and marts for monthly revenue, repeat-customer, CAC, and ROAS reporting.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Snowflake', 'SQL', 'Data Modeling', 'Quality Checks'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
              <a
                href="https://github.com/Finn043/snowflake-customer-revenue-mart"
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
              <h4 className="text-2xl font-bold tracking-tight">Board-ready fundraising analytics across $32.9M in pledges</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Built the Power BI report, dashboard, and executive infographic for ICMRA's 2019-2025 fundraising review, covering 2,330 donors, 45,100 transactions, 1,077% campaign ROI, donor concentration risk, and board-level actions.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Power BI', 'RFM Segmentation', 'CLV Analysis', 'Executive Infographic'].map((t) => (
                  <span key={t} className="bg-neutral-50 text-neutral-500 border border-black/5 text-xs font-mono px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
              <a
                href="/icmra-strategic-analytics-report.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-neutral-600 transition-colors pt-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open report</span>
              </a>
              <a
                href="https://github.com/Finn043/icmra-strategic-analytics"
                target="_blank"
                rel="noreferrer"
                className="ml-4 inline-flex items-center gap-2 text-sm font-medium text-black hover:text-neutral-600 transition-colors pt-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open GitHub</span>
              </a>
            </div>
          </div>

          {/* In-progress Project 1 - Spans 6 columns */}
          <div className="md:col-span-6 bg-white/70 border border-dashed border-black/10 rounded-2xl p-8 flex flex-col justify-between shadow-sm min-h-[280px]">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full">ACTIVE WORK</span>
              <span className="text-xs font-mono text-neutral-400">BETA</span>
            </div>
            <div className="space-y-3 mt-12">
              <h4 className="text-2xl font-bold tracking-tight text-neutral-700">Automated ETL Analytics</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                BigQuery data pipeline and dashboard work are being refined with final QA evidence before being promoted to a completed case study.
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
              <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full">ACTIVE WORK</span>
              <span className="text-xs font-mono text-neutral-400">BETA</span>
            </div>
            <div className="space-y-3 mt-12">
              <h4 className="text-2xl font-bold tracking-tight text-neutral-700">Retail Electronics Analytics</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Amazon review analytics pipeline is being refined for final dashboard evidence and project documentation.
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

      <section id="assistant" className="bg-white px-6 py-20 w-full">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 rounded-2xl bg-[#071A2F] p-8 text-white shadow-lg">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Ask about my work</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Query a small portfolio knowledge base covering experience, projects, tools, links, and contact details.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['MacroBrief impact', 'CoverGo role', 'Snowflake project'].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setAssistantQuestion(prompt)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-black/5 bg-[#F5F7FA] p-6 md:p-8 shadow-sm">
            <form onSubmit={handleAssistantSubmit} className="flex flex-col gap-4 sm:flex-row">
              <label htmlFor="portfolio-assistant-question" className="sr-only">Ask a portfolio question</label>
              <input
                id="portfolio-assistant-question"
                value={assistantQuestion}
                onChange={(event) => setAssistantQuestion(event.target.value)}
                placeholder="Ask about projects, experience, or contact details..."
                className="min-w-0 flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#071A2F]"
              />
              <button
                type="submit"
                disabled={assistantLoading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-400"
              >
                <span>{assistantLoading ? 'Thinking' : 'Ask'}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-5 rounded-xl border border-black/5 bg-white p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Portfolio Assistant</div>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-mono uppercase text-neutral-500">
                  {assistantMode === 'llm' ? 'LLM' : assistantMode === 'local' ? 'Local' : 'Ready'}
                </span>
              </div>
              <p className="min-h-20 whitespace-pre-line text-sm leading-relaxed text-neutral-700">
                {assistantAnswer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER / CONTACT AREA ================= */}
      <footer id="contact" className="bg-black text-white px-6 pt-24 pb-12 w-full mt-auto">
        <div className="max-w-[88rem] mx-auto space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's talk about the data work you need.</h2>
              <p className="text-white/60 text-base max-w-md font-normal">
                Looking for a data analyst or analytics engineer who can clean messy data, build reliable pipelines, and ship dashboards people actually use? Send me a note.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/Finn043" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors text-xs font-mono" aria-label="Open GitHub profile">
                  GH
                </a>
                <a href="https://www.linkedin.com/in/tin-luong-8a0908259/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors text-xs font-mono" aria-label="Open LinkedIn profile">
                  IN
                </a>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 space-y-6 border border-white/10">
              <div className="text-sm font-mono text-indigo-300">DIRECT ENQUIRY ROUTE</div>
              <div className="space-y-1">
                <div className="text-xs text-white/40 font-medium uppercase">Direct Corporate Email</div>
                <a href="mailto:tin.bao.luong@gmail.com" className="text-xl md:text-2xl font-bold text-white hover:underline block break-all tracking-tight">
                  tin.bao.luong@gmail.com
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
