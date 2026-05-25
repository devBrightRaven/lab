# 工房 · Lab

> A workshop of thinking visualizations under [Bright Raven World](https://brightraven.world)

`lab` houses experimental, interactive, and visual artifacts. Each item here is a thinking presentation — visual, structural, sometimes playful, often WIP.

URL: https://lab.brightraven.world/

## What's here

| Slug | Project | Source repo | Status |
|---|---|---|---|
| `mandara/` | 曼荼羅 — interactive atlas of 23 thinking paradigms | [`devBrightRaven/mandara`](https://github.com/devBrightRaven/mandara) `main` | v0.4.0 · WIP |
| `asagiri/` | 朝霧 — daily startup research engine showcase | [`devBrightRaven/asagiri`](https://github.com/devBrightRaven/asagiri) `refactor/thin-orchestrator` (`/design-site`) | design |
| `shiori/` | 栞 — interactive reading map for human-AI decision making | this repo | v0.1.0 |

## Sync arrangement

`mandara/` and `asagiri/` directories are **mirrored automatically** from the source repos above by [`.github/workflows/sync-instruments.yml`](.github/workflows/sync-instruments.yml). The action runs every 15 minutes and on manual dispatch.

**Do not edit `mandara/` or `asagiri/` directly in this repo** — changes will be overwritten on the next sync. Edit in the source repo and the change flows here automatically.

Files tracked by this repo directly: `index.html` (landing), `shiori/`, `CNAME`, `README.md`, `.gitignore`, `.nojekyll`, and `.github/workflows/`.

## Conventions

- Each experiment lives in its own subdirectory at the lab root.
- Assets are self-contained per directory, so any item can graduate to its own subdomain (e.g. `<slug>.brightraven.world`) without rewiring URLs.
- Static-only: HTML/CSS/JS, no build step. GitHub Pages friendly.
- Brand aesthetic shared via Google Fonts (Newsreader · Noto Serif TC · JetBrains Mono · Source Sans 3) and a small set of color tokens (paper / ink / cat-1 through cat-6).

## Stack

Plain HTML + CSS + vanilla JS. Optional Playwright + axe-core for testing. No framework, no build pipeline.

## Graduating an experiment

When an item matures into a "product" rather than a sketch:

1. The source repo already exists (see Sync arrangement table above) — that becomes the home of the graduated product.
2. Configure GitHub Pages or Cloudflare Pages on that repo with custom domain `<slug>.brightraven.world`.
3. Remove the slug from `.github/workflows/sync-instruments.yml` so lab stops mirroring.
4. Either remove `<slug>/` from this repo, or leave a redirect HTML pointing to the new domain.

This pattern keeps lab as an incubator and lets graduates build their own narrative under their own domain.

## License

Personal use; ask before reuse in commercial work.
