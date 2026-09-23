const techStack = [
  ['Python', 'python', '3776ab', 'PY'],
  ['SQL', 'postgresql', '4169e1', 'SQL'],
  ['BigQuery', 'googlebigquery', '669df6', 'BQ'],
  ['Pandas', 'pandas', '150458', 'PD'],
  ['Power BI', '', '', 'PBI'],
  ['Snowflake', 'snowflake', '29b5e8', 'SF'],
  ['Looker Studio', 'looker', '4285f4', 'LS'],
  ['Excel', '', '', 'XL'],
  ['FastAPI', 'fastapi', '009688', 'API'],
  ['GitHub', 'github', '181717', 'GH'],
  ['Tableau', '', '', 'TAB'],
  ['Google Cloud', 'googlecloud', '4285f4', 'GCP']
];

const bgVideo = document.querySelector('.bg-video');
function startBackgroundVideo() {
  if (!bgVideo) return;
  bgVideo.muted = true;
  bgVideo.defaultMuted = true;
  bgVideo.playsInline = true;
  bgVideo.play().catch(() => {});
}
if (bgVideo) {
  bgVideo.addEventListener('canplay', () => {
    document.body.classList.add('video-ready');
    startBackgroundVideo();
  }, { once: true });
  bgVideo.addEventListener('error', () => document.body.classList.remove('video-ready'));
  startBackgroundVideo();
  addEventListener('pointerdown', startBackgroundVideo, { once: true });
  addEventListener('touchstart', startBackgroundVideo, { once: true, passive: true });
  addEventListener('pageshow', startBackgroundVideo);
}

const projects = [
  {
    title: 'MacroBrief',
    type: 'Completed case study',
    image: 'assets/macrobrief.png',
    short: 'World Bank time-series pipeline, BigQuery marts, and Looker Studio dashboard for executive macro briefs.',
    overview: 'MacroBrief turns public World Bank indicators into clean comparison marts and a dashboard workflow for repeatable executive briefs across Australia, Vietnam, and the United States.',
    details: [
      'Pulled World Bank indicators into a repeatable Python/Pandas pipeline.',
      'Modeled country comparison tables for Looker Studio and executive summaries.',
      'Documented the dashboard workflow so future indicators can be added without redesigning the report.'
    ],
    stack: ['Python', 'Pandas', 'BigQuery', 'Looker Studio', 'World Bank API'],
    github: 'https://github.com/Finn043/macrobrief',
    live: 'https://datastudio.google.com/reporting/91b52781-28ab-4d0d-aa12-716720592161',
    liveLabel: 'Open Dashboard',
    progress: 100,
    metrics: [
      { value: 45, prefix: '', suffix: '%', decimals: 0, label: 'brief-time reduction' },
      { value: 500, prefix: '', suffix: 'K+', decimals: 0, label: 'daily-ready records' },
      { value: 3, prefix: '', suffix: '', decimals: 0, label: 'countries compared' }
    ]
  },
  {
    title: 'Snowflake Revenue Mart',
    type: 'Active work',
    image: 'assets/snowflake-revenue-mart-preview.svg',
    short: 'BI-ready customer analytics model for monthly revenue, repeat customers, CAC, and ROAS reporting.',
    overview: 'This project models raw customer, order, and marketing spend data into Snowflake staging views and marts, with quality checks designed for reliable business intelligence reporting.',
    details: [
      'Separated raw, staging, and mart logic so each table has a clear reporting purpose.',
      'Defined monthly revenue and customer behavior metrics for BI consumers.',
      'Added validation checks around nulls, joins, and grain before dashboard usage.'
    ],
    stack: ['Snowflake', 'SQL', 'Data Modeling', 'Quality Checks'],
    github: 'https://github.com/Finn043/snowflake-customer-revenue-mart',
    live: '',
    liveLabel: '',
    progress: 72,
    metrics: [
      { value: 4, prefix: '', suffix: '', decimals: 0, label: 'modeled domains' },
      { value: 100, prefix: '', suffix: '%', decimals: 0, label: 'SQL workflow' },
      { text: 'BI', label: 'ready mart layer' }
    ]
  },
  {
    title: 'ICMRA Strategic Analytics',
    type: 'Completed case study',
    image: 'assets/icmra-executive-infographic.png',
    short: 'Power BI reporting and executive infographic for fundraising performance, donor risk, and board-level actions.',
    overview: 'Built a Power BI report and executive infographic for ICMRA fundraising analytics from 2019 to 2025, covering donor concentration, campaign ROI, RFM segmentation, and recommended board actions.',
    details: [
      'Analyzed donor performance, campaign ROI, and transaction patterns from 2019 to 2025.',
      'Translated fundraising risk into board-friendly visuals and action priorities.',
      'Used RFM and CLV-style segmentation to make donor groups easier to compare.'
    ],
    stack: ['Power BI', 'RFM Segmentation', 'CLV Analysis', 'Executive Reporting'],
    github: 'https://github.com/Finn043/icmra-strategic-analytics',
    live: 'assets/icmra-strategic-analytics-report.pdf',
    liveLabel: 'Open Report',
    progress: 100,
    metrics: [
      { value: 32.9, prefix: '$', suffix: 'M', decimals: 1, label: 'pledges analyzed' },
      { value: 2330, prefix: '', suffix: '', decimals: 0, label: 'donors' },
      { value: 45100, prefix: '', suffix: '', decimals: 0, label: 'transactions' }
    ]
  },
  {
    title: 'Loan Reconciliation Demo',
    type: 'Completed · synthetic demo',
    image: 'assets/loan-reconciliation-preview.svg',
    short: 'Python, Pandas, and SQL workflow comparing loan transactions with bank settlements and producing a reviewable exception queue.',
    overview: 'A self-contained demonstration using invented loan and bank-feed records. The script validates both sources, joins unique references in SQL, flags differences, and exports repeatable reconciliation and exception files with input hashes. It is a portfolio demo, not a live lender system.',
    details: [
      'Checks for missing transactions, amount and account mismatches, duplicate references, and settlement dates that need review.',
      'Compares amounts in integer cents and records source-file hashes so a reviewer can reproduce the same run.',
      'Exports CSVs suitable for BI review. Accounting root causes and month-end sign-off remain human review steps.'
    ],
    stack: ['Python', 'Pandas', 'SQL', 'SQLite', 'CSV Controls'],
    github: 'https://github.com/Finn043/tin-luong-portfolio/tree/main/case-studies/loan-reconciliation',
    live: '',
    liveLabel: '',
    progress: 100,
    metrics: [
      { value: 5, prefix: '', suffix: '', decimals: 0, label: 'exact matches · sample' },
      { value: 6, prefix: '', suffix: '', decimals: 0, label: 'review flags · sample' },
      { value: 2, prefix: '', suffix: '', decimals: 0, label: 'synthetic source feeds' }
    ]
  }
];

