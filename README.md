# invisible-hand-site

Vite/React microsite for the `Invisible Hand` project page at
`https://www.danmercede.com/works/invisible-hand/`.

## Role

This repo owns the marketing/presentation surface for `Invisible Hand` (an
agent economy where real on-chain settlement on Base Sepolia testnet selects
which AI seller-agents survive and breed, built solo in one day at SwarmHack
SF, July 2026): layout, copy, metadata, static assets, and Vercel
routing/cache config. The source project owns the Node.js implementation, the
evolution engine, the market, the verification stack, and the dashboard.

## Source Of Truth

- Product repo: github.com/OrionArchitekton/invisible-hand
- Site copy: `constants.ts`
- Metadata: `index.html`
- Routing/cache: `vercel.json`

## Build

```bash
npm install
npm run build
```

The build bakes the page body into `dist/` for crawlers (no JS required for
the primary content).

## Boundaries

Keep claims grounded in the source project README, docs/run-evidence.md, and
verified behavior. Every settlement figure is Base Sepolia TESTNET USDC and is
labeled testnet wherever quoted. No placement, win, or finalist status was
won; never state one. Do not change the Invisible Hand engine from this repo.
