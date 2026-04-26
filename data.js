// ═══════════════════════════════════════════════
// 每日更新這個檔案就好，index.html 不需要動
// 每次 Claude 產出新情報，會給你新版的 data.js
// ═══════════════════════════════════════════════

const INTEL_DATA = {

  meta: {
    date: "2026.04.26",
    weekday: "週日",
    issue: 1,
  },

  priority: {
    level: "P1",
    title: "Google March 2026 Core Update 已完成，現在是分析黃金窗口",
    body: "更新4月8日完成，Google 建議等一週後再分析。現在（4月26日）是最佳分析時機，數據已穩定。"
  },

  cards: [
    {
      domain: "SEO",
      category: "strategy",      // strategy | execution | measurement | market
      credibility: "official",   // official | research | opinion | unverified
      title: "March 2026 Core Update：AI 生成內容的新標準",
      body: "更新懲罰「大規模生產、缺乏人工編輯監督」的內容。分析師認為部署了語義過濾機制，能識別 AI 替代人工 vs AI 輔助人工的差異。前十名有90.7%的頁面位置發生變動。\n\n⚠️ 「Gemini 4.0 語義過濾器」是推論，非官方確認。",
      action: "逐頁自問：「這頁有什麼是前十名沒有的？」沒答案 = 資訊增益問題，不是技術問題",
      full: false
    },
    {
      domain: "AEO",
      category: "execution",
      credibility: "research",
      title: "ChatGPT 引用機制解析：88% 引用 URL 來自搜尋結果",
      body: "Ahrefs 研究：ChatGPT 只在34.5%的查詢中啟用搜尋功能，引用的88%網址直接來自搜尋。品牌透過第三方來源被引用的機率是自有網域的6.5倍。AI 只引用 HTML 頁面，忽略 .md 格式。",
      action: "在內容第一句給出完整答案；立即加入 FAQ schema；確保 robots.txt 允許 AI 爬蟲",
      full: false
    },
    {
      domain: "GEO",
      category: "market",
      credibility: "research",
      title: "AI 搜尋市場份額：Gemini 快速追趕 ChatGPT",
      body: "Similarweb（2026年2月）：ChatGPT 從75.7%跌至61.7%；Gemini 從5.7%急升至24.4%；Claude 從1.7%升至3.3%；Grok 3.4%。GEO 優化目標平台的優先順序正在改變。",
      action: "GEO 策略不能只針對 ChatGPT，Gemini 的優化邏輯需要同步布局",
      full: false
    },
    {
      domain: "GEO",
      category: "strategy",
      credibility: "opinion",
      title: "Google 內部搶 GEO：GEO Partner Manager 職缺曝光",
      body: "Google 在大客戶銷售團隊新設 GEO Partner Manager，職責包括「影響合作夥伴將 Google 旗下平台優先納入工具和方法論」。業界解讀：Google 正將 GEO 視為 PR/影響力層面的競爭。\n\n⚠️ Google 未公開說明此職缺背後意圖，以上為業界詮釋。",
      action: "追蹤此職缺後續發展；理解 Google 可能主動塑造 GEO 生態系統的動機",
      full: false
    },
    {
      domain: "GEO",
      category: "measurement",
      credibility: "research",
      title: "GEO 工具市場成熟化：免費到企業級工具全覽",
      body: "2026年4月 GEO 工具市場：Profound（企業版，$499/月）、Adobe LLM Optimizer（Adobe EC 用戶）、Semrush AI Visibility Toolkit（去年9月推出）、Scrunch（中市場，$250/月）。HubSpot AEO Grader 仍免費，覆蓋 ChatGPT/Perplexity/Gemini。Reddit、LinkedIn、YouTube 是主要 LLM 最常引用的平台。",
      action: "先用 HubSpot AEO Grader 做免費基線評估；有預算再考慮 Scrunch 或 Semrush 附加模組",
      full: true
    }
  ],

  actions: [
    { priority: "high", label: "立即", text: "用 Google Search Console 比對 3月27日前後的流量變化，找出受 Core Update 影響的頁面", tag: "SEO · 衡量" },
    { priority: "high", label: "本週", text: "為最重要的5頁內容加入 FAQ schema 標記", tag: "AEO · 執行" },
    { priority: "mid",  label: "本月", text: "用 HubSpot AEO Grader 跑一次基線評估，記錄目前在 AI 搜尋的能見度", tag: "GEO · 衡量" },
    { priority: "mid",  label: "本月", text: "確認 robots.txt 允許主要 AI 爬蟲（GPTBot, Google-Extended, PerplexityBot）", tag: "AEO · 執行" },
    { priority: "low",  label: "長期", text: "在 Reddit、LinkedIn 建立品牌存在感，增加第三方引用密度", tag: "GEO · 策略" }
  ],

  // 追蹤工具庫新增/更新的項目（只列本期有變動的）
  tracker_updates: [
    {
      table: "AEO",
      category: "On-page",
      item: "Content Format (HTML)",
      note: "OtterlyAI 實驗確認 AI 忽略 Markdown 頁面",
      trend: "stable",
      credibility: "research",
      isNew: true
    },
    {
      table: "GEO",
      category: "量測",
      item: "Citation Stability",
      note: "40-60% 引用來源每月更換（eMarketer）",
      trend: "stable",
      credibility: "research",
      isNew: true
    }
  ]

};
