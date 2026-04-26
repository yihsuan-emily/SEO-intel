const intelligenceData_en = {

  meta: {
    updated: "2026.04.26",
    issue: 1,
    language: "en"
  },

  priority: {
    label: "This Week's Top Priority",
    title: "Back Button Hijacking Policy: 51 Days to Enforcement",
    body: "Google officially announced a new spam policy on April 13, 2026. Sites that manipulate browser back navigation face manual actions or automated demotions starting June 15. Third-party ad scripts and SPA routers are the most common culprits — site owners are responsible even if the behavior originates from included libraries.",
    tag: "SEO · Official",
    credibility: "official",
    source: "Google Search Central, April 13, 2026"
  },

  cards: [
    {
      scope: "SEO",
      type: "Algorithm",
      credibility: "official",
      title: "March 2026 Core Update Completed — YMYL Hit Hardest",
      body: "Google's March 2026 broad core update rolled out March 27 and completed April 8 (12 days 4 hours). Over 55% of websites experienced noticeable ranking changes. YMYL verticals — health, legal, home services — saw the largest shifts. Sites with templated location pages and thin content lost the most ground. Google recommends waiting until April 15 before drawing conclusions from Search Console data.",
      tag: "SEO · Algorithm",
      source: "SE Roundtable / Google Search Status Dashboard, April 8, 2026"
    },
    {
      scope: "SEO",
      type: "AI Overview CTR",
      credibility: "research",
      title: "AI Overviews Now Appear in ~48% of Queries — Position-1 CTR Down 58%",
      body: "AI Overviews now trigger for approximately 48% of all search queries as of March 2026, up from 34.5% in December 2025. Ahrefs data shows position-1 organic CTR has dropped 58% in query sets where AI Overviews appear. Google AI Mode has reached 75 million daily active users, with ~93% of sessions ending without a click. The 'Great Decoupling' — impressions up, clicks down — is now observable across virtually every GSC account.",
      tag: "SEO · Measure",
      source: "Ahrefs, March 2026; Search Engine Journal, April 2026"
    },
    {
      scope: "AEO",
      type: "Citation Research",
      credibility: "research",
      title: "AI Overview Citation Source: Only 38% From Top-10 — YouTube Fills the Gap",
      body: "Ahrefs analyzed 863,000 keyword SERPs and 4 million AI Overview URLs. Only 38% of cited pages rank in the top 10 for the same query — down sharply from 76% in July 2025. The gap is driven by Google's query fan-out (splitting one search into multiple sub-queries) and the January 2026 upgrade to Gemini 3, which replaced ~42% of previously cited domains. Among citations outside the top 100, 18.2% are YouTube URLs. YouTube is now the most-cited domain in AI Overviews and has grown 34% in six months.",
      tag: "AEO · Research",
      source: "Ahrefs Brand Radar, February 2026"
    },
    {
      scope: "GEO",
      type: "Platform Insight",
      credibility: "research",
      title: "GPT-5.3 vs GPT-5.4: Two Parallel Citation Universes",
      body: "A March 2026 Writesonic study of 1,161 ChatGPT citations found that GPT-5.4 (premium thinking model) cites brand websites 56% of the time, while GPT-5.3 (free default) cites them only 8% of the time — a 7x gap. GPT-5.4 decomposes each prompt into an average of 8.5 sub-queries including direct site: operator queries. GPT-5.3 relies primarily on third-party publishers (Forbes, TechRadar, Reddit). GEO strategies must now run two parallel tracks: editorial PR for GPT-5.3 visibility, and brand-site technical readiness for GPT-5.4.",
      tag: "GEO · Strategy",
      source: "Writesonic ChatGPT Citation Study, March 2026; bradleebartlett.com"
    },
    {
      scope: "AEO",
      type: "Content Strategy",
      credibility: "research",
      title: "Answer Placement Rule: 44.2% of LLM Citations Come From the First 30% of Text",
      body: "Growth Memo's February 2026 analysis of LLM citation patterns found that 44.2% of all LLM citations originate from the first 30% of an article. 31.1% from the middle third, 24.7% from the final third. Additionally, AI-surfaced URLs are 25.7% fresher than traditional search results, confirming that recency matters for AI citation selection. The actionable principle: lead with your answer, not your introduction.",
      tag: "AEO · Execution",
      source: "Growth Memo, February 2026; Frase.io analysis, April 2026"
    }
  ],

  actions: [
    {
      priority: "high",
      label: "By June 15",
      text: "Audit your site for back button hijacking: check ad scripts, popup tools, and SPA routing logic. Google enforcement begins June 15 — manual spam actions are the consequence of non-compliance.",
      tag: "SEO · Execution"
    },
    {
      priority: "high",
      label: "This Week",
      text: "Run a GEO baseline audit: pick 10–15 priority queries and test citation presence across ChatGPT, Perplexity, Claude, and Gemini. Document where you appear vs. where competitors appear instead. This is your share-of-model benchmark.",
      tag: "GEO · Measure"
    },
    {
      priority: "mid",
      label: "This Week",
      text: "Restructure your top 5 content pages: move the direct answer to the first 1–2 sentences of each section. Add FAQ schema with Q&A pairs. AI engines extract from early content — burying the answer reduces citation probability significantly.",
      tag: "AEO · Execution"
    },
    {
      priority: "mid",
      label: "This Month",
      text: "For GPT-5.3 visibility: pursue editorial mentions in authoritative third-party publications. For GPT-5.4 visibility: ensure key pages (pricing, features, comparisons) are in static server-rendered HTML — not JavaScript-injected components.",
      tag: "GEO · Strategy"
    },
    {
      priority: "low",
      label: "Long-term",
      text: "Build a YouTube content presence. YouTube is now the most-cited domain in Google AI Overviews (up 34% in 6 months) and Ahrefs' brand research identifies YouTube mentions as the strongest correlating factor with AI Overview visibility — stronger than backlinks.",
      tag: "GEO · Strategy"
    }
  ],

  tracker_updates: [
    {
      table: "SEO",
      category: "Algorithm",
      item: "March 2026 Broad Core Update",
      note: "Completed April 8, 2026. 12 days 4 hours rollout. 55%+ of sites impacted. YMYL and templated content hit hardest. Analysis window opens April 15.",
      trend: "new",
      credibility: "official",
      isNew: true
    },
    {
      table: "SEO",
      category: "Spam Policy",
      item: "Back Button Hijacking Policy",
      note: "Official Google spam policy announced April 13, 2026. Enforcement June 15, 2026. Manual actions or automated demotions. Third-party library responsibility falls on site owner.",
      trend: "new",
      credibility: "official",
      isNew: true
    },
    {
      table: "AEO",
      category: "On-page",
      item: "Answer Placement (First 30%)",
      note: "44.2% of LLM citations originate from the first 30% of article text (Growth Memo, Feb 2026). Answer-first structure is the highest-leverage on-page AEO action.",
      trend: "stable",
      credibility: "research",
      isNew: true
    },
    {
      table: "SEO",
      category: "AI Overview",
      item: "Citation-Ranking Decoupling",
      note: "Top-10 citation share: 76% (Jul 2025) → 38% (Feb 2026). Gemini 3 upgrade + fan-out query expansion are primary causes. YouTube now #1 cited domain in AI Overviews.",
      trend: "deteriorating",
      credibility: "research",
      isNew: true
    },
    {
      table: "GEO",
      category: "Platform Presence",
      item: "GPT-5.3 vs GPT-5.4 Citation Divergence",
      note: "Brand website citation rate: 56% (GPT-5.4) vs 8% (GPT-5.3). Two parallel GEO tracks required: digital PR for 5.3, brand-site technical readiness for 5.4. Only 7% citation overlap between models.",
      trend: "new",
      credibility: "research",
      isNew: true
    },
    {
      table: "GEO",
      category: "Measurement",
      item: "Share of Model",
      note: "Emerging KPI replacing Share of Voice. Measures % of target prompts where brand is cited across ChatGPT, Perplexity, Claude, Gemini. Recommended baseline: run 20–30 representative prompts weekly.",
      trend: "improving",
      credibility: "industry",
      isNew: true
    }
  ]

};
