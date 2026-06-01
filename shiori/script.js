const papers = [
  {
    id: "merleau-1945",
    axis: "A",
    year: "1945",
    authors: "Merleau-Ponty",
    short: "1945 Merleau-Ponty",
    title: "Phenomenology of Perception",
    venue: "Book",
    topic: "知覺是身體在世界中的主動取向",
    description: "現象學起點:知覺不是被動接收資料,而是身體在世界中帶著意向、姿態與可行動性去組織經驗。",
    implicationType: "延伸推論",
    implication: "提醒 AI 介面不要把使用者當成接收結論的容器。好的工具要保留人的身體化判斷、情境感與可行動性。",
    path: "C:/Code/human-intuition/done/1945-Merleau-PhenomenologyOfPerception/output.md",
    x: 125,
    y: 132,
    tilt: "-1.2deg"
  },
  {
    id: "friston-2010",
    axis: "A",
    year: "2010",
    authors: "Friston",
    short: "2010 Friston",
    title: "The free-energy principle: a unified brain theory?",
    venue: "Paper",
    topic: "free-energy principle 作為統一腦理論",
    description: "把大腦理解成持續最小化 surprise / prediction error 的系統,用 generative model 來維持對世界的可行解釋。",
    implicationType: "延伸推論",
    implication: "AI 工具輸出的每個信號都會改變使用者的 likelihood 權重。設計上要控制 evidence 強度,不要把單一模型輸出包裝成過度確定的世界。",
    path: "C:/Code/human-intuition/done/2010-Friston-FreeEnergyPrinciple/output.md",
    x: 305,
    y: 96,
    tilt: "1deg"
  },
  {
    id: "friston-2013",
    axis: "A",
    year: "2013",
    authors: "Friston+",
    short: "2013 Friston+",
    title: "The Computational Anatomy of Psychosis",
    venue: "Paper",
    topic: "psychosis 作為 precision / prediction error 失衡",
    description: "用 predictive coding 解釋 psychosis:當 precision weighting 與 prediction error 處理失衡,世界會被錯誤地賦予意義。",
    implicationType: "延伸推論",
    implication: "AI explanation 也會改變 precision。若 UI 把錯誤線索做得太權威,使用者可能不是不理性,而是被介面錯誤地調高了某些 evidence 的權重。",
    path: "C:/Code/human-intuition/done/2013-Friston-ComputationalAnatomyOfPsychosis/output.md",
    x: 500,
    y: 88,
    tilt: "-0.6deg"
  },
  {
    id: "hohwy-2013",
    axis: "A",
    year: "2013",
    authors: "Hohwy",
    short: "2013 Hohwy",
    title: "The Predictive Mind",
    venue: "Oxford University Press",
    topic: "大腦是 hierarchical Bayesian inference engine",
    description: "把心智理解為 prediction-error minimization 的層級系統。人不是單純接收 AI 結論,而會自動對它做 inference。",
    implicationType: "延伸推論",
    implication: "這是 Shiori 的本體論支柱:AI 輸出進入人腦後會被重新推論。工具要供應 evidence,讓人腦自己校準 posterior。",
    path: "C:/Code/human-intuition/done/2013-Hohwy-PredictiveMind/output.md",
    x: 695,
    y: 96,
    tilt: "0.8deg",
    sequence: 3,
    reason: "開始理解 pathway 為何存在:人會把 AI output 放進自己的 inference engine。"
  },
  {
    id: "clark-2016",
    axis: "A",
    year: "2016",
    authors: "Clark",
    short: "2016 Clark",
    title: "Surfing Uncertainty",
    venue: "Book",
    topic: "predictive processing 與 embodied / 4E cognition",
    description: "把 predictive processing 接到 action、body、environment。與 Hohwy 的 internalism 形成姊妹作與張力。",
    implicationType: "延伸推論",
    implication: "提醒 AI-assist 設計不能只看腦內模型。工具、環境與工作流本身也在塑造 inference,所以 evidence 應嵌入任務現場。",
    path: "C:/Code/human-intuition/done/2016-Clark-SurfingUncertainty/output.md",
    x: 875,
    y: 132,
    tilt: "-1deg"
  },
  {
    id: "hohwy-2016",
    axis: "A",
    year: "2016",
    authors: "Hohwy",
    short: "2016 Hohwy",
    title: "The Self-Evidencing Brain",
    venue: "Paper",
    topic: "organism 作為 self-evidencing model",
    description: "把生命體理解為主動尋找證據來維持自身模型的系統,往 ontology 與 self-modeling 的方向推進。",
    implicationType: "延伸推論",
    implication: "對個人工具設計的含義是:人會尋找能維持自我模型的 evidence。AI 工具若直接替人下結論,會削弱這個 self-evidencing 過程。",
    path: "C:/Code/human-intuition/done/2016-Hohwy-SelfEvidencingBrain/output.md",
    x: 210,
    y: 242,
    tilt: "0.7deg",
    sequence: 7,
    reason: "在 K&K / Sunday 之後回到 self-evidencing,把直覺校準接回主體模型。"
  },
  {
    id: "barrett-2017",
    axis: "A",
    year: "2017",
    authors: "Barrett",
    short: "2017 Barrett",
    title: "How Emotions Are Made",
    venue: "Book",
    topic: "emotion 是 predictive construction",
    description: "把情緒視為大腦對身體狀態與情境的主動建構,而不是固定內建反應。",
    implicationType: "延伸推論",
    implication: "AI 介面會影響使用者的情緒預測。警示、分數與紅色狀態不是中性資訊,它們會改變人的 interoceptive inference。",
    path: "C:/Code/human-intuition/done/2017-Barrett-HowEmotionsAreMade/output.md",
    x: 365,
    y: 226,
    tilt: "-0.8deg"
  },
  {
    id: "seth-2021",
    axis: "A",
    year: "2021",
    authors: "Seth",
    short: "2021 Seth",
    title: "Being You",
    venue: "Book",
    topic: "self 與 consciousness 作為 controlled hallucination",
    description: "用 predictive processing 講意識、自我與身體感。self 不是被讀取的東西,而是不斷被控制與更新的模型。",
    implicationType: "延伸推論",
    implication: "使用者與 AI 共事時也在更新 self-model:我是判斷者、審稿者、操作者,還是按鈕按下去的人?UI 要保護使用者作為主體的感覺。",
    path: "C:/Code/human-intuition/done/2021-Seth-BeingYou/output.md",
    x: 530,
    y: 220,
    tilt: "0.9deg"
  },
  {
    id: "solms-2021",
    axis: "A",
    year: "2021",
    authors: "Solms",
    short: "2021 Solms",
    title: "The Hidden Spring",
    venue: "Book",
    topic: "consciousness 的 affect / brainstem 立場",
    description: "同樣談 consciousness,但把重心放到 affect、brainstem 與生命需求,與 Seth 形成同年對讀。",
    implicationType: "延伸推論",
    implication: "若 AI 工具忽略使用者的壓力、疲勞、風險感與動機狀態,就只是在 cognitive layer 上設計,沒有照顧真正影響判斷的底層訊號。",
    path: "C:/Code/human-intuition/done/2021-Solms-HiddenSpring/output.md",
    x: 690,
    y: 226,
    tilt: "-0.7deg"
  },
  {
    id: "clark-2023",
    axis: "A",
    year: "2023",
    authors: "Clark",
    short: "2023 Clark",
    title: "The Experience Machine",
    venue: "Book",
    topic: "跨 paradigm 串起 predictive mind 的科普入口",
    description: "把 Seth、Solms、Barrett 等線索以更易讀方式串起來,適合作為 predictive processing 群的中後段入口。",
    implicationType: "延伸推論",
    implication: "對產品敘事很有用:把複雜理論翻成可操作語言,不是降智,而是幫使用者建立能持續校準的模型。",
    path: "C:/Code/human-intuition/done/2023-Clark-ExperienceMachine/output.md",
    x: 835,
    y: 242,
    tilt: "1deg",
    sequence: 4,
    reason: "用比較易讀的方式把 predictive processing 群串成可操作模型。"
  },
  {
    id: "kk-2009",
    axis: "B",
    year: "2009",
    authors: "Kahneman & Klein",
    short: "2009 K&K",
    title: "Conditions for Intuitive Expertise: A Failure to Disagree",
    venue: "American Psychologist",
    topic: "直覺可信需要 regular environment + feedback",
    description: "Kahneman 與 Klein 收斂出直覺專業的條件:環境要有可學習規律,個體要有足夠回饋來校準判斷。",
    implicationType: "延伸推論",
    implication: "AI 工具不該只問使用者要不要相信模型,而要提供可學習的回饋環境。cognitive forcing function 可以被看成直覺校準的工程版。",
    path: "C:/Code/human-intuition/done/2009-Kahneman-Klein-IntuitiveExpertise/output.md",
    x: 328,
    y: 474,
    tilt: "-0.8deg",
    sequence: 6,
    reason: "和 Sunday 2023 一起加深「直覺何時可信」。"
  },
  {
    id: "noise-2021",
    axis: "B",
    year: "2021",
    authors: "Kahneman+",
    short: "2021 Kahneman+",
    title: "Noise: A Flaw in Human Judgment",
    venue: "Book",
    topic: "bias 之外還有 within-person / between-person noise",
    description: "指出人類判斷除了偏誤,還有大量不穩定 noise。同一專家不同時間也可能給出不同判斷。",
    implicationType: "Source implication",
    implication: "這是 AI-assist-not-AI-first 的強反論:在 noise reduction 這個 specific use case 上,algorithm 可能真的有壓倒性優勢,需要正面回應。",
    path: "C:/Code/human-intuition/done/2021-Kahneman-Sibony-Sunstein-Noise/output.md",
    x: 222,
    y: 574,
    tilt: "1deg",
    sequence: 5,
    reason: "帶入 judgment quality,知道 bias 之外還有 noise。"
  },
  {
    id: "sunday-2023",
    axis: "B",
    year: "2023",
    authors: "Sunday",
    short: "2023 Sunday",
    title: "Intuitive Skill",
    venue: "Philosophia",
    topic: "直覺作為可訓練 skill",
    description: "把 intuitive skill 當成需要條件、練習與環境支撐的能力,補足 K&K 對直覺品質的理論基礎。",
    implicationType: "延伸推論",
    implication: "如果直覺是 skill,AI 工具的任務不是替代 skill,而是讓使用者在每次使用中更能看見 feedback、形成可遷移的判斷能力。",
    path: "C:/Code/human-intuition/done/2023-Sunday-IntuitiveSkill/output.md",
    x: 118,
    y: 674,
    tilt: "-1deg",
    sequence: 6,
    reason: "和 K&K 2009 配對讀,補直覺技能理論。"
  },
  {
    id: "bansal-2021",
    axis: "C",
    year: "2021",
    authors: "Bansal+",
    short: "2021 Bansal+",
    title: "Does the Whole Exceed its Parts?",
    venue: "CHI 2021",
    topic: "human-AI team 是否真的形成互補表現",
    description: "檢驗人與 AI 合作是否超過各自單獨表現,把 complementary performance 從願景拉回可測量問題。",
    implicationType: "延伸推論",
    implication: "不要把 human-in-the-loop 當成自動加分。若 UI 沒讓人類在自己強的地方介入,整體系統可能只是把兩邊錯誤疊在一起。",
    path: "C:/Code/human-intuition/done/2021-Bansal-DoesTheWholeExceedItsParts/output.md",
    x: 672,
    y: 474,
    tilt: "0.8deg"
  },
  {
    id: "bucinca-2021",
    axis: "C",
    year: "2021",
    authors: "Buçinca+",
    short: "2021 Buçinca+",
    title: "To Trust or to Think: Cognitive Forcing Functions",
    venue: "CSCW 2021",
    topic: "用 cognitive forcing function 防止過度依賴",
    description: "研究如何透過介面設計迫使使用者先思考,而不是直接接受 AI prediction。",
    implicationType: "延伸推論",
    implication: "這是 K&K 直覺校準的工程化版本。好的 friction 不是阻礙效率,而是保護使用者的 posterior 不被 AI 結論壓死。",
    path: "C:/Code/human-intuition/done/2021-Bucinca-ToTrustOrToThink/output.md",
    x: 770,
    y: 548,
    tilt: "-0.8deg",
    sequence: 2,
    reason: "配對 Chen,看 forcing function 如何工程化 pathway 1。"
  },
  {
    id: "chen-2023",
    axis: "C",
    year: "2023",
    authors: "Chen+",
    short: "2023 Chen+",
    title: "Understanding the Role of Human Intuition on Reliance in Human-AI Decision-Making with Explanations",
    venue: "Proc. ACM Hum.-Comput. Interact. 7, CSCW2",
    topic: "outcome / feature / reliability intuition 三條 pathway",
    description: "指出人類面對 AI explanation 時,會用 outcome、feature、AI reliability 三類直覺去判斷是否覆蓋 AI prediction。",
    implicationType: "Source implication",
    implication: "Beacon 與其他 AI-assist 工具應優先給 example-based evidence,讓使用者自己跑 inference。feature-based explanation 若太像結論,反而會增加 overreliance。",
    path: "C:/Code/human-intuition/done/2023-Chen-HumanIntuition/output.md",
    x: 876,
    y: 622,
    tilt: "1deg",
    sequence: 1,
    reason: "從實證問題出發,先知道三條 pathway 是什麼。"
  },
  {
    id: "vasconcelos-2023",
    axis: "C",
    year: "2023",
    authors: "Vasconcelos+",
    short: "2023 Vasconcelos+",
    title: "Explanations Can Reduce Overreliance on AI Systems",
    venue: "CSCW 2023",
    topic: "explanations 何時能降低 overreliance",
    description: "把 explanation 對 overreliance 的效果拉到實證層面,補上 AI explanation 不一定只會讓人過度依賴的另一面。",
    implicationType: "延伸推論",
    implication: "設計問題不是要不要 explanation,而是 explanation 是否提供可檢查 evidence。能降低 overreliance 的說明,通常讓使用者更能判斷 AI 何時錯。",
    path: "C:/Code/human-intuition/done/2023-Vasconcelos-ExplanationsCanReduceOverreliance/output.md",
    x: 952,
    y: 692,
    tilt: "-1deg"
  }
];

