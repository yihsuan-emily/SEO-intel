#!/usr/bin/env python3
"""
Search Intelligence Hub — Daily Intel Generator
每天自動搜尋最新 SEO/AEO/GEO 情報，產出 GitHub Issue 供 Claude 使用
"""

import os
import json
import requests
from datetime import datetime, timezone, timedelta

# ── 設定 ──────────────────────────────────────────────────────────────────────

SERPER_API_KEY = os.environ.get("SERPER_API_KEY", "")
SERPER_URL = "https://google.serper.dev/search"

# 台北時間
TZ_TAIPEI = timezone(timedelta(hours=8))
NOW = datetime.now(TZ_TAIPEI)
TODAY = NOW.strftime("%Y.%m.%d")
TODAY_LABEL = NOW.strftime("%Y/%m/%d")
WEEKDAY_ZH = ["週一","週二","週三","週四","週五","週六","週日"][NOW.weekday()]
WEEKDAY_EN = NOW.strftime("%A")

# ── 讀取上一期 data.js 取得期數 ────────────────────────────────────────────────

def get_last_issue_number():
    """從 data.js 讀取上一期的 issue 編號"""
    try:
        with open("data.js", "r", encoding="utf-8") as f:
            content = f.read()
        # 找 issue: N 的數字
        import re
        match = re.search(r'issue:\s*(\d+)', content)
        if match:
            return int(match.group(1))
    except Exception:
        pass
    return 1  # 預設從 1 開始

LAST_ISSUE = get_last_issue_number()
NEW_ISSUE = LAST_ISSUE + 1

# ── 搜尋查詢清單 ───────────────────────────────────────────────────────────────

SEARCH_QUERIES = [
    # 官方來源（最高優先）
    "Google Search Central blog update " + NOW.strftime("%B %Y"),
    "Google AI Mode search update " + NOW.strftime("%B %d %Y"),
    "site:developers.google.com/search/blog " + NOW.strftime("%Y"),

    # 演算法與政策
    "Google algorithm update " + NOW.strftime("%B %Y"),
    "Google spam policy update " + NOW.strftime("%B %Y"),

    # AEO / GEO 最新
    "answer engine optimization AEO news " + NOW.strftime("%B %Y"),
    "generative engine optimization GEO " + NOW.strftime("%B %Y"),
    "AI search citation brand visibility " + NOW.strftime("%B %Y"),

    # 平台動態
    "ChatGPT search update " + NOW.strftime("%B %Y"),
    "Perplexity AI search " + NOW.strftime("%B %Y"),
    "Google AI Overviews CTR study " + NOW.strftime("%Y"),

    # 業界媒體
    "site:searchengineland.com " + NOW.strftime("%B %Y"),
    "site:searchenginejournal.com " + NOW.strftime("%B %Y"),
    "site:seroundtable.com " + NOW.strftime("%B %d %Y"),
]

# ── 搜尋函數 ───────────────────────────────────────────────────────────────────

def search(query: str, num: int = 5) -> list[dict]:
    """呼叫 Serper API 搜尋"""
    if not SERPER_API_KEY:
        print(f"⚠️  SERPER_API_KEY 未設定，跳過搜尋: {query}")
        return []

    headers = {
        "X-API-KEY": SERPER_API_KEY,
        "Content-Type": "application/json"
    }
    payload = {
        "q": query,
        "num": num,
        "hl": "en",
        "gl": "us",
        "tbs": "qdr:w"  # 最近一週
    }

    try:
        resp = requests.post(SERPER_URL, headers=headers, json=payload, timeout=15)
        resp.raise_for_status()
        data = resp.json()
        results = []
        for item in data.get("organic", []):
            results.append({
                "title": item.get("title", ""),
                "link": item.get("link", ""),
                "snippet": item.get("snippet", ""),
                "date": item.get("date", ""),
            })
        return results
    except Exception as e:
        print(f"搜尋失敗 [{query}]: {e}")
        return []

# ── 執行搜尋 ───────────────────────────────────────────────────────────────────

print(f"🔍 開始搜尋 {TODAY} 的最新情報...")
all_results = {}