const experience = [
  {
    period: '2025',
    dates: 'Nov 2025 – Apr 2026',
    company: 'Filum.ai',
    role: 'Data Analyst Intern',
    summary: 'Built KPI dashboards and lead scoring analysis that helped improve customer conversion visibility.',
    impact: '50+ KPIs and lead scoring analysis supporting 15% conversion improvement.',
    bullets: [
      'Designed reporting across 50+ KPIs for customer engagement, conversion, retention, and business performance.',
      'Built lead scoring models in BigQuery to assess conversion patterns and support a 15% improvement.',
      'Worked with stakeholders to turn broad business questions into clear metric definitions and dashboards.'
    ],
    tools: ['BigQuery', 'SQL', 'KPI Design', 'Dashboard QA']
  },
  {
    period: '2025',
    dates: 'May 2025 – Sep 2025',
    company: 'CoverGo',
    role: 'AI Engineer Intern',
    summary: 'Created validation data and Python checks for insurance AI workflows, reducing manual review time.',
    impact: '25% manual review time reduction across 200+ AI validation pairs.',
    bullets: [
      'Built 200+ Q&A validation pairs covering insurance-product questions, edge cases, and expected answers.',
      'Automated repetitive AI QA checks with Python so review evidence became easier to reproduce.',
      'Documented model-output issues for product and engineering teams to triage failures faster.'
    ],
    tools: ['Python', 'Pandas', 'NLP QA', 'Test Datasets']
  },
  {
    period: '2023',
    dates: 'Nov 2023 – Apr 2024',
    company: 'MoMo',
    role: 'Data Analyst Intern',
    summary: 'Supported daily reporting operations over 1M+ rows with 99.95% uptime and stakeholder training.',
    impact: '1M+ daily rows supported, 99.95% uptime, and 5+ departments trained.',
    bullets: [
      'Monitored daily reporting pipelines and maintained operational dashboards for business teams.',
      'Prepared launch and engagement analysis for three quarterly initiatives across multiple departments.',
      'Trained 5+ departments on dashboard usage, metric interpretation, and recurring reporting workflows.'
    ],
    tools: ['SQL', 'Excel', 'BI Dashboards', 'Data Operations']
  }
];