const axisMeta = {
  A: {
    label: "Axis A · Predictive processing",
    title: "人腦為何如此運作",
    accent: "var(--axis-a)",
    bg: "var(--axis-a-bg)"
  },
  B: {
    label: "Axis B · Judgment quality",
    title: "直覺判斷的可靠性",
    accent: "var(--axis-b)",
    bg: "var(--axis-b-bg)"
  },
  C: {
    label: "Axis C · XAI / Human-AI",
    title: "工程實證與 human-AI decision making",
    accent: "var(--axis-c)",
    bg: "var(--axis-c-bg)"
  }
};

const readingOrder = [
  "chen-2023",
  "bucinca-2021",
  "hohwy-2013",
  "clark-2023",
  "noise-2021",
  "kk-2009",
  "sunday-2023",
  "hohwy-2016",
  "merleau-1945",
  "friston-2010",
  "friston-2013",
  "clark-2016",
  "barrett-2017",
  "seth-2021",
  "solms-2021",
  "bansal-2021",
  "vasconcelos-2023"
];

const relations = [
  {
    id: "chen-hohwy",
    from: "chen-2023",
    to: "hohwy-2013",
    label: "Chen 2023 ↔ Hohwy 2013",
    copy: "三條 pathway 是 predictive processing 的 corollary。"
  },
  {
    id: "bucinca-kk",
    from: "bucinca-2021",
    to: "kk-2009",
    label: "Buçinca 2021 ↔ K&K 2009",
    copy: "cognitive forcing function = K&K 直覺 calibration 的工程化。"
  },
  {
    id: "noise-kk",
    from: "noise-2021",
    to: "kk-2009",
    label: "Noise 2021 ↔ K&K 2009",
    copy: "Noise 是 K&K 2009 的延伸,補 bias 的另一面。"
  },
  {
    id: "friston-hohwy",
    from: "friston-2013",
    to: "hohwy-2013",
    label: "Friston 2013 ↔ Hohwy 2013",
    copy: "Hohwy Ch 7 整章用 Friston psychosis 框架。"
  },
  {
    id: "clark-hohwy",
    from: "clark-2016",
    to: "hohwy-2013",
    label: "Clark 2016 ↔ Hohwy 2013",
    copy: "姊妹作:internalism vs 4E cognition 對讀。"
  },
  {
    id: "solms-seth",
    from: "solms-2021",
    to: "seth-2021",
    label: "Solms 2021 ↔ Seth 2021",
    copy: "同年、不同立場談 consciousness:腦幹 vs 皮質。"
  },
  {
    id: "barrett-seth",
    from: "barrett-2017",
    to: "seth-2021",
    label: "Barrett 2017 ↔ Seth 2021",
    copy: "predictive processing 應用到 interoception / emotion / self。"
  }
];