for query in SEARCH_QUERIES:
    print(f"  搜尋: {query}")
    results = search(query, num=4)
    if results:
        all_results[query] = results

# 去重（依 URL）
seen_urls = set()
unique_results = []
for query, items in all_results.items():
    for item in items:
        if item["link"] not in seen_urls:
            seen_urls.add(item["link"])
            unique_results.append({**item, "query": query})

print(f"✅ 共找到 {len(unique_results)} 筆不重複結果")

# ── 組合搜尋結果摘要 ───────────────────────────────────────────────────────────

def format_results_for_prompt(results: list[dict]) -> str:
    """將搜尋結果格式化為 prompt 用的文字"""
    lines = []
    for i, r in enumerate(results[:40], 1):  # 最多 40 筆
        lines.append(f"""
[{i}] {r['title']}
URL: {r['link']}
日期: {r.get('date', '不明')}
摘要: {r['snippet'][:200]}
""")
    return "\n".join(lines)

search_summary = format_results_for_prompt(unique_results)

# ── 讀取上期 data.js 內容（供 Claude 參考，避免重複）─────────────────────────

def get_last_data_summary() -> str:
    """讀取上期 data.js 的 cards 標題，供 Claude 避免重複"""
    try:
        with open("data.js", "r", encoding="utf-8") as f:
            content = f.read()
        import re
        titles = re.findall(r'title:\s*["\']([^"\']+)["\']', content)
        if titles:
            return "上期已涵蓋的主題（請勿重複）：\n" + "\n".join(f"- {t}" for t in titles[:10])
    except Exception:
        pass
    return "（無法讀取上期資料）"

last_data_summary = get_last_data_summary()

# ── 產出 Claude Prompt ─────────────────────────────────────────────────────────

PROMPT = f"""你是 Search Intelligence Hub 的情報分析師。今天是 {TODAY_LABEL}（{WEEKDAY_ZH}），請根據以下搜尋結果產出第 {NEW_ISSUE} 期的 data.js 和 data_en.js。

{last_data_summary}

## 今日搜尋結果（{len(unique_results)} 筆）

{search_summary}

## 你的任務

1. 從上方搜尋結果中，篩選出 **4–6 則本期最重要的新情報**（不重複上期內容）
2. 每則情報必須符合以下分類：
   - domain: "SEO" / "AEO" / "GEO"（至少各一則）
   - category: "strategy" / "execution" / "measurement" / "market"
   - credibility: "official" / "research" / "opinion" / "unverified"
3. 產出完整的 data.js（變數名稱必須是 `const INTEL_DATA`）和 data_en.js（變數名稱必須是 `const INTEL_DATA_EN`）

## 格式要求（必須完全符合）

```javascript
const INTEL_DATA = {{
  meta: {{
    date: "{TODAY}",
    weekday: "{WEEKDAY_ZH}",
    weekday_en: "{WEEKDAY_EN}",
    issue: {NEW_ISSUE},
  }},
  priority: {{
    level: "P1",
    title: "本期最重要的單一事件標題",
    body: "2–3 句說明，含信源標注與 ⚠️ 警示（如有未驗證推論）"
  }},
  cards: [
    {{
      domain: "SEO",          // SEO / AEO / GEO
      category: "strategy",   // strategy / execution / measurement / market
      credibility: "official", // official / research / opinion / unverified
      title: "情報標題",
      body: "2–4 段說明，可含 \\n\\n 換行。未驗證推論加 ⚠️",
      action: "具體可執行的行動建議",
      full: false             // 只有一則設為 true（跨全欄顯示）
    }},
    // ... 4–6 則
  ],
  actions: [
    {{ priority: "high", label: "立即",   text: "行動說明", tag: "SEO · 技術" }},
    {{ priority: "high", label: "本週",   text: "行動說明", tag: "AEO · 執行" }},
    {{ priority: "mid",  label: "本月",   text: "行動說明", tag: "GEO · 策略" }},
    {{ priority: "mid",  label: "本月",   text: "行動說明", tag: "SEO · 衡量" }},
    {{ priority: "low",  label: "Q2",     text: "行動說明", tag: "GEO · 衡量" }}
  ],
  tracker: {{
    AEO: [
      {{
        cat: "On-page", item: "項目名稱",
        note: "關鍵做法說明",
        update: "本期最新動態",
        trend: "up",        // up / down / stable
        cred: "research",   // official / research / opinion / unverified
        ref: "https://..."  // 精確文章 URL，找不到填 ""
      }},
      // ... 保留上期所有項目，本期有變動的更新 update 欄位，新增的加 🆕
    ],
    GEO: [ /* 同上結構 */ ],
    SEO: [ /* 同上結構 */ ]
  }}
}};
```
## 每期產出規則
每次產出新期的 data.js 和 data_en.js 時，同時額外輸出以下兩個 archive 格式檔案：

### archive/data_YYYY.MM.DD.js
- 內容與 data.js 完全相同
- 第一行改為：window.__ARCHIVE_INTEL_DATA = {
- 結尾不需要 const 宣告

### archive/data_en_YYYY.MM.DD.js
- 內容與 data_en.js 完全相同
- 第一行改為：window.__ARCHIVE_INTEL_DATA_EN = {
- 結尾不需要 const 宣告

### archive-index.js 更新片段
每期同時輸出一行新增內容，格式如下（供使用者手動加到 archive-index.js 最前面）：
{ value: "archive/data_YYYY.MM.DD.js", label: "YYYY.MM.DD · #N" },

日期取自 meta.date，期數取自 meta.issue。

## 信源規則
- 官方說法和研究數據才能作為策略依據
- 業界觀點需標注來源人物和身份
- 未驗證推論必須加上 ⚠️
- ref URL 必須指向具體文章，不能填首頁

## 請直接產出完整的 data.js 和 data_en.js 兩份檔案內容，不需要其他說明。
"""