const techGrid = document.querySelector('#tech-grid');
const projectGrid = document.querySelector('#project-grid');
const experienceList = document.querySelector('#experience-list');
const modal = document.querySelector('#project-modal');
const aboutModal = document.querySelector('#about-modal');
const closeModal = document.querySelector('.modal-close');

techGrid.innerHTML = techStack.map(([name, slug, color, mark]) => `
  <article class="tech-card ${slug ? '' : 'logo-fallback'}" data-mark="${mark}">
    <div class="tech-icon" data-mark="${mark}">
      ${slug ? `<img src="https://cdn.simpleicons.org/${slug}/${color}" alt="${name} logo" loading="lazy" onerror="this.parentElement.parentElement.classList.add('logo-fallback');this.remove()">` : ''}
    </div>
    <span>${name}</span>
  </article>
`).join('');

projectGrid.innerHTML = projects.map((project, index) => `
  <button class="project-card" type="button" data-project="${index}" style="--progress: ${project.progress}%">
    <img src="${project.image}" alt="${project.title} preview" loading="lazy">
    <div>
      <span>${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.short}</p>
      <div class="project-progress">
        <div class="project-progress-row"><span>Completion</span><strong data-progress-count="${project.progress}">0%</strong></div>
        <div class="project-progress-track"><i class="project-progress-fill"></i></div>
      </div>
    </div>
  </button>
`).join('');

experienceList.innerHTML = experience.map((item, index) => `
  <button class="timeline-item ${index === 0 ? 'active' : ''}" type="button" data-experience="${index}" aria-expanded="${index === 0}">
    <div class="timeline-period">${item.period}</div>
    <div>
      <div class="timeline-company">${item.company}</div>
      <h3 class="timeline-role">${item.role}</h3>
      <p class="timeline-summary">${item.summary}</p>
    </div>
    <div class="timeline-open">${index === 0 ? '-' : '+'}</div>
    <div class="timeline-detail">
      <div>
        <p class="timeline-dates">${item.dates}</p>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
        <div class="timeline-impact"><strong>Impact</strong><span>${item.impact}</span></div>
        <div class="timeline-tags">${item.tools.map((tool) => `<span>${tool}</span>`).join('')}</div>
      </div>
    </div>
  </button>
`).join('');

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function startCounters() {
  document.querySelectorAll('.stat').forEach((stat, index) => {
    const target = Number(stat.dataset.target);
    const suffix = stat.dataset.suffix || '';
    const decimals = Number(stat.dataset.decimals || 0);
    const value = stat.querySelector('strong');
    const suffixNode = stat.querySelector('span');
    suffixNode.textContent = suffix;

    setTimeout(() => {
      const start = performance.now();
      const duration = 1500 + index * 80;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        value.textContent = (target * easeOutCubic(progress)).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, 480 + index * 90);
  });
}

const statObserver = new IntersectionObserver((entries, observer) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    startCounters();
    observer.disconnect();
  }
}, { threshold: 0.25 });
statObserver.observe(document.querySelector('.stats'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));

const progressObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    card.classList.add('progress-visible');
    const node = card.querySelector('[data-progress-count]');
    const target = Number(node.dataset.progressCount);
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / 1100, 1);
      node.textContent = `${Math.round(target * easeOutCubic(progress))}%`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    observer.unobserve(card);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.project-card').forEach((card) => progressObserver.observe(card));

document.querySelector('.page').addEventListener('pointermove', (event) => {
  if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const mx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const my = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  event.currentTarget.style.setProperty('--mx', mx.toFixed(3));
  event.currentTarget.style.setProperty('--my', my.toFixed(3));
});

document.querySelector('.page').addEventListener('pointerleave', (event) => {
  event.currentTarget.style.setProperty('--mx', '0');
  event.currentTarget.style.setProperty('--my', '0');
});

