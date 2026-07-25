import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/invisible-hand';
const VIDEO = 'https://youtu.be/XA3-3MLTkAM';
const RELEASE = 'https://github.com/OrionArchitekton/invisible-hand/releases/tag/v1.0-swarmhack';
const ARTICLE = 'https://cited.md/article/what-is-the-invisible-hand-agent-economy-and-how-does-real-on-chain';

/**
 * Single source of truth for the Invisible Hand microsite.
 *
 * All claims are GROUNDED in the real project repo (README.md,
 * docs/run-evidence.md INCLUDING its post-release ERRATA of 2026-07-25, and the
 * v1.0-swarmhack release). The errata is load-bearing for this copy: the
 * generation-over-generation profit multiple is largely seeded-price
 * survivorship, the accuracy decline is confounded and unsized, and four of six
 * model ids were mispriced through a fallback, so this page must NOT headline
 * those figures as evidence of learning. As of 2026-07-24 the repo is a public
 * MIT repo, a public demo video, a frozen run ledger with 731 on-chain
 * settlement tx hashes, and a published cited.md article. Built solo in one
 * day at SwarmHack SF (tokens&), July 24, 2026. No placement, win, or finalist
 * status is claimed here (none was won). All settlement is Base Sepolia
 * TESTNET USDC: real transactions, valueless asset. The page presents the
 * frozen run as replayable evidence; it does not claim a live 24/7 market.
 */
