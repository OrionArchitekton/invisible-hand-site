# AGENTS.md - invisible-hand-site

## Repo Role

`invisible-hand-site` is the Vite/React microsite for the `Invisible Hand`
project page at danmercede.com/works/invisible-hand/. It owns presentation,
metadata, static assets, and cache config for the site surface.

## Boundaries

- Owns site copy, layout, Open Graph metadata, Vercel config, and static assets.
- Does not own the Invisible Hand Node.js implementation, tests, evolution
  engine, market, or dashboard (github.com/OrionArchitekton/invisible-hand).
- Keep product claims grounded in the source project README,
  docs/run-evidence.md, and verified behavior. All settlement figures are Base
  Sepolia TESTNET USDC and must be labeled testnet wherever quoted. The frozen
  run numbers come from docs/run-evidence.md, which carries a post-release
  ERRATA (2026-07-25) that is binding on this copy: the generation-over-
  generation profit multiple is largely seeded-price survivorship computed on a
  fallback price, the accuracy decline is confounded and unsized, and calling
  the result reward hacking overstates it. Do NOT headline those figures as
  evidence of learning; the claim that survives is structural (fitness carries
  no accuracy term, so selection could only ever see profit). No placement, win, or finalist status was won;
  never state one. No em or en dashes in any public-facing copy.

## Authority Order

1. `/home/orion/src/orion-estate/platform/orion-estate-audit/AGENTS.md`
2. Source project: the `invisible-hand` repo README.md and docs/
3. This repo's `README.md`, `constants.ts`, `index.html`, and `vercel.json`
4. Vite build output and package scripts

## Validation

```bash
npm install
npm run build
```
