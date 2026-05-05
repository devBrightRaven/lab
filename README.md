# 工房 · Lab

> A workshop of thinking visualizations under [Bright Raven World](https://brightraven.world)

`lab` houses experimental, interactive, and visual artifacts. Each item here is a thinking presentation — visual, structural, sometimes playful, often WIP.

URL: https://lab.brightraven.world/

## What's here

| Slug | Project | Status |
|---|---|---|
| `mandara/` | 曼荼羅 — interactive atlas of 23 thinking paradigms | v0.3.1 · WIP |

## Conventions

- Each experiment lives in its own subdirectory at the lab root.
- Assets are self-contained per directory, so any item can graduate to its own subdomain (e.g. `<slug>.brightraven.world`) without rewiring URLs.
- Static-only: HTML/CSS/JS, no build step. GitHub Pages friendly.
- Brand aesthetic shared via Google Fonts (Newsreader · Noto Serif TC · JetBrains Mono · Source Sans 3) and a small set of color tokens (paper / ink / cat-1 through cat-6).

## Stack

Plain HTML + CSS + vanilla JS. Optional Playwright + axe-core for testing. No framework, no build pipeline.

## Graduating an experiment

When an item matures into a "product" rather than a sketch:

1. Move the subdirectory contents into a new repo `devBrightRaven/<slug>`.
2. Configure GitHub Pages on that repo with custom domain `<slug>.brightraven.world`.
3. Leave a redirect or a final note in the `lab/<slug>/` directory and remove the live content.

This pattern keeps lab as an incubator and lets graduates build their own narrative.

## License

Personal use; ask before reuse in commercial work.