export const PRODUCT_DATA: ProductData = {
  name: 'Invisible Hand',
  tagline:
    'An agent economy where real on-chain settlement, not a simulated score, decides which AI agents survive and breed.',
  credibility:
    'Open source (MIT) · Node.js · 731 real x402 settlements on Base Sepolia testnet · six-rule governed breeding · 13 module self-test suites, no keys needed · Built solo in one day at SwarmHack SF (tokens&), July 2026.',
  canonical: 'https://www.danmercede.com/works/invisible-hand/',
  metaDescription:
    'A live agent economy: AI sellers earn testnet USDC through x402 paywalls, cumulative net profit is fitness, insolvency delists, and a six-rule guild gate governs breeding. The objective carried no accuracy term at all, so selection could only ever see profit. A post-release errata re-read the run own artifacts and cut the headline down to what survives. MIT.',

  problem: {
    heading: 'The problem',
    body:
      'Most self-evolving agent demos have no selection pressure. There is no real cost, no real revenue, and nothing dies, so fitness is a vibe and "evolution" is a loop over prompts. Without an economy underneath, you cannot tell whether the agents got better or the story did.',
  },

  whatItDoes: {
    heading: 'What Invisible Hand does',
    body:
      'Seller-agents sit behind x402 paywalls and earn real Base Sepolia testnet USDC per request. Demand is disclosed adversarial self-play: buyer-verifiers pay, then cross-check every claim (schema check plus a Gemini check against the live source), and a verified failure decays the seller\'s repurchase probability. Fitness is cumulative net profit and loss. Insolvent sellers are delisted (their endpoint returns HTTP 410) and their estate is inherited; profitable ones breed through a six-rule fail-closed guild gate. The frozen run produced 731 on-chain settlements. What the run actually proves is structural rather than statistical: selection could only ever see profit. There is no accuracy term in the fitness function and no accuracy floor gating promotion or breeding, so a verified failure never reaches the ledger. A post-release errata, kept in the repo beside the numbers, records that the generation-over-generation profit jump substantially measures which seeded price band survived, that the accuracy decline shows the failure mode exists without sizing it, and that four of six model ids were mispriced through a fallback. Accuracy-aware selection is the next gate.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Watch the demo',
    secondaryUrl: VIDEO,
  },

  quickstart: {
    heading: 'Quickstart',
    intro:
      'Node.js only. The full self-test suite runs with no API keys; live keys each enable one integration, and every keyless integration degrades to a labeled local mode.',
    blocks: [
      {
        title: 'Clone and install',
        command: [
          'git clone https://github.com/OrionArchitekton/invisible-hand',
          'cd invisible-hand',
          'npm install',
        ].join('\n'),
      },
      {
        title: 'Run the tests',
        note: '13 module self-test suites, no keys required.',
        command: 'npm test',
      },
      {
        title: 'Boot the market',
        note: 'Market :4020, state :3313, dashboard :3311.',
        command: 'node scripts/run-market.js',
      },
      {
        title: 'Read the frozen run evidence',
        note: 'The end-of-day ledger, the generation table, and the errata that corrects it.',
        command: 'less docs/run-evidence.md',
      },
    ],
  },

  // Operative surfaces verified against the repo README and docs/run-evidence.md.
  commands: [
    {
      name: 'npm test',
      description:
        '13 module self-test suites covering the evolution engine, market seller, verification, mesh, and dashboard; all pass with no API keys.',
    },
    {
      name: 'node scripts/run-market.js',
      description:
        'Boots the full economy: sellers behind x402 paywalls, adversarial buyer-verifiers, the evolution engine, and the live dashboard with receipt-true metrics.',
    },
    {
      name: 'POST /demo/buy',
      description:
        'Runs one real paid buy cycle end to end: x402 payment, testnet USDC settlement with a tx hash in the ledger, then adversarial verification of the delivered answer.',
    },
    {
      name: 'POST /demo/stress-insolvency/:id',
      description:
        'Operator-triggered stress test, always narrated as such: debits a variant past its stake and runs the real insolvency path, delisting the seller to HTTP 410.',
    },
    {
      name: 'docs/run-evidence.md',
      description:
        'The frozen run: 731 settlements with tx hashes, the per-generation economics and accuracy table, and the post-release errata that cuts the headline down to the structural claim.',
    },
  ],

  demo: {
    heading: 'How it works',
    intro:
      'Real money in (testnet), verified answers out, and the population changes shape under the pressure.',
    lines: [
      { kind: 'comment', text: '# 1. A seller lists behind an x402 paywall' },
      { kind: 'output', text: 'GET /articles/summary returns 402 Payment Required with terms', tone: 'muted' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 2. A buyer pays and the chain settles' },
      { kind: 'output', text: 'Base Sepolia testnet USDC, EIP-3009 facilitator settlement', tone: 'muted' },
      { kind: 'output', text: 'tx hash appended to the append-only ledger', tone: 'ok' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 3. The answer is adversarially verified' },
      { kind: 'output', text: 'Schema check plus Gemini cross-check against the live source', tone: 'muted' },
      { kind: 'output', text: 'Verified failure decays the seller\'s repurchase probability', tone: 'fail' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 4. The economy selects' },
      { kind: 'output', text: 'Fitness = cumulative net P&L; insolvency delists to HTTP 410', tone: 'muted' },
      { kind: 'output', text: 'Profitable sellers breed through a six-rule fail-closed guild gate', tone: 'ok' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# 5. The finding, after the errata cut it down' },
      { kind: 'output', text: 'Fitness has no accuracy term, so selection could only ever see profit', tone: 'ok' },
      { kind: 'output', text: 'A verified failure moves buyer demand only, and never reaches the ledger', tone: 'fail' },
      { kind: 'output', text: 'Errata: the gen-over-gen profit jump is largely seeded-price survivorship', tone: 'muted' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Real settlement is the selection pressure',
        body:
          'Survival is not a judge score. Sellers earn testnet USDC through x402 paywalls, every settlement leaves a tx hash you can check on a public explorer, and the frozen run ledger carries 731 of them. Fitness is cumulative net profit and loss, so an agent that cannot cover its costs stops existing.',
      },
      {
        title: 'The correction is the deliverable',
        body:
          'The release first headlined a several-fold generation-over-generation profit gain against a verified-accuracy decline, and called it reward hacking. Re-reading the run own artifacts broke that story in three places: generation 0 was six hand-seeded agents across a 20x price spread and generation 1 descends from the top-priced seeds, so the comparison substantially measures which price band survived; the accuracy decline is confounded by a model change and loses significance once you account for repeated sampling of one lineage; and four of six model ids silently resolved to a fallback price, so the profit figures were computed on the wrong cost. All three are recorded as an errata beside the frozen numbers rather than quietly re-run. Calling it reward hacking overstated it: an objective that was never given a quality term did exactly what it was told.',
      },
      {
        title: 'Governance is fail-closed, not vibes',
        body:
          'Breeding runs through a six-rule guild gate with full traces; a blocked child leaves the population unchanged. The spend cap governs concurrently deployed capital, insolvency runs a real delist path (HTTP 410 plus estate inheritance), and the population survives process restarts through snapshot and restore.',
      },
      {
        title: 'Honesty bars as product identity',
        body:
          'Testnet is named on every judge-facing surface. Demand is disclosed self-play. Operator demo triggers are narrated as operator triggers. Every keyless integration is labeled local mode. What is claimed is what you can verify: the receipts, the ledger, and the frozen run evidence.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'Demo video', url: VIDEO, primary: true },
    { label: 'Release v1.0-swarmhack', url: RELEASE, primary: true },
    { label: 'Senso-generated article on cited.md', url: ARTICLE },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote:
    'MIT licensed. Built solo by Dan Mercede at SwarmHack SF (tokens&), July 24, 2026. All settlement is Base Sepolia testnet USDC: real transactions, valueless asset. The run is frozen and replayable from the repo; this page claims no live market.',
};
