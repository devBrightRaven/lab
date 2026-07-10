# Shiori Ship Notes

Date: 2026-05-31
Commit reviewed: `2fc4da8 Redesign Shiori entrance and reading map`

## Ship Scope

Shiori moved from a reading-map-first service page into a broader AI-era self-awareness entrance:

- Hero reframed around what should stay human-owned in AI workflows.
- Five symptom doors route visitors into the self-check.
- Vanilla JS self-check maps answers to five AI drift layers.
- Silent Diagnosis is presented as low-pressure written diagnosis, not teaching or workshop funnel.
- Existing reading map data, three view modes, relation chips, local markdown paths, dialog behavior, and progress semantics remain.
- Reading map now lives under "Why this exists" as deeper theory.

## Post-Push QA

Checked locally with a static server and headless Chrome.

Viewports:

- `1440x900`
- `768x1024`
- `390x844`
- `320x740`

Runtime checks:

- No console errors or warnings.
- No document horizontal overflow.
- Self-check answers submit and focus the result panel.
- Symptom door seeds the first self-check answer.
- Reading map renders 17 paper nodes in all three modes.
- View mode buttons switch constellation, stack, and sequence.
- Paper dialog opens and focuses the close button.
- Same paper card can cancel understood state and return progress from `1/17` to `0/17`.
- Relation highlight remains separate from progress.
- Desktop constellation geometry has no overlapping paper-card hit areas after the final compact-node fix.

Accessibility:

- `node --check shiori/script.js` passed.
- `git diff --check` passed.
- Lighthouse accessibility score: `100`.
- Lighthouse on Windows still reports a temp-profile cleanup `EPERM` after writing the report; the audit report itself is valid.

## Review Findings

### Fixed During Review

- Desktop constellation cards could overlap enough for one card to intercept clicks intended for another card.
- The fix keeps the paper data intact and changes only the constellation card presentation:
  - compact fixed-size overview nodes,
  - two-line topic clamp,
  - hidden `extended-label` only inside constellation mode,
  - `scroll-margin-top` for paper nodes so sticky nav does not obscure scroll-to-focus behavior.

### Remaining Product Risks

- The reading map is now usable, but its relation between "understood progress" and "paper detail" is still a learned behavior. The current interaction is consistent, but a first-time user may not immediately know that clicking a paper both opens detail and marks it understood.
- The page is strong for self-aware AI users, but may still be text-dense for completely cold visitors. The symptom doors help; the next iteration should watch whether users reach the self-check without reading too much.
- `Contact through Bright Raven` links to the root site, not a Shiori-specific intake page. This is honest, but less conversion-specific.

## Product / Design Critique

Verdict: ship-worthy as a lab/product entrance, with one next product decision still open.

What works:

- The page now starts from a recognizable user problem instead of assuming visitors care about a research map.
- The self-check protects user agency: it helps name a layer without prescribing a conclusion too early.
- Silent Diagnosis avoids teaching-first pressure and keeps the offer aligned with low-friction written review.
- The reading map now functions as proof of theory rather than the front door.
- The dark inspector dialog now belongs to the map instead of feeling like a separate white document UI.

What to improve next:

- Decide whether Shiori needs a dedicated intake URL or form. The current public CTA is intentionally conservative, but it leaves motivated visitors one step away from the actual diagnosis action.
- Consider adding a short result-specific next step under each self-check result. Keep it bounded: one action, not a funnel.
- If reading map progress is meant to persist across sessions, add explicit local-only persistence later. Do not silently persist it now.

## Deployment Notes

Repository root is configured for:

- `https://lab.brightraven.world/`
- Shiori path: `https://lab.brightraven.world/shiori/`

After the clickability fix is pushed, verify the live URL again once Pages/CDN has updated.

## 2026-07-11 Follow-up

- Completed all locale keys for English, Japanese, Simplified Chinese, and Traditional Chinese, including paper detail content.
- Replaced the root-site CTA with a direct email intake for Shiori Silent Diagnosis.
