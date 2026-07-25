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
  run numbers (731 settlements; gen1 $0.681 vs gen0 $0.098 per 100 requests;
  accuracy 51% to 43%) come from docs/run-evidence.md; do not restate them
  without that grounding. No placement, win, or finalist status was won;
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
