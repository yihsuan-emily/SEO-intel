// ═══════════════════════════════════════════════
// 每日更新這個檔案就好，index.html 不需要動
// 每次 Claude 產出新情報，會給你新版的 data.js
// ═══════════════════════════════════════════════

window.__ARCHIVE_INTEL_DATA = {

  meta: {
    date: "2026.04.26",
    weekday: "週日",
    weekday_en: "Sunday",
    issue: 1,
  },

  priority: {
    level: "P1",
    title: "Google March 2026 Core Update 已完成，現在是分析黃金窗口",
    body: "更新4月8日完成，Google 建議等一週後再分析。現在（4月26日）是最佳分析時機，數據已穩定。"
  },

  cards: [
    {
      domain: "SEO", category: "strategy", credibility: "official",
      title: "March 2026 Core Update：AI 生成內容的新標準",
      body: "更新懲罰「大規模生產、缺乏人工編輯監督」的內容。分析師認為部署了語義過濾機制，能識別 AI 替代人工 vs AI 輔助人工的差異。前十名有90.7%的頁面位置發生變動。\n\n⚠️ 「Gemini 4.0 語義過濾器」是推論，非官方確認。",
      action: "逐頁自問：「這頁有什麼是前十名沒有的？」沒答案 = 資訊增益問題，不是技術問題",
      full: false
    },
    {
      domain: "AEO", category: "execution", credibility: "research",
      title: "ChatGPT 引用機制解析：88% 引用 URL 來自搜尋結果",
      body: "Ahrefs 研究：ChatGPT 只在34.5%的查詢中啟用搜尋功能，引用的88%網址直接來自搜尋。品牌透過第三方來源被引用的機率是自有網域的6.5倍（AirOps, 2025年10月）。",
      action: "在內容第一句給出完整答案；立即加入 FAQ schema；確保 robots.txt 允許 AI 爬蟲",
      full: false
    },
    {
      domain: "GEO", category: "market", credibility: "research",
      title: "AI 搜尋市場份額：Gemini 快速追趕 ChatGPT",
      body: "Similarweb（2026年2月）：ChatGPT 從75.7%跌至61.7%；Gemini 從5.7%急升至24.4%；Claude 從1.7%升至3.3%；Grok 3.4%。GEO 優化目標平台的優先順序正在改變。",
      action: "GEO 策略不能只針對 ChatGPT，Gemini 的優化邏輯需要同步布局",
      full: false
    },
    {
      domain: "GEO", category: "strategy", credibility: "opinion",
      title: "Google 內部搶 GEO：GEO Partner Manager 職缺曝光",
      body: "Google 在大客戶銷售團隊新設 GEO Partner Manager，職責包括「影響合作夥伴將 Google 旗下平台優先納入工具和方法論」。業界解讀：Google 正將 GEO 視為 PR/影響力層面的競爭。\n\n⚠️ Google 未公開說明此職缺背後意圖，以上為業界詮釋。",
      action: "追蹤此職缺後續發展；理解 Google 可能主動塑造 GEO 生態系統的動機",
      full: false
    },
    {
      domain: "GEO", category: "measurement", credibility: "research",
      title: "GEO 工具市場成熟化：免費到企業級工具全覽",
      body: "2026年4月 GEO 工具市場：Profound（企業版，$499/月）、Adobe LLM Optimizer、Semrush AI Visibility Toolkit、Scrunch（中市場，$250/月）。HubSpot AEO Grader 仍免費。Reddit、LinkedIn、YouTube 是主要 LLM 最常引用的平台。",
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

  tracker: {
    AEO: [
      {
        cat:"On-page", item:"Extractability",
        note:"開頭一句給完整答案；每段可獨立成立",
        update:"Answer-first 內容與較高 AI 引用率相關（Ahrefs, 2026）",
        trend:"up", cred:"research",
        ref:"https://ahrefs.com/blog/the-great-decoupling/"
      },
      {
        cat:"On-page", item:"Schema Markup",
        note:"FAQ / How-to / Article schema",
        update:"FAQ schema 使 OtterlyAI 自身網站 AI 引用增加 350%（OtterlyAI, 2026）",
        trend:"up", cred:"research",
        ref:"https://otterly.ai/blog/how-to-optimize-content-for-ai-search/"
      },
      {
        cat:"On-page", item:"Relevance",
        note:"語義豐富、涵蓋完整意圖",
        update:"Google 排名系統評估主題相關性與意圖，而非關鍵字匹配（Google Search Central）",
        trend:"up", cred:"official",
        ref:"https://developers.google.com/search/blog"
      },
      {
        cat:"On-page", item:"Content Format (HTML) 🆕",
        note:"HTML 與 Markdown 對 AI 爬蟲流量無顯著統計差異（RCT, 2026年2月）",
        update:"Profound 對381頁進行隨機對照實驗，中位數差異僅多1次爬取，統計上不顯著",
        trend:"stable", cred:"research",
        ref:"https://www.tryprofound.com/blog/does-markdown-increase-ai-bot-traffic"
      },
      {
        cat:"Off-page", item:"Citation Density",
        note:"品牌透過第三方來源被引用的機率是自有網域的6.5倍（跨 AI 搜尋平台，AirOps, 2025年10月）⚠️ 轉引數據",
        update:"第三方引用：自有內容以外的數位公關、媒體露出是核心槓桿",
        trend:"up", cred:"research",
        ref:"https://www.airops.com/blog/answer-engine-optimization-tools"
      },
      {
        cat:"Off-page", item:"Platform Presence",
        note:"LinkedIn 領跑專業查詢；YouTube 領跑 AI Overviews；Reddit 領跑 ChatGPT 引用",
        update:"各平台引用來源有差異，非統一排名（Ahrefs / Profound, 2026）",
        trend:"up", cred:"research",
        ref:"https://ahrefs.com/blog/most-cited-domains-in-chatgpt/"
      },
      {
        cat:"Authority", item:"E-E-A-T",
        note:"作者資歷、第一手經驗、可引用的觀點",
        update:"March 2026 Core Update 後，業界分析認為缺乏人工監督的 AI 內容排名下滑（業界觀點）",
        trend:"up", cred:"opinion",
        ref:"https://www.seroundtable.com/google-march-2026-core-update-complete-41145.html"
      },
      {
        cat:"Authority", item:"Domain Authority",
        note:"傳統 DA 對 AI 引用影響有限",
        update:"AI Overview 引用不要求前十名排名，內容相關性與結構獨立發揮作用（Ahrefs, 2026）",
        trend:"down", cred:"research",
        ref:"https://ahrefs.com/blog/ai-overview-citations-top-10/"
      },
      {
        cat:"Technical", item:"Robots.txt",
        note:"明確允許 GPTBot / Google-Extended / ClaudeBot / PerplexityBot",
        update:"基礎配置，應立即確認（Google Search Central）",
        trend:"stable", cred:"official",
        ref:"https://developers.google.com/search/docs/crawling-indexing/overview"
      },
      {
        cat:"Technical", item:"llms.txt",
        note:"新興格式，類似 robots.txt for LLMs",
        update:"OtterlyAI 90天實驗：僅0.1% AI 爬蟲流量觸及 llms.txt，對 AI 引用無顯著影響",
        trend:"stable", cred:"unverified",
        ref:"https://otterly.ai/blog/the-llms-txt-experiment/"
      },
    ],
    GEO: [
      {
        cat:"平台布局", item:"ChatGPT",
        note:"約34.5% 查詢啟用即時搜尋，其餘依賴訓練資料",
        update:"市場份額跌至61.7%（Similarweb, 2026年2月）⚠️ 原始報告需付費存取",
        trend:"down", cred:"research",
        ref:""
      },
      {
        cat:"平台布局", item:"Gemini",
        note:"Google AI Overviews 優化邏輯近似傳統 SEO",
        update:"市場份額急升至24.4%（Similarweb, 2026年2月）⚠️ 原始報告需付費存取",
        trend:"up", cred:"research",
        ref:""
      },
      {
        cat:"平台布局", item:"Perplexity",
        note:"原始資料引用比例高；每則回應平均8.79個引用",
        update:"份額穩定 ~1.8%；citations-first 設計使其最接近傳統 SEO 排名邏輯",
        trend:"stable", cred:"research",
        ref:"https://ahrefs.com/blog/ai-search-overlap/"
      },
      {
        cat:"量測", item:"Brand Mention Rate",
        note:"追蹤品牌在 AI 回應中的出現頻率",
        update:"HubSpot AEO Grader 提供免費基線測試",
        trend:"up", cred:"opinion",
        ref:"https://www.hubspot.com/ai-search-grader"
      },
      {
        cat:"量測", item:"Citation Stability 🆕",
        note:"40-60% 引用來源每月更換",
        update:"⚠️ 原始來源未驗證（轉引自彙整頁，聲稱來自 eMarketer）；GEO 能見度遠不如 SEO 穩定為業界共識",
        trend:"stable", cred:"unverified",
        ref:""
      },
      {
        cat:"內容策略", item:"Information Gain",
        note:"提供他人沒有的觀點、數據、第一手經驗",
        update:"Google Helpful Content 系統明確強調資訊增益；AI 引用偏好原創資料",
        trend:"up", cred:"official",
        ref:"https://developers.google.com/search/docs/appearance/helpful-content-system"
      },
    ],
    SEO: [
      {
        cat:"演算法", item:"Core Update 節奏",
        note:"2026 Q1 出現三個更新（Spam Update + Core Update）",
        update:"March Core Update 4月8日完成（Google Search Status Dashboard 官方確認）",
        trend:"stable", cred:"official",
        ref:"https://developers.google.com/search/blog"
      },
      {
        cat:"排名信號", item:"Helpful Content",
        note:"人工監督 + AI 輔助 > AI 獨立生產",
        update:"Core Update 後業界觀察：AI 替代人工的內容排名下滑（業界觀點，非 Google 官方措辭）",
        trend:"up", cred:"opinion",
        ref:"https://developers.google.com/search/docs/appearance/helpful-content-system"
      },
      {
        cat:"排名信號", item:"Page-level Authority",
        note:"弱內容即使在強網域也可能被懲罰",
        update:"⚠️ 未驗證推論：分析師觀察，非 Google 官方確認的機制",
        trend:"up", cred:"unverified",
        ref:"https://www.seroundtable.com/google-march-2026-core-update-complete-41145.html"
      },
      {
        cat:"流量", item:"AI Overview CTR 影響",
        note:"AI Overviews 出現時，第一名有機排名 CTR 下降 58%",
        update:"Ahrefs 分析（2024年底數據，比前一年34.5%的下降幅度更嚴重）",
        trend:"down", cred:"research",
        ref:"https://ahrefs.com/blog/the-great-decoupling/"
      },
    ]
  }
};