const i18n = window.SHIORI_I18N || {};
const translations = i18n.translations || {};
const implicationTranslations = window.SHIORI_IMPLICATION_I18N || {};
const defaultLocale = i18n.defaultLocale || "zh-Hant";
const supportedLocales = i18n.supportedLocales || [defaultLocale];
const localeStorageKey = "shiori.locale";

function lookup(path, locale = currentLocale) {
  const source = translations[locale];
  if (!source) return undefined;
  return path.split(".").reduce((node, part) => {
    if (node && Object.prototype.hasOwnProperty.call(node, part)) {
      return node[part];
    }
    return undefined;
  }, source);
}

function formatText(value, params = {}) {
  return String(value).replace(/\{(\w+)\}/g, (_, key) => {
    return Object.prototype.hasOwnProperty.call(params, key) ? params[key] : `{${key}}`;
  });
}

function t(path, params = {}) {
  const value = lookup(path) ?? lookup(path, defaultLocale) ?? path;
  return formatText(value, params);
}

function resolveInitialLocale() {
  let stored = null;
  try {
    stored = window.localStorage?.getItem(localeStorageKey);
  } catch {
    stored = null;
  }
  if (supportedLocales.includes(stored)) return stored;
  const browserLocale = navigator.language || "";
  if (browserLocale.toLowerCase().startsWith("ja")) return "ja";
  if (browserLocale.toLowerCase().startsWith("zh-cn") || browserLocale.toLowerCase().startsWith("zh-hans")) {
    return "zh-Hans";
  }
  return defaultLocale;
}