# ── 產出 GitHub Issue 內容 ─────────────────────────────────────────────────────

ISSUE_TITLE = f"📊 Daily Intel — {TODAY} (Issue #{NEW_ISSUE})"

ISSUE_BODY = f"""## 🤖 今日情報已就緒 — Issue #{NEW_ISSUE}

**日期：** {TODAY_LABEL} {WEEKDAY_ZH}
**搜尋結果：** {len(unique_results)} 筆新情報
**操作時間：** 約 2 分鐘

---

## 📋 操作步驟

1. **複製下方 Prompt**，貼到 [Claude.ai](https://claude.ai) 對話框
2. Claude 會產出完整的 `data.js` 和 `data_en.js`
3. 前往你的 repo：
   - 點 `data.js` → 點鉛筆圖示（Edit）→ 全選貼上 → Commit
   - 點 `data_en.js` → 同上操作
4. GitHub Pages 約 1 分鐘後自動更新
5. 回來關閉這個 Issue ✅

---

## 📝 Claude Prompt（直接複製）

<details>
<summary>點此展開完整 Prompt（點一下展開，全選複製）</summary>

```
{PROMPT}
```

</details>

---

## 🔍 今日搜尋摘要（前 10 筆）

| # | 標題 | 來源 | 日期 |
|---|---|---|---|
""" + "\n".join(
    f"| {i+1} | [{r['title'][:50]}]({r['link']}) | {r['link'].split('/')[2]} | {r.get('date', '—')} |"
    for i, r in enumerate(unique_results[:10])
) + f"""

---

*由 GitHub Actions 自動產生 · {TODAY_LABEL} {NOW.strftime("%H:%M")} 台北時間*
"""

# ── 寫入檔案供 GitHub Actions 讀取 ────────────────────────────────────────────

with open("issue_body.md", "w", encoding="utf-8") as f:
    f.write(ISSUE_BODY)

# 設定 GitHub Actions 環境變數（供 workflow 使用）
github_env = os.environ.get("GITHUB_ENV", "")
if github_env:
    with open(github_env, "a") as f:
        f.write(f"ISSUE_TITLE={ISSUE_TITLE}\n")

print(f"✅ Issue 內容已產出")
print(f"   標題：{ISSUE_TITLE}")
print(f"   搜尋結果：{len(unique_results)} 筆")
