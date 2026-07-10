(() => {
  const translations = {
    en: {
      meta: { title: "Lab · Bright Raven Research Lab", description: "Bright Raven's workshop for cognitive tools, thinking visualizations, and interactive prototypes." },
      nav: { skip: "Skip to content", label: "Site navigation", backLabel: "Back to Bright Raven World", languageLabel: "Switch language" },
      hero: { tag: "RESEARCH LAB · ACTIVE", tagLabel: "Lab status: active", subtitle: "Bright Raven Research Lab — an incubator for cognitive tools, thinking visualizations, and interactive prototypes.", lede: "This is where unfinished but worthwhile things become visible. Each instrument is a way of presenting thought through form, interaction, and structure before it earns its own home." },
      sections: { active: "Active experiments", activeCount: "3 instruments", coming: "In incubation", comingCount: "coming soon" },
      cards: {
        mandaraLabel: "Mandara — an interactive atlas of 23 thinking paradigms",
        mandaraDesc: "An interactive atlas of 23 thinking paradigms. Four paradigms already have deep dives; use Kits, Sessions, the Combo Workbench, and context filters to assemble a reading path.",
        asagiriLabel: "Asagiri — a daily research and opportunity observatory",
        asagiriDesc: "A daily research and opportunity observatory built from CLI agents, local search, and file-based prompts, keeping research, filtering, and judgment visible.",
        shioriLabel: "Shiori — an AI-era self-check with a deeper reading map",
        shioriDesc: "An AI-era self-check for noticing which judgment, voice, review, meaning, and ownership should remain human-first. The reading map offers the deeper theory."
      },
      coming: { copy: "More instruments are incubating. They graduate only when their structure is stable, their documentation is complete, and people have used them." },
      footer: { brand: "Bright Raven Research Lab · Workshop", partOf: "part of", source: "source on GitHub" }
    },
    ja: {
      meta: { title: "Lab · Bright Raven 研究工房", description: "Bright Raven の認知ツール、思考の可視化、対話的プロトタイプのための工房。" },
      nav: { skip: "本文へ移動", label: "サイトナビゲーション", backLabel: "Bright Raven World に戻る", languageLabel: "言語を切り替える" },
      hero: { tag: "RESEARCH LAB · ACTIVE", tagLabel: "Lab の状態：稼働中", subtitle: "Bright Raven Research Lab — 認知ツール、思考の可視化、対話的プロトタイプを育てる場所。", lede: "未完成でも、見る価値のあるものをここで公開します。一つひとつの instrument は、形、対話、構造を通して思考を見せる試みです。自分の居場所を持つ前に、ここで育ちます。" },
      sections: { active: "進行中の実験", activeCount: "3 instruments", coming: "育成中", comingCount: "coming soon" },
      cards: {
        mandaraLabel: "Mandara — 23 の思考パラダイムの対話的アトラス",
        mandaraDesc: "23 の思考パラダイムをたどる対話的アトラス。四つの深掘りを起点に、Kit、Session、Combo Workbench、文脈フィルターで読む道筋を組み立てます。",
        asagiriLabel: "Asagiri — 日々のリサーチと機会観測所",
        asagiriDesc: "CLI agents、ローカル検索、ファイルベースの prompts で構成された、日々のリサーチと機会観測所。調査、選別、判断を見えるままに保ちます。",
        shioriLabel: "Shiori — AI 時代の自己点検と深い読書マップ",
        shioriDesc: "判断、声、review、意味、ownership のどこを人の側に残すかを見つける AI 時代の自己点検。読書マップはその背景理論をたどれます。"
      },
      coming: { copy: "さらに多くの instruments を育成中です。構造が安定し、文書が整い、人に使われて初めて卒業します。" },
      footer: { brand: "Bright Raven Research Lab · 工房", partOf: "part of", source: "GitHub のソース" }
    },
    "zh-Hans": {
      meta: { title: "Lab · Bright Raven 研究工坊", description: "Bright Raven 的认知工具、思考可视化与互动原型工坊。" },
      nav: { skip: "跳到主要内容", label: "网站导航", backLabel: "返回 Bright Raven World", languageLabel: "切换语言" },
      hero: { tag: "RESEARCH LAB · ACTIVE", tagLabel: "实验室状态：运行中", subtitle: "Bright Raven Research Lab — 认知工具、思考可视化与互动原型的孵化地。", lede: "这里让尚未成熟、却值得被看见的东西公开出现。每个 instrument 都在用形式、互动与结构呈现思考，在拥有自己的位置之前先在这里成长。" },
      sections: { active: "进行中的实验", activeCount: "3 个 instruments", coming: "孵化中", comingCount: "coming soon" },
      cards: {
        mandaraLabel: "Mandara — 23 个思考范式的互动地图",
        mandaraDesc: "23 个思考范式的互动地图。四个范式已有深度阅读；通过 Kit、Session、Combo Workbench 与情境筛选，组合自己的阅读路径。",
        asagiriLabel: "Asagiri — 每日研究与机会观察站",
        asagiriDesc: "由 CLI agents、本地搜索与文件式 prompts 组成的每日研究与机会观察工具，让研究、筛选与判断始终可见。",
        shioriLabel: "Shiori — AI 时代的自我检查与深入阅读地图",
        shioriDesc: "用于辨认哪些判断、声音、审查、意义与责任仍该留在人手里的 AI 时代自我检查；阅读地图提供更深的理论脉络。"
      },
      coming: { copy: "更多 instruments 正在孵化。只有结构稳定、文档完整、经过真实使用后，它们才会毕业。" },
      footer: { brand: "Bright Raven Research Lab · 工坊", partOf: "part of", source: "GitHub 源码" }
    },
    "zh-Hant": {
      meta: { title: "Lab · Bright Raven Research Lab", description: "Bright Raven 的認知工具、思考視覺化與互動原型工房。" },
      nav: { skip: "跳到主要內容", label: "網站導覽", backLabel: "返回 Bright Raven World", languageLabel: "切換語言" },
      hero: { tag: "RESEARCH LAB · ACTIVE", tagLabel: "實驗室狀態：運作中", subtitle: "Bright Raven Research Lab — 認知工具、思考視覺化、互動原型的孵化地。", lede: "在這裡，尚未成熟但值得被看見的東西會先公開出現。每件 instrument 都在用形式、互動與結構呈現思考，在擁有自己的位置之前先在這裡成長。" },
      sections: { active: "正在進行的實驗", activeCount: "3 個 instruments", coming: "孵化中", comingCount: "coming soon" },
      cards: {
        mandaraLabel: "Mandara — 23 個思考典範的互動式地圖",
        mandaraDesc: "23 個思考典範的互動式地圖。四個典範已有深度閱讀；透過 Kit、Session、Combo Workbench 與情境篩選，組合自己的閱讀路徑。",
        asagiriLabel: "Asagiri — 每日研究與機會觀察站",
        asagiriDesc: "由 CLI agents、本地搜尋與檔案式 prompts 組成的每日研究與機會觀察工具，讓研究、篩選與判斷始終可見。",
        shioriLabel: "Shiori — AI 時代的自我檢測與深入閱讀地圖",
        shioriDesc: "用來辨認哪些判斷、聲音、審查、意義與責任仍該留在人手裡的 AI 時代自我檢測；閱讀地圖提供更深的理論脈絡。"
      },
      coming: { copy: "更多 instruments 正在孵化。只有結構穩定、文件完備、經過真實使用後，它們才會畢業。" },
      footer: { brand: "Bright Raven Research Lab · 工房", partOf: "part of", source: "GitHub 原始碼" }
    }
  };

  const supportedLocales = Object.keys(translations);
  const storageKey = "bright-raven-lab-locale";
  const localeButtons = [...document.querySelectorAll("[data-locale]")];

  const getByPath = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
  const detectLocale = () => {
    const saved = window.localStorage?.getItem(storageKey);
    if (supportedLocales.includes(saved)) return saved;
    const language = [...(navigator.languages || []), navigator.language].find(Boolean) || "";
    if (language.toLowerCase().startsWith("ja")) return "ja";
    if (language.toLowerCase().startsWith("zh-cn") || language.toLowerCase().startsWith("zh-sg")) return "zh-Hans";
    if (language.toLowerCase().startsWith("zh")) return "zh-Hant";
    return "en";
  };

  function applyLocale(locale, persist = false) {
    if (!supportedLocales.includes(locale)) return;
    const copy = translations[locale];
    document.documentElement.lang = locale;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = getByPath(copy, element.dataset.i18n) || "";
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", getByPath(copy, element.dataset.i18nAriaLabel) || "");
    });
    localeButtons.forEach((button) => {
      const active = button.dataset.locale === locale;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (persist) window.localStorage?.setItem(storageKey, locale);
  }

  localeButtons.forEach((button) => button.addEventListener("click", () => applyLocale(button.dataset.locale, true)));
  applyLocale(detectLocale());
})();