function axisText(axis, field) {
  return lookup(`axis.${axis}.${field}`) ?? axisMeta[axis]?.[field] ?? "";
}

function relationText(relation, field) {
  return lookup(`relations.${relation.id}.${field}`) ?? relation[field] ?? "";
}

function layerResult(layer) {
  return {
    label: t(`layers.${layer}.label`),
    color: layerResults[layer]?.color || "var(--axis-a)",
    happening: t(`layers.${layer}.happening`),
    boundary: t(`layers.${layer}.boundary`),
    silent: t(`layers.${layer}.silent`)
  };
}

function paperText(paper, field) {
  return lookup(`papers.${paper.id}.${field}`) ?? paper[field] ?? "";
}

function paperImplicationType(paper) {
  if (paper.implicationType === "Source implication") return t("implication.source");
  return t("implication.extended");
}

function implicationField(paperId, project, field, data) {
  return implicationTranslations[currentLocale]?.[paperId]?.[project]?.[field]
    ?? implicationTranslations[defaultLocale]?.[paperId]?.[project]?.[field]
    ?? data?.[field]
    ?? "";
}

const board = document.getElementById("map-board");
const mapTitle = document.getElementById("map-title");
const statusEl = document.getElementById("map-status");
const relationChips = document.getElementById("relation-chips");
const modeButtons = [...document.querySelectorAll(".mode-button")];
const dialog = document.getElementById("paper-dialog");
const dialogClose = document.getElementById("dialog-close");
const copyButton = document.getElementById("copy-path");
const progressCount = document.getElementById("progress-count");
const progressFill = document.getElementById("progress-fill");
const progressNote = document.getElementById("progress-note");
const selfCheckForm = document.getElementById("self-check-form");
const selfCheckResult = document.getElementById("self-check-result");
const selfCheckStatus = document.getElementById("self-check-status");
const symptomStatus = document.getElementById("symptom-status");
const symptomDoors = [...document.querySelectorAll("[data-symptom-target]")];
const resultLayer = document.getElementById("result-layer");
const resultHappening = document.getElementById("result-happening");
const resultBoundary = document.getElementById("result-boundary");
const resultSilent = document.getElementById("result-silent");
const localeButtons = [...document.querySelectorAll("[data-locale]")];

let currentLocale = resolveInitialLocale();
let currentMode = "constellation";
let activeRelation = null;
let pinnedRelation = null;
let pinnedPaperId = null;
let lastFocusedNode = null;
let currentSelfCheckLayer = null;
let currentDialogPaperId = null;
const understoodPapers = new Set();

