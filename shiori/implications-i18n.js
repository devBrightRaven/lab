// Localized summaries for the quote-grounded implication blocks.
// The evidence quotes remain in the source language because they are verbatim anchors.

window.SHIORI_IMPLICATION_I18N = {
  "zh-Hant": {
    "merleau-1945": {
      beacon: {
        text: "Merleau-Ponty 指出自然知覺總是在情境與場域中發生。對 Beacon 來說，單獨丟出 contrast ratio 或 WCAG 條文，會把問題拆成抽象指標。更好的做法是在每個 finding 旁邊放一個可比較案例，讓 reviewer 看見同一種 accessibility gap 在真實 UI 中如何出現。"
      },
      shikigarasu: {
        text: "Hakuso 的 Verdict + Findings + Required fixes 很容易把問題列成孤立屬性。這篇 paper 提醒它要把 finding 錨定到 prior case，例如某個 auth bypass 或 N+1 degradation 的已知案例，讓 agent 讀到的是 situated failure，而不是抽象規則違反。"
      }
    },
    "friston-2010": {
      beacon: {
        text: "Friston 的 precision-weighting 提醒 Beacon:抽象指標常常太低 stakes，reviewer 不會真正更新判斷。每個 fail score 應該配一個高 precision anchor，例如真實 lawsuit、user struggle recording 或 audit failure，讓 evidence 有足夠更新力。"
      }
    },
    "friston-2013": {
      beacon: {
        text: "這篇 paper 把 posterior judgment 描述成 prior 與 evidence 依 precision 加權的結果。Beacon 若先給分數，reviewer 很容易被 tool signal 接管。更好的順序是先呈現可比較案例，讓 reviewer 形成 calibrated prior，再顯示 metric。"
      }
    },
    "hohwy-2013": {
      beacon: {
        text: "Hohwy 的 prediction-error gain 說明為什麼熟悉的 WCAG finding 容易被既有 prior 吸收。Beacon 需要加入高 surprise 的 case reference，讓 finding 不能被當成普通 checklist item 直接帶過。"
      },
      shikigarasu: {
        text: "Hakuso 的固定 verdict 格式會啟動讀者對 audit report 的既有模型，讓 findings 被預先解釋掉。它應該為 critical finding 加入 Closest prior failure 欄位，用命名案例提高 prediction error gain。"
      }
    },
    "clark-2016": {
      beacon: {
        text: "Clark 的 precision account 指出，沒有情境 grounding 的抽象 signal 影響力很低。Beacon 應該把 feature-based finding 加上 exemplar layer，像 lawsuit、user-test data 或 legal precedent，讓 reviewer 的高層模型必須重新處理。"
      }
    },
    "hohwy-2016": {
      beacon: {
        text: "Hohwy 的 self-evidencing / EE-circle 提醒 Beacon:便宜、可預期的 evidence 只會確認既有假設。Example-based finding 應該被當成 deliberate prediction-error injection，用真實後果打斷 benign confirmation loop。"
      }
    },
    "barrett-2017": {
      beacon: {
        text: "Barrett 認為知覺需要概念模擬。Beacon 只給 rule 時，reviewer 看到的是數字；若給一個命名案例，reviewer 會模擬整個 failure situation，再用 metric 驗證。case 是啟動感知的 anchor。"
      },
      shikigarasu: {
        text: "Barrett 的 categorization 不是 feature matching，而是按目標取回 past instances。Hakuso 應該把每個 finding 接到 past-case reference，並明確標出 audit goal，讓修復不是薄弱的 generic response。"
      }
    },
    "seth-2021": {
      beacon: {
        text: "Seth 的 controlled hallucination 說明人經驗到的是 interpretation，不是 raw signal。Beacon 的 contrast metric 會被 developer 的 prior 重新解釋；具體案例能改變 top-down interpretation，讓問題變得可感。"
      },
      shikigarasu: {
        text: "Hakuso 只列 raw signals 時，強 prior 仍會吞掉 findings。它需要把 verdict 接到使用者已有信念會感到衝突的 reference case，讓 audit output 不只是 feature detection，而能改變 interpretation。"
      }
    },
    "solms-2021": {
      beacon: {
        text: "Solms 強調 affect 與 felt consequence。Beacon 的抽象規則會落入自動處理，缺乏動機重量。加入真實案例與後果，可以把 finding 從 automatic register 推到需要自願注意的層級。"
      },
      shikigarasu: {
        text: "Hakuso 的 verdict grammar 太熟悉，容易被低優先級處理。Solms 的 Law of Affect 暗示每個 high-severity finding 都要加 felt-stakes layer，例如 outage、breach、legal exposure 或 user harm。"
      }
    },
    "clark-2023": {
      beacon: {
        text: "Clark 的 popular account 強調 predictive brain 只會對偏離預期的東西反應。Beacon 熟悉的 rule citation 不會產生 prediction error；具體 precedent 會迫使 reviewer 把自己的 UI 和 anchor case 做 active matching。"
      },
      shikigarasu: {
        text: "Hakuso 的 PASS / CONDITIONAL verdict 會先種下高信心 prior，讓後面的 evidence 變成 confirmation。它應該延後 verdict，或先放 falsifying case，避免 findings 被 verdict label 預先收編。"
      }
    },
    "kk-2009": {
      beacon: {
        text: "Kahneman 與 Klein 指出可靠直覺需要 valid cues 與 feedback。Accessibility review 常是 wicked environment，後果延遲又不明。Beacon 應該用 resolved cases 當 feedback proxy，幫 reviewer 建立可學習的 cue-outcome 關係。"
      },
      shikigarasu: {
        text: "K&K 的 fractionated expertise 提醒 Hakuso 不要把所有 finding 都包成單一 unified verdict。每個 finding 應標出 validity tier，區分高可學習模式和低可學習判斷，避免 overconfidence。"
      }
    },
    "noise-2021": {
      beacon: {
        text: "Noise 指出 absolute rating 會產生大量不一致。Beacon 的 0-100 分數應該錨定到 case scale，例如某個 anchor site 的實際 score 與後果，讓 reviewer 做相對判斷而不是各自解讀抽象數字。"
      },
      shikigarasu: {
        text: "Hakuso 的 verdict 也是隱含 scale 上的 absolute rating。它應先拆成 blast radius、exploitability、pattern frequency 等 mediating assessments，並把每一維錨到過去案例，再組合成 verdict。"
      }
    },
    "sunday-2023": {
      beacon: {
        text: "Sunday 把可靠直覺視為可校準 skill。Beacon 的 isolated finding 沒有 calibration anchor；它應在每個 finding 旁放已知 reference case，讓 reviewer 用熟悉案例微調到新案例。"
      }
    },
    "bansal-2021": {
      beacon: {
        text: "Bansal 等人顯示 feature-based explanation 會提高 blind agreement，即使 AI 錯也一樣。Beacon 應加入 adversarial mode 或 top-2 counter-evidence，讓 explanation informative，而不是只讓 finding 更有說服力。"
      },
      shikigarasu: {
        text: "這篇 paper 支持 hakuso rubber-stamp 風險，但不直接證明 precedent comparison 會解決。更直接的設計是 devil's-advocate block:在 verdict 後列出反方最強證據，再請 reviewer confirm。"
      }
    },
    "bucinca-2021": {
      beacon: {
        text: "Buçinca 的 cognitive forcing functions 指出 explanation 本身不夠。Beacon 應先讓 reviewer 做自己的 pass/fail 判斷，再 reveal score 與 explanation；disagreement 才會觸發真正分析。"
      },
      shikigarasu: {
        text: "Hakuso front-load verdict 會讓人先接受 AI judgment。它應改成 Update flow:先要求 human 或 requesting agent 寫 pre-assessment，再顯示 hakuso findings 與差異。"
      }
    },
    "chen-2023": {
      beacon: {
        text: "Chen 等人的三條 pathway 說明 example-based explanation 為何能降低 overreliance。Beacon 應在 finding 旁加入 comparator cases，並顯示類似案例中 AI 何時正確、何時錯，讓 reviewer 看見 reliability signal。"
      },
      shikigarasu: {
        text: "Hakuso 的 Verdict + Findings 很像 paper 中容易 rubber-stamp 的 feature-based explanation。它可以保留骨架，但新增 Comparable cases block，顯示過去相似 audit 的 verdict 是否被確認或挑戰。"
      }
    },
    "vasconcelos-2023": {
      beacon: {
        text: "Vasconcelos 等人顯示 written explanation 不一定降低 overreliance，關鍵是 saliency。Beacon 應把錯誤直接標在 rendered UI 的失敗點，而不是只用文字描述 rule violation。"
      },
      shikigarasu: {
        text: "這篇 paper 反而警告 contrastive example-based explanation 只給 rough understanding，不一定告訴使用者 prediction 是否真。對 hakuso，較可行的是提高錯誤接受的成本，例如要求 reviewer 逐項 attest findings。"
      }
    }
  },
  "zh-Hans": {
    "merleau-1945": {
      beacon: {
        text: "Merleau-Ponty 指出自然知觉总是在情境与场域中发生。对 Beacon 来说，单独丢出 contrast ratio 或 WCAG 条文，会把问题拆成抽象指标。更好的做法是在每个 finding 旁边放一个可比较案例，让 reviewer 看见同一种 accessibility gap 在真实 UI 中如何出现。"
      },
      shikigarasu: {
        text: "Hakuso 的 Verdict + Findings + Required fixes 很容易把问题列成孤立属性。这篇 paper 提醒它要把 finding 锚定到 prior case，例如某个 auth bypass 或 N+1 degradation 的已知案例，让 agent 读到的是 situated failure，而不是抽象规则违反。"
      }
    },
    "friston-2010": {
      beacon: {
        text: "Friston 的 precision-weighting 提醒 Beacon:抽象指标常常太低 stakes，reviewer 不会真正更新判断。每个 fail score 应该配一个高 precision anchor，例如真实 lawsuit、user struggle recording 或 audit failure，让 evidence 有足够更新力。"
      }
    },
    "friston-2013": {
      beacon: {
        text: "这篇 paper 把 posterior judgment 描述成 prior 与 evidence 依 precision 加权的结果。Beacon 若先给分数，reviewer 很容易被 tool signal 接管。更好的顺序是先呈现可比较案例，让 reviewer 形成 calibrated prior，再显示 metric。"
      }
    },
    "hohwy-2013": {
      beacon: {
        text: "Hohwy 的 prediction-error gain 说明为什么熟悉的 WCAG finding 容易被既有 prior 吸收。Beacon 需要加入高 surprise 的 case reference，让 finding 不能被当成普通 checklist item 直接带过。"
      },
      shikigarasu: {
        text: "Hakuso 的固定 verdict 格式会启动读者对 audit report 的既有模型，让 findings 被预先解释掉。它应该为 critical finding 加入 Closest prior failure 字段，用命名案例提高 prediction error gain。"
      }
    },
    "clark-2016": {
      beacon: {
        text: "Clark 的 precision account 指出，没有情境 grounding 的抽象 signal 影响力很低。Beacon 应该把 feature-based finding 加上 exemplar layer，像 lawsuit、user-test data 或 legal precedent，让 reviewer 的高层模型必须重新处理。"
      }
    },
    "hohwy-2016": {
      beacon: {
        text: "Hohwy 的 self-evidencing / EE-circle 提醒 Beacon:便宜、可预期的 evidence 只会确认既有假设。Example-based finding 应该被当成 deliberate prediction-error injection，用真实后果打断 benign confirmation loop。"
      }
    },
    "barrett-2017": {
      beacon: {
        text: "Barrett 认为知觉需要概念模拟。Beacon 只给 rule 时，reviewer 看到的是数字；若给一个命名案例，reviewer 会模拟整个 failure situation，再用 metric 验证。case 是启动感知的 anchor。"
      },
      shikigarasu: {
        text: "Barrett 的 categorization 不是 feature matching，而是按目标取回 past instances。Hakuso 应该把每个 finding 接到 past-case reference，并明确标出 audit goal，让修复不是薄弱的 generic response。"
      }
    },
    "seth-2021": {
      beacon: {
        text: "Seth 的 controlled hallucination 说明人经验到的是 interpretation，不是 raw signal。Beacon 的 contrast metric 会被 developer 的 prior 重新解释；具体案例能改变 top-down interpretation，让问题变得可感。"
      },
      shikigarasu: {
        text: "Hakuso 只列 raw signals 时，强 prior 仍会吞掉 findings。它需要把 verdict 接到使用者已有信念会感到冲突的 reference case，让 audit output 不只是 feature detection，而能改变 interpretation。"
      }
    },
    "solms-2021": {
      beacon: {
        text: "Solms 强调 affect 与 felt consequence。Beacon 的抽象规则会落入自动处理，缺乏动机重量。加入真实案例与后果，可以把 finding 从 automatic register 推到需要自愿注意的层级。"
      },
      shikigarasu: {
        text: "Hakuso 的 verdict grammar 太熟悉，容易被低优先级处理。Solms 的 Law of Affect 暗示每个 high-severity finding 都要加 felt-stakes layer，例如 outage、breach、legal exposure 或 user harm。"
      }
    },
    "clark-2023": {
      beacon: {
        text: "Clark 的 popular account 强调 predictive brain 只会对偏离预期的东西反应。Beacon 熟悉的 rule citation 不会产生 prediction error；具体 precedent 会迫使 reviewer 把自己的 UI 和 anchor case 做 active matching。"
      },
      shikigarasu: {
        text: "Hakuso 的 PASS / CONDITIONAL verdict 会先种下高信心 prior，让后面的 evidence 变成 confirmation。它应该延后 verdict，或先放 falsifying case，避免 findings 被 verdict label 预先收编。"
      }
    },
    "kk-2009": {
      beacon: {
        text: "Kahneman 与 Klein 指出可靠直觉需要 valid cues 与 feedback。Accessibility review 常是 wicked environment，后果延迟又不明。Beacon 应该用 resolved cases 当 feedback proxy，帮 reviewer 建立可学习的 cue-outcome 关系。"
      },
      shikigarasu: {
        text: "K&K 的 fractionated expertise 提醒 Hakuso 不要把所有 finding 都包成单一 unified verdict。每个 finding 应标出 validity tier，区分高可学习模式和低可学习判断，避免 overconfidence。"
      }
    },
    "noise-2021": {
      beacon: {
        text: "Noise 指出 absolute rating 会产生大量不一致。Beacon 的 0-100 分数应该锚定到 case scale，例如某个 anchor site 的实际 score 与后果，让 reviewer 做相对判断而不是各自解读抽象数字。"
      },
      shikigarasu: {
        text: "Hakuso 的 verdict 也是隐含 scale 上的 absolute rating。它应先拆成 blast radius、exploitability、pattern frequency 等 mediating assessments，并把每一维锚到过去案例，再组合成 verdict。"
      }
    },
    "sunday-2023": {
      beacon: {
        text: "Sunday 把可靠直觉视为可校准 skill。Beacon 的 isolated finding 没有 calibration anchor；它应在每个 finding 旁放已知 reference case，让 reviewer 用熟悉案例微调到新案例。"
      }
    },
    "bansal-2021": {
      beacon: {
        text: "Bansal 等人显示 feature-based explanation 会提高 blind agreement，即使 AI 错也一样。Beacon 应加入 adversarial mode 或 top-2 counter-evidence，让 explanation informative，而不是只让 finding 更有说服力。"
      },
      shikigarasu: {
        text: "这篇 paper 支持 hakuso rubber-stamp 风险，但不直接证明 precedent comparison 会解决。更直接的设计是 devil's-advocate block:在 verdict 后列出反方最强证据，再请 reviewer confirm。"
      }
    },
    "bucinca-2021": {
      beacon: {
        text: "Buçinca 的 cognitive forcing functions 指出 explanation 本身不够。Beacon 应先让 reviewer 做自己的 pass/fail 判断，再 reveal score 与 explanation；disagreement 才会触发真正分析。"
      },
      shikigarasu: {
        text: "Hakuso front-load verdict 会让人先接受 AI judgment。它应改成 Update flow:先要求 human 或 requesting agent 写 pre-assessment，再显示 hakuso findings 与差异。"
      }
    },
    "chen-2023": {
      beacon: {
        text: "Chen 等人的三条 pathway 说明 example-based explanation 为何能降低 overreliance。Beacon 应在 finding 旁加入 comparator cases，并显示类似案例中 AI 何时正确、何时错，让 reviewer 看见 reliability signal。"
      },
      shikigarasu: {
        text: "Hakuso 的 Verdict + Findings 很像 paper 中容易 rubber-stamp 的 feature-based explanation。它可以保留骨架，但新增 Comparable cases block，显示过去相似 audit 的 verdict 是否被确认或挑战。"
      }
    },
    "vasconcelos-2023": {
      beacon: {
        text: "Vasconcelos 等人显示 written explanation 不一定降低 overreliance，关键是 saliency。Beacon 应把错误直接标在 rendered UI 的失败点，而不是只用文字描述 rule violation。"
      },
      shikigarasu: {
        text: "这篇 paper 反而警告 contrastive example-based explanation 只给 rough understanding，不一定告诉使用者 prediction 是否真。对 hakuso，较可行的是提高错误接受的成本，例如要求 reviewer 逐项 attest findings。"
      }
    }
  },
  ja: {
    "merleau-1945": {
      beacon: {
        text: "Merleau-Ponty は、自然な知覚が常に文脈と場に構造化されていることを示します。Beacon が contrast ratio や WCAG 条文だけを出すと、問題は抽象指標に分解されます。各 finding の横に比較可能な実例を置き、同じ accessibility gap が実 UI でどう現れるかを見せるべきです。"
      },
      shikigarasu: {
        text: "Hakuso の Verdict + Findings + Required fixes は、問題を孤立した属性として並べがちです。各 finding を prior case に結びつけ、既知の auth bypass や N+1 degradation と同型だと示すことで、抽象的な rule violation ではなく situated failure として読ませられます。"
      }
    },
    "friston-2010": {
      beacon: {
        text: "Friston の precision-weighting は、抽象指標だけでは stakes が低く、reviewer の判断が更新されにくいことを示唆します。各 fail score には、実際の lawsuit、user struggle recording、audit failure などの高 precision anchor を添えるべきです。"
      }
    },
    "friston-2013": {
      beacon: {
        text: "この paper は posterior judgment を prior と evidence の precision-weighted mixture として捉えます。Beacon が先に score を出すと tool signal が判断を支配しやすい。先に比較可能な case を見せ、reviewer の calibrated prior を作ってから metric を出すほうがよい。"
      }
    },
    "hohwy-2013": {
      beacon: {
        text: "Hohwy の prediction-error gain は、見慣れた WCAG finding が既存 prior に吸収される理由を説明します。Beacon は高い surprise を持つ case reference を加え、finding が普通の checklist item として流されないようにする必要があります。"
      },
      shikigarasu: {
        text: "Hakuso の固定 verdict format は、読者の audit report への既存モデルを起動し、findings を事前に説明済みにしてしまいます。Critical finding には Closest prior failure を置き、命名された事例で prediction error gain を上げるべきです。"
      }
    },
    "clark-2016": {
      beacon: {
        text: "Clark の precision account では、文脈 grounding のない抽象 signal は影響力が低い。Beacon は feature-based finding に exemplar layer を加え、lawsuit、user-test data、legal precedent などで reviewer の高次モデルを再処理させるべきです。"
      }
    },
    "hohwy-2016": {
      beacon: {
        text: "Hohwy の self-evidencing / EE-circle は、安く予測しやすい evidence が既存仮説を確認するだけになる危険を示します。Example-based finding は、現実の帰結によって benign confirmation loop を中断する prediction-error injection として使うべきです。"
      }
    },
    "barrett-2017": {
      beacon: {
        text: "Barrett は知覚に concept simulation が必要だと論じます。Beacon が rule だけを出すと reviewer は数字を見るだけですが、命名された事例を出すと failure situation 全体をシミュレートし、その後 metric で検証できます。case が知覚を起動する anchor です。"
      },
      shikigarasu: {
        text: "Barrett の categorization は feature matching ではなく、目標に応じた past instances の retrieval です。Hakuso は各 finding を past-case reference に接続し、audit goal も明示することで、修復を generic response にしないようにできます。"
      }
    },
    "seth-2021": {
      beacon: {
        text: "Seth の controlled hallucination は、人が経験するのは raw signal ではなく interpretation だと示します。Beacon の contrast metric は developer の prior で再解釈されます。具体的な case は top-down interpretation を変え、問題を感じ取れるものにします。"
      },
      shikigarasu: {
        text: "Hakuso が raw signals だけを列挙すると、強い prior が findings を飲み込みます。Verdict を既存信念と衝突する reference case に結びつけることで、audit output は feature detection ではなく interpretation を変えるものになります。"
      }
    },
    "solms-2021": {
      beacon: {
        text: "Solms は affect と felt consequence を重視します。Beacon の抽象 rule は automatic register で処理され、動機づけの重さを持ちません。実例と帰結を加えることで、finding を自発的注意が必要な層へ押し上げられます。"
      },
      shikigarasu: {
        text: "Hakuso の verdict grammar は見慣れているため、低優先度で処理されやすい。Solms の Law of Affect からは、high-severity finding ごとに outage、breach、legal exposure、user harm などの felt-stakes layer を置くべきだと読めます。"
      }
    },
    "clark-2023": {
      beacon: {
        text: "Clark の一般向け説明では、predictive brain は予期から外れたものに反応します。Beacon の familiar rule citation は prediction error を生まない。具体的な precedent は、reviewer に自分の UI と anchor case を active matching させます。"
      },
      shikigarasu: {
        text: "Hakuso の PASS / CONDITIONAL verdict は最初に高 confidence prior を作り、後続 evidence を confirmation に変えます。Verdict を遅らせるか、先に falsifying case を置き、findings が verdict label に回収されるのを避けるべきです。"
      }
    },
    "kk-2009": {
      beacon: {
        text: "Kahneman と Klein は、信頼できる直感には valid cues と feedback が必要だと示します。Accessibility review は結果が遅れて見えにくい wicked environment です。Beacon は resolved cases を feedback proxy として使い、学習可能な cue-outcome 関係を作るべきです。"
      },
      shikigarasu: {
        text: "K&K の fractionated expertise は、Hakuso がすべての finding を一つの unified verdict に包む危険を示します。各 finding には validity tier を付け、高 validity pattern と低 validity judgment を区別すべきです。"
      }
    },
    "noise-2021": {
      beacon: {
        text: "Noise は absolute rating が不一致を生むと示します。Beacon の 0-100 score は case scale に anchor し、ある anchor site の score と帰結に照らして相対判断できるようにするべきです。"
      },
      shikigarasu: {
        text: "Hakuso の verdict も暗黙 scale 上の absolute rating です。Blast radius、exploitability、pattern frequency などの mediating assessments に分解し、それぞれを過去事例に anchor してから verdict を組み立てるべきです。"
      }
    },
    "sunday-2023": {
      beacon: {
        text: "Sunday は可靠な直感を校準可能な skill として扱います。Beacon の isolated finding には calibration anchor がありません。各 finding に既知の reference case を添え、reviewer が familiar case から new case へ微調整できるようにすべきです。"
      }
    },
    "bansal-2021": {
      beacon: {
        text: "Bansal らは feature-based explanation が、AI が誤っていても blind agreement を増やすことを示しました。Beacon は adversarial mode や top-2 counter-evidence を加え、finding を説得的にするだけでなく informative にする必要があります。"
      },
      shikigarasu: {
        text: "この paper は hakuso の rubber-stamp リスクを支持しますが、precedent comparison が解決策だとは直接示しません。より直接的には devil's-advocate block を置き、verdict の後に反対側の最強 evidence を示してから reviewer に確認させるべきです。"
      }
    },
    "bucinca-2021": {
      beacon: {
        text: "Buçinca の cognitive forcing functions は、explanation だけでは不十分だと示します。Beacon は先に reviewer 自身の pass/fail 判断を書かせ、その後 score と explanation を reveal するべきです。Disagreement が本当の分析を起動します。"
      },
      shikigarasu: {
        text: "Hakuso が verdict を先に出すと、人は AI judgment を受け入れやすくなります。Update flow として、human または requesting agent に pre-assessment を書かせ、その後 hakuso findings と差分を見せるべきです。"
      }
    },
    "chen-2023": {
      beacon: {
        text: "Chen らの三つの pathway は、example-based explanation が overreliance を下げる理由を説明します。Beacon は finding の横に comparator cases を置き、似た事例で AI がいつ正しく、いつ誤ったかを示して reliability signal を見せるべきです。"
      },
      shikigarasu: {
        text: "Hakuso の Verdict + Findings は、この paper で rubber-stamp されやすい feature-based explanation に近い。骨格は保ちつつ Comparable cases block を追加し、過去の類似 audit verdict が確認されたか挑戦されたかを示すべきです。"
      }
    },
    "vasconcelos-2023": {
      beacon: {
        text: "Vasconcelos らは written explanation が必ずしも overreliance を下げず、鍵は saliency だと示します。Beacon は rule violation を文章で説明するだけでなく、rendered UI の失敗点そのものにエラーを出すべきです。"
      },
      shikigarasu: {
        text: "この paper は contrastive example-based explanation が rough understanding に留まり、prediction の真偽を必ずしも示さないと警告します。Hakuso では、reviewer に findings への attest を求めるなど、誤受容のコストを上げるほうが実用的です。"
      }
    }
  }
};
