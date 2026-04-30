// ═══════════════════════════════════════════════
// English version — update alongside data.js
// Variable name must stay INTEL_DATA_EN
// ═══════════════════════════════════════════════

window.__ARCHIVE_INTEL_DATA_EN = {

  meta: {
    date: "2026.04.26",
    weekday: "Sunday",
    weekday_en: "Sunday",
    issue: 1,
  },

  priority: {
    level: "P1",
    title: "Back Button Hijacking Policy: 51 Days to Enforcement",
    body: "Google officially announced a new spam policy on April 13, 2026. Sites that manipulate browser back navigation face manual actions or automated demotions starting June 15. Third-party ad scripts and SPA routers are the most common culprits — site owners are responsible even if the behavior originates from included libraries."
  },

  cards: [
    {
      domain: "SEO", category: "strategy", credibility: "official",
      title: "March 2026 Core Update Completed — YMYL Hit Hardest",
      body: "Google's March 2026 broad core update rolled out March 27 and completed April 8 (12 days, 4 hours). Over 55% of websites saw noticeable ranking changes. YMYL verticals — health, legal, home services — took the largest hits.\n\n⚠️ Analyst claims about a 'Gemini 4.0 semantic filter' are unverified — not confirmed by Google.",
      action: "Ask page by page: 'What does this page offer that the top 10 don't?' No answer = an information gain problem, not a technical one.",
      full: false
    },
    {
      domain: "AEO", category: "execution", credibility: "research",
      title: "ChatGPT Citation Mechanics: 88% of Cited URLs Come From Search",
      body: "Ahrefs research: ChatGPT activates search mode in only 34.5% of queries, and 88% of cited URLs come directly from search results. Brands are 6.5x more likely to be cited via third-party sources than their own domain (AirOps, Oct 2025).",
      action: "Lead with a complete answer in the first sentence. Add FAQ schema immediately. Confirm robots.txt allows AI crawlers (GPTBot, PerplexityBot, Google-Extended).",
      full: false
    },
    {
      domain: "GEO", category: "market", credibility: "research",
      title: "AI Search Market Share: Gemini Rapidly Closing the Gap on ChatGPT",
      body: "Similarweb (Feb 2026): ChatGPT dropped from 75.7% to 61.7%; Gemini surged from 5.7% to 24.4%; Claude rose from 1.7% to 3.3%; Grok at 3.4%. The platform priority order for GEO optimization is actively shifting.",
      action: "GEO strategy cannot focus on ChatGPT alone — Gemini's optimization logic (closer to traditional SEO) must be addressed in parallel.",
      full: false
    },
    {
      domain: "GEO", category: "strategy", credibility: "opinion",
      title: "Google Enters the GEO Race: New 'GEO Partner Manager' Role Spotted",
      body: "Google posted a GEO Partner Manager role inside its enterprise sales team, with responsibilities including 'influencing partners to prioritize Google-owned platforms in their tools and methodologies.'\n\n⚠️ Google has not publicly explained the intent behind this role — the above is industry interpretation.",
      action: "Monitor this role's downstream effects. Understand that Google may actively shape the GEO ecosystem in its favor.",
      full: false
    },
    {
      domain: "GEO", category: "measurement", credibility: "research",
      title: "GEO Tool Market Matures: Free to Enterprise, Full Landscape",
      body: "April 2026 GEO tool market: Profound (enterprise, $499/mo), Adobe LLM Optimizer, Semrush AI Visibility Toolkit (launched Sept 2025), Scrunch (mid-market, $250/mo). HubSpot AEO Grader remains free. Reddit, LinkedIn, and YouTube are the top three platforms most frequently cited by major LLMs.",
      action: "Start with HubSpot AEO Grader for a free baseline. Consider Scrunch or Semrush add-on only when you have budget and a clear measurement goal.",
      full: true
    }
  ],

  actions: [
    { priority: "high", label: "Now",        text: "Use Google Search Console to compare traffic before and after March 27 — identify pages affected by the Core Update.", tag: "SEO · Measurement" },
    { priority: "high", label: "This Week",  text: "Add FAQ schema markup to your 5 most important content pages.", tag: "AEO · Execution" },
    { priority: "mid",  label: "This Month", text: "Run a baseline audit with HubSpot AEO Grader — document your current AI search visibility across ChatGPT, Perplexity, and Gemini.", tag: "GEO · Measurement" },
    { priority: "mid",  label: "This Month", text: "Confirm robots.txt allows major AI crawlers: GPTBot, Google-Extended, PerplexityBot.", tag: "AEO · Execution" },
    { priority: "low",  label: "Long-term",  text: "Build brand presence on Reddit, LinkedIn, and YouTube to increase third-party citation density across AI platforms.", tag: "GEO · Strategy" }
  ],

  tracker: {
    AEO: [
      {
        cat:"On-page", item:"Extractability",
        note:"Lead with complete answer in first sentence; each paragraph self-contained",
        update:"Answer-first content correlates with higher AI citation rates (Ahrefs, 2026)",
        trend:"up", cred:"research",
        ref:"https://ahrefs.com/blog/the-great-decoupling/"
      },
      {
        cat:"On-page", item:"Schema Markup",
        note:"FAQ / How-to / Article schema",
        update:"FAQ schema produced 350% increase in AI citations in OtterlyAI's own site experiment (OtterlyAI, 2026)",
        trend:"up", cred:"research",
        ref:"https://otterly.ai/blog/how-to-optimize-content-for-ai-search/"
      },
      {
        cat:"On-page", item:"Relevance",
        note:"Semantic richness; full intent coverage",
        update:"Google's ranking systems evaluate topical relevance and intent, not keyword matching (Google Search Central)",
        trend:"up", cred:"official",
        ref:"https://developers.google.com/search/blog"
      },
      {
        cat:"On-page", item:"Content Format (HTML) 🆕",
        note:"HTML and Markdown show no statistically significant difference in AI bot traffic (RCT, Feb 2026)",
        update:"Profound A/B tested 381 pages across 6 sites — median difference ~1 extra bot visit, not statistically significant",
        trend:"stable", cred:"research",
        ref:"https://www.tryprofound.com/blog/does-markdown-increase-ai-bot-traffic"
      },
      {
        cat:"Off-page", item:"Citation Density",
        note:"Brands cited via third-party sources 6.5x more than own domain (across AI search platforms, AirOps Oct 2025) ⚠️ derived figure",
        update:"Digital PR and editorial mentions are the core lever — owned content alone is insufficient",
        trend:"up", cred:"research",
        ref:"https://www.airops.com/blog/answer-engine-optimization-tools"
      },
      {
        cat:"Off-page", item:"Platform Presence",
        note:"LinkedIn leads professional queries; YouTube leads AI Overviews; Reddit leads ChatGPT citations",
        update:"Platform citation rankings vary by LLM — not a unified ranking (Ahrefs / Profound, 2026)",
        trend:"up", cred:"research",
        ref:"https://ahrefs.com/blog/most-cited-domains-in-chatgpt/"
      },
      {
        cat:"Authority", item:"E-E-A-T",
        note:"Author credentials, first-hand experience, citable perspective",
        update:"Post March 2026 Core Update: industry analysis suggests AI-only content without human oversight lost rankings (industry observation, not official Google statement)",
        trend:"up", cred:"opinion",
        ref:"https://www.seroundtable.com/google-march-2026-core-update-complete-41145.html"
      },
      {
        cat:"Authority", item:"Domain Authority",
        note:"Traditional DA has limited impact on AI citation selection",
        update:"AI Overview citations don't require top-10 rankings — content relevance and structure matter independently (Ahrefs, 2026)",
        trend:"down", cred:"research",
        ref:"https://ahrefs.com/blog/ai-overview-citations-top-10/"
      },
      {
        cat:"Technical", item:"Robots.txt",
        note:"Explicitly allow GPTBot / Google-Extended / ClaudeBot / PerplexityBot",
        update:"Baseline config — verify immediately (Google Search Central)",
        trend:"stable", cred:"official",
        ref:"https://developers.google.com/search/docs/crawling-indexing/overview"
      },
      {
        cat:"Technical", item:"llms.txt",
        note:"Emerging format, similar to robots.txt but for LLMs",
        update:"OtterlyAI 90-day experiment: only 0.1% of AI bot traffic reached llms.txt — no measurable citation impact",
        trend:"stable", cred:"unverified",
        ref:"https://otterly.ai/blog/the-llms-txt-experiment/"
      },
    ],
    GEO: [
      {
        cat:"Platform", item:"ChatGPT",
        note:"~34.5% of queries activate live search; remainder relies on training data",
        update:"Market share fell to 61.7% (Similarweb, Feb 2026) ⚠️ original report requires paid access",
        trend:"down", cred:"research",
        ref:""
      },
      {
        cat:"Platform", item:"Gemini",
        note:"Google AI Overviews optimization logic mirrors traditional SEO",
        update:"Market share surged to 24.4% (Similarweb, Feb 2026) ⚠️ original report requires paid access",
        trend:"up", cred:"research",
        ref:""
      },
      {
        cat:"Platform", item:"Perplexity",
        note:"High raw-source citation ratio; avg 8.79 citations per response",
        update:"Share stable ~1.8%; citations-first design makes it closest to traditional SEO ranking logic",
        trend:"stable", cred:"research",
        ref:"https://ahrefs.com/blog/ai-search-overlap/"
      },
      {
        cat:"Measure", item:"Brand Mention Rate",
        note:"Track brand appearance frequency in AI responses",
        update:"HubSpot AEO Grader — free baseline test across ChatGPT, Perplexity, Gemini",
        trend:"up", cred:"opinion",
        ref:"https://www.hubspot.com/ai-search-grader"
      },
      {
        cat:"Measure", item:"Citation Stability 🆕",
        note:"40–60% of citation sources change monthly",
        update:"⚠️ Unverified: figure appears in aggregator pages attributed to eMarketer — original report not directly confirmed; directional consensus is that GEO visibility is far less stable than SEO",
        trend:"stable", cred:"unverified",
        ref:""
      },
      {
        cat:"Content", item:"Information Gain",
        note:"Provide perspectives, data, and first-hand experience unavailable elsewhere",
        update:"Google Helpful Content system explicitly rewards information gain; AI citations favor original data",
        trend:"up", cred:"official",
        ref:"https://developers.google.com/search/docs/appearance/helpful-content-system"
      },
    ],
    SEO: [
      {
        cat:"Algorithm", item:"Core Update Cadence",
        note:"3 updates in Q1 2026 (Spam Update + Core Update)",
        update:"March Core Update completed April 8 (confirmed via Google Search Status Dashboard)",
        trend:"stable", cred:"official",
        ref:"https://developers.google.com/search/blog"
      },
      {
        cat:"Ranking", item:"Helpful Content",
        note:"Human-supervised + AI-assisted > AI-only production",
        update:"Post-update industry observation: AI-only content lost rankings (industry observation, not Google's official framing)",
        trend:"up", cred:"opinion",
        ref:"https://developers.google.com/search/docs/appearance/helpful-content-system"
      },
      {
        cat:"Ranking", item:"Page-level Authority",
        note:"Weak content on strong domains can still be penalized",
        update:"⚠️ Unverified inference: analyst observation, not a confirmed Google mechanism",
        trend:"up", cred:"unverified",
        ref:"https://www.seroundtable.com/google-march-2026-core-update-complete-41145.html"
      },
      {
        cat:"Traffic", item:"AI Overview CTR Impact",
        note:"Position-1 organic CTR drops 58% when AI Overviews appear",
        update:"Ahrefs analysis (late 2024 data, worse than the 34.5% drop measured the year prior)",
        trend:"down", cred:"research",
        ref:"https://ahrefs.com/blog/the-great-decoupling/"
      },
    ]
  }
};