const layerOrder = ["automation", "voice", "decision", "team", "life"];
const selfCheckQuestions = [
  "check-start",
  "check-owned",
  "check-drift",
  "check-boundary",
  "check-diagnosis"
];
const layerResults = {
  automation: {
    label: "Task Automation",
    color: "var(--layer-automation)",
    happening: "AI is probably speeding up a process before the process has been inspected. The risk is not the tool; it is making the wrong workflow run faster.",
    boundary: "Write an AI-only / AI-assist / human-check list for this workflow before adding another automation step.",
    silent: "Silent Diagnosis may help if you can send the workflow, prompts, outputs, and where human review currently happens."
  },
  voice: {
    label: "Creative Voice",
    color: "var(--layer-voice)",
    happening: "AI may be smoothing away stance, taste, or phrasing. The output can be polished while becoming less yours.",
    boundary: "Draft your core opinion or sentence first, then let AI restructure without changing the stance.",
    silent: "Silent Diagnosis may help if you can send original writing next to AI-assisted drafts."
  },
  decision: {
    label: "Decision Support",
    color: "var(--layer-decision)",
    happening: "AI may be increasing analysis while making commitment harder. The missing piece is often criteria, not more options.",
    boundary: "Set the decision criteria, risk tolerance, and non-negotiables before asking AI for advice.",
    silent: "Silent Diagnosis may help if you can send the decision prompt, AI answer, notes, and what still feels unresolved."
  },
  team: {
    label: "Team / Agent Workflow",
    color: "var(--layer-team)",
    happening: "The team may have human-in-the-loop steps that are not meaningful review. Approval can become a formality when nobody can verify the output.",
    boundary: "Name the accountable owner, required review evidence, and stop conditions before accepting AI or agent output.",
    silent: "Silent Diagnosis may help if you can send the team handoff, agent flow, review step, and approval rule."
  },
  life: {
    label: "Life Transition / Slow Mode",
    color: "var(--layer-life)",
    happening: "AI may be making a fragile situation feel too quickly explained. This layer needs structure without outsourcing meaning.",
    boundary: "Use slow mode: write your own meaning first, ask AI only to organize or reflect, and delay final framing.",
    silent: "Silent Diagnosis may help only as a written boundary map, not as therapy, coaching, or crisis support."
  }
};

function paperById(id) {
  return papers.find((paper) => paper.id === id);
}

function orderedPapers() {
  return readingOrder.map(paperById).filter(Boolean);
}

function applyStaticTranslations() {
  document.documentElement.lang = i18n.htmlLang?.[currentLocale] || currentLocale;
  document.title = t("meta.title");
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", t("meta.description"));
  }
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

