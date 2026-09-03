# Palworld 1.0 Endgame Ledger

A level-80 endgame reference for **Palworld 1.0.3** (solo world, default settings), built to answer three questions in order:

1. **What can I *not* buy from a merchant?** — so I know what has to be farmed at all.
2. **For the things I must farm, can a base Pal produce it?** — or do I have to go out into the world?
3. **If I must go out, what party do I take?** — to maximise yield per hour.

**Live site:** https://npc6388.github.io/palworld-endgame-guide/

## Pages

| Page | What it covers |
|---|---|
| `index.html` | The material ledger — 39 materials, filterable, with a buy/base/world verdict for each |
| `merchants.html` | All 12 vendor archetypes, locations, stock lists, and the four currencies |
| `base-production.html` | The 1.0 work-suitability rework, all 29 ranch Pals, craft chains, node-base coordinates |
| `world-farming.html` | Drop-rate mechanics, stacking, party templates, per-material routes, expeditions |
| `endgame-demand.html` | What consumes your materials — verified recipes, ATP costs, 1.0.3 changes |
| `sources.html` | Every source, a confidence ledger, and an honest list of what is unverified |

## The headline answers

- At Lv80, **gold buys consumables, ammo, meds, bait, ranch commodities, skill fruits, hat schematics and live Pals — nothing else.** Every ore, ingot, alloy, ancient material, World Tree resource and raid drop is farm-only.
- **Most things that look unfarmable are actually craft-only and fully automatable** — Polymer, Carbon Fiber and Cement all have no vendor row but close into self-sustaining base loops.
- **Only three materials genuinely require field trips:** Chromite (buried, Feybreak), Soralite (Sunreach Isles) and Paloxite (World Tree, and you must drink Holy Water to mine it).
- **Drop-rate partner skills only affect items from defeated Pals.** They do nothing for mining nodes — so the "best farming party" depends entirely on which of the two farming games you are playing.
- **Different Pals with the same drop-boost effect stack**, despite the in-game tooltip saying otherwise.

## A warning about Palworld sources

Most Palworld guides on the web are from the **0.1.x early-access era (January 2024)** and are wrong for 1.0 — recipes, tiers, prices and the entire work-suitability system changed. Some sites serve stale early-access data under a 2026 date stamp. Every claim here carries a confidence rating, and `sources.html` lists what could not be verified rather than smoothing over the gaps.

## Structure

```
index.html               entry point — the ledger
merchants.html
base-production.html
world-farming.html
endgame-demand.html
sources.html
assets/style.css         theme-aware, no build step
assets/app.js            ledger filtering + headline counts
data/materials.js        the ledger data — edit this to update the table
research/                raw research write-ups with inline citations
```

No build step, no dependencies. `data/materials.js` is a plain `<script>` rather than fetched JSON, so the site also works opened straight from the filesystem.

## Updating the ledger

Edit `data/materials.js`. Each entry:

```js
{
  name: "Material name",
  tags: ["ore", "cannot-buy", "must-leave"],
  buy:  { status: "no",  detail: "Vendor situation." },
  base: { status: "yes", detail: "How to automate it." },
  world: "Where it really comes from.",
  party: "What to take with you.",
  conf:  "High"
}
```

`buy.status` is one of `no` / `poor` / `rotate` / `yes`. `base.status` is one of `yes` / `partial` / `no`. The headline counts on the index page are computed from the data, so they cannot drift.

---

Compiled September 2026 against Palworld 1.0.3.