projectGrid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-project]');
  if (!card) return;
  const project = projects[Number(card.dataset.project)];
  modal.querySelector('.modal-image').src = project.image;
  modal.querySelector('.modal-image').alt = `${project.title} preview`;
  modal.querySelector('.modal-kicker').textContent = project.type;
  modal.querySelector('#modal-title').textContent = project.title;
  modal.querySelector('.modal-overview').textContent = project.overview;
  modal.querySelector('.modal-data').innerHTML = project.metrics.map((metric) => `
    <article>
      <strong
        ${metric.text ? '' : `data-count="${metric.value}" data-prefix="${metric.prefix}" data-suffix="${metric.suffix}" data-decimals="${metric.decimals}"`}
      >${metric.text || `${metric.prefix}0${metric.suffix}`}</strong>
      <span>${metric.label}</span>
    </article>
  `).join('');
  modal.querySelector('.modal-points').innerHTML = project.details.map((detail) => `<p>${detail}</p>`).join('');
  modal.querySelector('.modal-stack').innerHTML = project.stack.map((item) => `<span>${item}</span>`).join('');
  modal.querySelector('.modal-links').innerHTML = [
    project.github ? `<a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : '',
    project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer">${project.liveLabel}</a>` : ''
  ].join('') || '<span class="empty-link">Links will be added when the project is published.</span>';
  modal.showModal();
  animateModalMetrics();
});

function formatMetric(value, prefix, suffix, decimals) {
  const number = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return `${prefix}${number}${suffix}`;
}

function animateModalMetrics() {
  modal.querySelectorAll('[data-count]').forEach((node, index) => {
    const target = Number(node.dataset.count);
    const prefix = node.dataset.prefix || '';
    const suffix = node.dataset.suffix || '';
    const decimals = Number(node.dataset.decimals || 0);
    const start = performance.now() + index * 90;
    const duration = 900 + index * 120;

    function tick(now) {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      node.textContent = formatMetric(target * easeOutCubic(progress), prefix, suffix, decimals);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

experienceList.addEventListener('click', (event) => {
  const selected = event.target.closest('[data-experience]');
  if (!selected) return;
  experienceList.querySelectorAll('.timeline-item').forEach((item) => {
    const active = item === selected;
    item.classList.toggle('active', active);
    item.setAttribute('aria-expanded', String(active));
    item.querySelector('.timeline-open').textContent = active ? '-' : '+';
  });
});

function mascotCell(index) {
  return `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
}

function setMascotLayer(layer, sheet, index) {
  if (!layer) return;
  layer.style.backgroundImage = `url(${sheet})`;
  layer.style.backgroundPosition = mascotCell(index);
}

function initMascot(mascotButton) {
  const directionLayer = mascotButton.querySelector('.mascot-directions');
  const reactionLayer = mascotButton.querySelector('.mascot-reactions');
  const directions = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
  const reactions = ['blink', 'heart', 'sparkle', 'surprised', 'wink', 'bashful', 'sleepy', 'dizzy', 'delighted'];
  const clockwise = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right'];
  let boops = 0;
  let lastBoop = 0;
  let reactionTimer;

  setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf('center'));
  setMascotLayer(reactionLayer, mascotButton.dataset.reactions, 0);

  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    addEventListener('pointermove', (event) => {
      const box = mascotButton.getBoundingClientRect();
      if (!box.width || !box.height) return;
      const dx = event.clientX - (box.left + box.width / 2);
      const dy = event.clientY - (box.top + box.height / 2);
      if (Math.hypot(dx, dy) < 70) {
        setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf('center'));
        return;
      }
      const sector = (Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8;
      setMascotLayer(directionLayer, mascotButton.dataset.directions, directions.indexOf(clockwise[sector]));
    }, { passive: true });
  }

  mascotButton.addEventListener('click', () => {
    clearTimeout(reactionTimer);
    const now = Date.now();
    boops = now - lastBoop < 1600 ? boops + 1 : 1;
    lastBoop = now;
    const reaction = boops >= 4 ? 'dizzy' : ['blink', 'heart', 'sparkle', 'delighted'][(boops - 1) % 4];
    if (boops >= 4) boops = 0;
    setMascotLayer(reactionLayer, mascotButton.dataset.reactions, reactions.indexOf(reaction));
    mascotButton.classList.remove('is-booped');
    void mascotButton.offsetWidth;
    mascotButton.classList.add('is-reacting', 'is-booped');
    reactionTimer = setTimeout(() => mascotButton.classList.remove('is-reacting', 'is-booped'), 620);
  });
}

document.querySelector('.hero-portrait').addEventListener('click', () => aboutModal.showModal());
document.querySelectorAll('[data-mascot]').forEach(initMascot);
document.querySelectorAll('.modal-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.mobile-overlay');
const mobileMenu = document.querySelector('.mobile-menu');

function setMenu(open) {
  burger.setAttribute('aria-expanded', String(open));
  overlay.hidden = !open;
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
overlay.addEventListener('click', () => setMenu(false));
mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    if (modal.open) modal.close();
    if (aboutModal.open) aboutModal.close();
  }
});
addEventListener('resize', () => {
  if (innerWidth > 720) setMenu(false);
});