function updateLocaleButtons() {
  localeButtons.forEach((button) => {
    const isActive = button.dataset.locale === currentLocale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function updateModeText() {
  mapTitle.textContent = t(`map.title${capitalize(currentMode)}`);
  statusEl.textContent = t(`map.status${capitalize(currentMode)}`);
}

function applyLocale(locale, options = {}) {
  if (!supportedLocales.includes(locale)) return;
  currentLocale = locale;
  if (options.persist) {
    try {
      window.localStorage?.setItem(localeStorageKey, locale);
    } catch {
      // Locale still changes for this page view when localStorage is unavailable.
    }
  }
  applyStaticTranslations();
  updateLocaleButtons();
  updateModeText();
  renderRelations();
  renderBoard();
  updateProgress();
  if (currentSelfCheckLayer && !selfCheckResult.hidden) {
    renderSelfCheckResult(currentSelfCheckLayer);
  }
  if (currentDialogPaperId && dialog.open) {
    renderDialogPaper(currentDialogPaperId);
  }
}

function setMode(mode) {
  currentMode = mode;
  document.body.dataset.view = mode;
  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  updateModeText();
  board.classList.add("is-changing");
  window.setTimeout(() => {
    renderBoard();
    board.classList.remove("is-changing");
  }, 120);
}

function nodeStyle(paper) {
  const meta = axisMeta[paper.axis];
  const xPercent = ((paper.x / 1080) * 100).toFixed(3);
  const yPercent = ((paper.y / 760) * 100).toFixed(3);
  return `--node-x:${xPercent}%;--node-y:${yPercent}%;--node-accent:${meta.accent};--node-bg:${meta.bg};--tilt:${paper.tilt};`;
}

function nodeButton(paper, options = {}) {
  const sequenceStep = options.sequenceStep ? `<span class="paper-step">${options.sequenceStep}</span>` : "";
  const reason = options.reason ? `<span class="sequence-reason">${escapeHtml(options.reason)}</span>` : "";
  const extension = paper.implicationType === "延伸推論" ? `<span class="extended-label">${escapeHtml(t("implication.extended"))}</span>` : "";
  const understoodClass = understoodPapers.has(paper.id) ? " is-understood" : "";
  return `
    <button type="button" class="paper-node${understoodClass}" data-paper-id="${paper.id}" data-axis="${paper.axis}" style="${nodeStyle(paper)}">
      <span class="paper-meta">${sequenceStep}${escapeHtml(paper.short)}</span>
      <span class="paper-topic">${escapeHtml(paperText(paper, "topic"))}</span>
      ${reason}
      ${extension}
    </button>
  `;
}

function renderBoard() {
  if (currentMode === "constellation") {
    renderConstellation();
  } else if (currentMode === "stack") {
    renderStack();
  } else {
    renderSequence();
  }
  bindNodeButtons();
  applyActiveRelation();
  applyUnderstoodState();
  updateMazeFocus();
}

function renderConstellation() {
  const lines = relations.map((relation) => {
    const from = paperById(relation.from);
    const to = paperById(relation.to);
    const label = relationText(relation, "label");
    const copy = relationText(relation, "copy");
    return `
      <g class="connection-group" tabindex="0" role="button" data-relation-id="${relation.id}" aria-label="${escapeHtml(label)}" aria-describedby="relation-desc-${relation.id}">
        <title>${escapeHtml(label)}: ${escapeHtml(copy)}</title>
        <path class="connection-line" d="${connectionPath(from, to)}"></path>
      </g>
    `;
  }).join("");

  board.innerHTML = `
    <div class="constellation-canvas">
      <svg class="axis-svg" viewBox="0 0 1080 760" aria-label="${escapeHtml(t("map.axisSvgLabel"))}">
        <path class="brain-outline" d="M118 382 C68 252 142 108 294 82 C390 22 518 56 574 124 C686 74 836 102 920 206 C1034 294 1004 472 880 540 C842 676 686 720 548 660 C420 736 250 688 214 562 C158 536 128 476 118 382 Z"></path>
        <path class="ridge" d="M174 340 C250 268 356 268 430 334 C494 392 584 390 658 328 C732 266 838 280 904 354"></path>
        <path class="ridge" d="M196 458 C292 420 354 474 428 520 C512 572 600 536 672 480 C746 424 826 448 894 506"></path>
        <path class="ridge" d="M246 206 C320 164 414 182 462 238 C512 292 598 292 664 226 C730 160 822 178 884 248"></path>
        <path class="ridge" d="M262 596 C360 640 448 584 514 544 C596 494 666 538 736 594"></path>
        <path class="axis-line axis-line-a" d="M110 136 C292 46 704 54 920 244"></path>
        <path class="axis-line axis-line-b" d="M488 344 C390 438 236 568 118 674"></path>
        <path class="axis-line axis-line-c" d="M506 344 C650 422 822 558 952 692"></path>
        ${lines}
      </svg>
      <span class="axis-label label-a">${escapeHtml(t("map.labelA"))}</span>
      <span class="axis-label label-b">${escapeHtml(t("map.labelB"))}</span>
      <span class="axis-label label-c">${escapeHtml(t("map.labelC"))}</span>
      <div class="center-insight" aria-hidden="true">
        <span class="center-kicker">${escapeHtml(t("map.mazeKicker"))}</span>
        <strong id="maze-focus-title">${escapeHtml(t("map.mazeTitle"))}</strong>
        <span id="maze-focus-copy">${escapeHtml(t("map.mazeCopy"))}</span>
      </div>
      ${papers.map((paper) => nodeButton(paper)).join("")}
      ${relations.map((relation) => `<p id="relation-desc-${relation.id}" class="visually-hidden">${escapeHtml(relationText(relation, "label"))}:${escapeHtml(relationText(relation, "copy"))}</p>`).join("")}
    </div>
  `;
  bindSvgRelations();
}

function connectionPath(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const bend = Math.max(54, Math.min(126, Math.abs(dx) * 0.18 + Math.abs(dy) * 0.12));
  const sweep = from.y < to.y ? -bend : bend;
  const cx1 = from.x + dx * 0.34;
  const cy1 = from.y + dy * 0.18 + sweep;
  const cx2 = from.x + dx * 0.68;
  const cy2 = from.y + dy * 0.82 - sweep;
  return `M ${from.x} ${from.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${to.x} ${to.y}`;
}

function renderStack() {
  board.innerHTML = `
    <div class="stack-layout">
      ${Object.entries(axisMeta).map(([axis, meta]) => {
        const group = papers.filter((paper) => paper.axis === axis);
        return `
          <section class="axis-group" aria-labelledby="axis-${axis}">
            <h3 id="axis-${axis}">${escapeHtml(axisText(axis, "label"))} · ${escapeHtml(axisText(axis, "title"))}</h3>
            <div class="axis-grid">
              ${group.map((paper) => nodeButton(paper)).join("")}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderSequence() {
  board.innerHTML = `
    <div class="sequence-layout">
      <section class="axis-group" aria-labelledby="sequence-heading">
        <h3 id="sequence-heading">${escapeHtml(t("map.sequenceHeading"))}</h3>
        <div class="sequence-grid">
          ${orderedPapers().map((paper) => {
            const step = paper.sequence || "8+";
            const reason = paperText(paper, "reason") || t("map.sequenceDefaultReason");
            return nodeButton(paper, { sequenceStep: step, reason });
          }).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderRelations() {
  relationChips.innerHTML = relations.map((relation) => `
    <button type="button" class="relation-chip" data-relation-id="${relation.id}" aria-pressed="false" aria-describedby="chip-desc-${relation.id}">
      <span class="relation-title">${escapeHtml(relationText(relation, "label"))}</span>
      <span class="relation-copy" id="chip-desc-${relation.id}">${escapeHtml(relationText(relation, "copy"))}</span>
    </button>
  `).join("");

  relationChips.querySelectorAll(".relation-chip").forEach((button) => {
    button.addEventListener("click", () => toggleRelation(button.dataset.relationId));
    button.addEventListener("focus", () => previewRelation(button.dataset.relationId));
    button.addEventListener("blur", () => clearRelationPreview());
  });
}

function bindSvgRelations() {
  board.querySelectorAll(".connection-group").forEach((group) => {
    group.addEventListener("click", () => toggleRelation(group.dataset.relationId));
    group.addEventListener("focus", () => previewRelation(group.dataset.relationId));
    group.addEventListener("blur", () => clearRelationPreview());
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleRelation(group.dataset.relationId);
      }
    });
    group.addEventListener("mouseenter", () => previewRelation(group.dataset.relationId));
    group.addEventListener("mouseleave", () => clearRelationPreview());
  });
}

function bindNodeButtons() {
  board.querySelectorAll(".paper-node").forEach((button) => {
    button.addEventListener("click", () => handlePaperNodeClick(button));
  });
}

function handlePaperNodeClick(button) {
  const paperId = button.dataset.paperId;
  if (paperId === pinnedPaperId && understoodPapers.has(paperId)) {
    unmarkUnderstood(paperId);
    clearRelationHighlight();
    return;
  }
  openPaper(paperId, button);
}

function handleMapBoardClick(event) {
  const interactiveTarget = event.target.closest?.(".paper-node, .connection-group");
  if (interactiveTarget) return;
  if (!activeRelation && !pinnedRelation) return;
  clearRelationHighlight();
}

function toggleRelation(id) {
  if (pinnedRelation === id) {
    clearRelationHighlight();
  } else {
    setRelation(id, { pinned: true });
  }
}

function setRelation(id, options = {}) {
  activeRelation = id;
  if (options.pinned) {
    pinnedRelation = id;
    pinnedPaperId = options.sourcePaperId || null;
  }
  applyActiveRelation();
}

function setPaperSelection(id) {
  activeRelation = null;
  pinnedRelation = null;
  pinnedPaperId = id;
  applyActiveRelation();
}

function previewRelation(id) {
  if (pinnedRelation) return;
  activeRelation = id;
  applyActiveRelation();
}

function clearRelationPreview() {
  if (pinnedRelation) return;
  activeRelation = null;
  applyActiveRelation();
}

function clearRelationHighlight() {
  pinnedRelation = null;
  pinnedPaperId = null;
  activeRelation = null;
  applyActiveRelation();
}

function applyActiveRelation() {
  const relation = relations.find((item) => item.id === activeRelation);
  document.querySelectorAll("[data-relation-id]").forEach((el) => {
    const item = relations.find((candidate) => candidate.id === el.dataset.relationId);
    const isUnlocked = item && (understoodPapers.has(item.from) || understoodPapers.has(item.to));
    el.classList.toggle("is-active", Boolean(activeRelation && el.dataset.relationId === activeRelation));
    el.classList.toggle("is-unlocked", Boolean(isUnlocked));
    el.setAttribute("aria-pressed", String(pinnedRelation === el.dataset.relationId));
  });
  document.querySelectorAll("[data-paper-id]").forEach((el) => {
    const shouldHighlight = relation && (el.dataset.paperId === relation.from || el.dataset.paperId === relation.to);
    el.classList.toggle("is-highlighted", Boolean(shouldHighlight));
  });
  updateMazeFocus();
}

function applyUnderstoodState() {
  document.querySelectorAll("[data-paper-id]").forEach((el) => {
    const isUnderstood = understoodPapers.has(el.dataset.paperId);
    el.classList.toggle("is-understood", isUnderstood);
    el.setAttribute("aria-pressed", String(isUnderstood));
  });
  updateProgress();
}

function markUnderstood(id) {
  const before = understoodPapers.size;
  understoodPapers.add(id);
  applyUnderstoodState();
  if (understoodPapers.size > before) {
    const paper = paperById(id);
    progressNote.textContent = t("map.progressMarked", {
      paper: paper.short,
      count: understoodPapers.size,
      total: papers.length
    });
  }
}

function unmarkUnderstood(id) {
  if (!understoodPapers.has(id)) return;
  understoodPapers.delete(id);
  applyUnderstoodState();
  const paper = paperById(id);
  if (understoodPapers.size > 0 && paper) {
    progressNote.textContent = t("map.progressUnmarked", {
      paper: paper.short,
      count: understoodPapers.size,
      total: papers.length
    });
  }
}

function updateProgress() {
  const count = understoodPapers.size;
  const percent = Math.round((count / papers.length) * 100);
  document.body.classList.toggle("has-insight", count > 0);
  document.body.style.setProperty("--insight-progress", `${percent}%`);
  progressCount.textContent = `${count}/${papers.length}`;
  progressFill.style.width = `${percent}%`;
  if (count === 0) {
    progressNote.textContent = t("map.progressEmpty");
  } else if (count === papers.length) {
    progressNote.textContent = t("map.progressComplete");
  }
}

function updateMazeFocus() {
  const title = document.getElementById("maze-focus-title");
  const copy = document.getElementById("maze-focus-copy");
  if (!title || !copy) return;
  const relation = relations.find((item) => item.id === activeRelation);
  if (relation) {
    title.textContent = relationText(relation, "label");
    copy.textContent = relationText(relation, "copy");
  } else {
    title.textContent = t("map.mazeTitle");
    copy.textContent = t("map.mazeCopy");
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function selectSymptomDoor(layer) {
  const result = layerResult(layer);
  const input = selfCheckForm?.querySelector(`input[name="check-start"][value="${layer}"]`);
  if (!result || !input) return;
  input.checked = true;
  symptomDoors.forEach((door) => {
    door.classList.toggle("is-selected", door.dataset.symptomTarget === layer);
  });
  if (symptomStatus) {
    symptomStatus.textContent = t("symptoms.selected", { layer: result.label });
  }
  selfCheckForm.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start"
  });
  window.setTimeout(() => input.focus(), prefersReducedMotion() ? 0 : 220);
}

function scoreSelfCheck(answers) {
  const scores = Object.fromEntries(layerOrder.map((layer) => [layer, 0]));
  answers.forEach((answer) => {
    scores[answer.value] += 1;
  });
  return layerOrder.reduce((best, layer) => {
    return scores[layer] > scores[best] ? layer : best;
  }, layerOrder[0]);
}

function showSelfCheckResult(layer) {
  if (!selfCheckResult) return;
  currentSelfCheckLayer = layer;
  renderSelfCheckResult(layer);
  selfCheckResult.hidden = false;
  selfCheckResult.focus({ preventScroll: true });
  selfCheckResult.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "nearest"
  });
}

function renderSelfCheckResult(layer) {
  const result = layerResult(layer);
  resultLayer.textContent = result.label;
  resultHappening.textContent = result.happening;
  resultBoundary.textContent = result.boundary;
  resultSilent.textContent = result.silent;
  selfCheckResult.style.setProperty("--result-color", result.color);
  selfCheckStatus.textContent = t("selfCheck.resultStatus", { layer: result.label });
}

function handleSelfCheckSubmit(event) {
  event.preventDefault();
  const answers = selfCheckQuestions.map((name) => selfCheckForm.querySelector(`input[name="${name}"]:checked`));
  const missingIndex = answers.findIndex((answer) => !answer);
  if (missingIndex !== -1) {
    const firstOption = selfCheckForm.querySelector(`input[name="${selfCheckQuestions[missingIndex]}"]`);
    selfCheckStatus.textContent = t("selfCheck.missing");
    firstOption?.focus();
    return;
  }
  showSelfCheckResult(scoreSelfCheck(answers));
}

function resetSelfCheckResult() {
  if (selfCheckResult) selfCheckResult.hidden = true;
  currentSelfCheckLayer = null;
  if (selfCheckStatus) selfCheckStatus.textContent = "";
  if (symptomStatus) symptomStatus.textContent = t("symptoms.statusDefault");
  symptomDoors.forEach((door) => door.classList.remove("is-selected"));
}

function openPaper(id, trigger) {
  const paper = paperById(id);
  if (!paper) return;
  lastFocusedNode = trigger || document.activeElement;
  currentDialogPaperId = id;
  const related = relations.filter((relation) => relation.from === id || relation.to === id);
  markUnderstood(id);
  if (related.length) {
    setRelation(related[0].id, { pinned: true, sourcePaperId: id });
  } else {
    setPaperSelection(id);
  }
  renderDialogPaper(id);
  dialog.showModal();
  dialogClose.focus();
}

function renderDialogPaper(id) {
  const paper = paperById(id);
  if (!paper) return;
  const related = relations.filter((relation) => relation.from === id || relation.to === id);
  document.getElementById("dialog-axis").textContent = axisText(paper.axis, "label");
  document.getElementById("dialog-title").textContent = paper.title;
  document.getElementById("dialog-meta").textContent = `${paper.year} · ${paper.authors} · ${paper.venue}`;
  document.getElementById("dialog-summary").textContent = paperText(paper, "description");
  document.getElementById("dialog-meaning-source").textContent = t("dialog.meaningSource");

  renderImplicationBlock(id, "beacon");
  renderImplicationBlock(id, "shikigarasu");

  document.getElementById("dialog-path").textContent = paper.path;
  document.getElementById("copy-status").textContent = "";
  const relatedContainer = document.getElementById("dialog-related");
  relatedContainer.innerHTML = related.length
    ? related.map((relation) => `<div class="related-item"><strong>${escapeHtml(relationText(relation, "label"))}</strong>${escapeHtml(relationText(relation, "copy"))}</div>`).join("")
    : `<div class="related-item">${escapeHtml(t("dialog.noRelation"))}</div>`;
}

function renderImplicationBlock(paperId, project) {
  const data = paperImplications && paperImplications[paperId] && paperImplications[paperId][project];
  const textEl = document.getElementById(`dialog-${project}-text`);
  const quoteEl = document.getElementById(`dialog-${project}-quote`);
  const whereEl = document.getElementById(`dialog-${project}-where`);
  const evidenceEl = document.getElementById(`dialog-${project}-evidence`);
  const emptyEl = document.getElementById(`dialog-${project}-empty`);

  if (!textEl || !quoteEl || !whereEl || !evidenceEl) return;

  if (data && data.has) {
    textEl.textContent = implicationField(paperId, project, "text", data);
    textEl.hidden = false;
    quoteEl.textContent = data.quote;
    whereEl.textContent = implicationField(paperId, project, "where", data);
    evidenceEl.hidden = false;
    if (emptyEl) emptyEl.hidden = true;
  } else {
    textEl.textContent = "";
    textEl.hidden = true;
    quoteEl.textContent = "";
    whereEl.textContent = "";
    evidenceEl.hidden = true;
    if (emptyEl) emptyEl.hidden = false;
  }
}

function closeDialog() {
  dialog.close();
}

function restoreDialogFocus() {
  currentDialogPaperId = null;
  if (lastFocusedNode && typeof lastFocusedNode.focus === "function") {
    lastFocusedNode.focus();
  }
}

async function copyCurrentPath() {
  const text = document.getElementById("dialog-path").textContent;
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = t("dialog.copySuccess");
  } catch {
    status.textContent = t("dialog.copyFail");
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});
localeButtons.forEach((button) => {
  button.addEventListener("click", () => applyLocale(button.dataset.locale, { persist: true }));
});
symptomDoors.forEach((door) => {
  door.addEventListener("click", () => selectSymptomDoor(door.dataset.symptomTarget));
});
if (selfCheckForm) {
  selfCheckForm.addEventListener("submit", handleSelfCheckSubmit);
  selfCheckForm.addEventListener("reset", () => {
    window.setTimeout(resetSelfCheckResult, 0);
  });
  selfCheckForm.addEventListener("change", (event) => {
    if (event.target?.name === "check-start") {
      symptomDoors.forEach((door) => {
        door.classList.toggle("is-selected", door.dataset.symptomTarget === event.target.value);
      });
    }
  });
}
board.addEventListener("click", handleMapBoardClick);
dialogClose.addEventListener("click", closeDialog);
copyButton.addEventListener("click", copyCurrentPath);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", restoreDialogFocus);

applyLocale(currentLocale);
