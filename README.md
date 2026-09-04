# Palworld 1.0 Endgame Ledger

A level-80 endgame reference for **Palworld 1.0.3** (solo world, default settings), built to answer three questions in order:

1. **What can I *not* buy from a merchant?** — so I know what has to be farmed at all.
2. **For the things I must farm, can a base Pal produce it?** — or do I have to go out into the world?
3. **If I must go out, what party do I take?** — to maximise yield per hour.

**Live site:** https://npc6388.github.io/palworld-endgame-guide/

## Pages

| Page | What it covers |
|---|---|
| `index.html` | The material ledger — 45 materials, filterable, with a buy/base/world verdict for each |
| `merchants.html` | All 12 vendor archetypes, locations, stock lists, and the four currencies |
| `base-production.html` | The 1.0 work-suitability rework, all 29 ranch Pals, craft chains, node-base coordinates |
| `passives.html` | Passive stacks by role — work, combat, mount — plus World Tree and Rainbow passives and how to get them |
| `world-farming.html` | Drop-rate mechanics, stacking, party templates, per-material routes, expeditions |
| `endgame-demand.html` | What consumes your materials — every Lv67-80 weapon and ammo recipe, the armour ladder, the AI Core chain, cakes, spheres, Ultra raid loot, the Lv80 stat spread |
| `sources.html` | Every source, a confidence ledger, and an honest list of what is unverified |

Project notes: [`CHANGELOG.md`](CHANGELOG.md) for what changed and when, [`SESSION_LOG.md`](SESSION_LOG.md) for handoff notes and open watch-outs.

## The headline answers

- At Lv80, **gold buys consumables, ammo, meds, bait, ranch commodities, skill fruits, hat schematics and live Pals — nothing else.** Every ore, ingot, alloy, ancient material, World Tree resource and raid drop is farm-only.
- **Most things that look unfarmable are actually craft-only and fully automatable** — Polymer, Carbon Fiber and Cement all have no vendor row but close into self-sustaining base loops.
- **Only four raw materials genuinely require field trips:** Chromite (buried, Feybreak), Hexolite Quartz (Feybreak — do both on one trip), Soralite (Sunreach Isles) and Paloxite (World Tree, and you must drink Holy Water to mine it).
- **Drop-rate partner skills only affect items from defeated Pals.** They do nothing for mining nodes — so the "best farming party" depends entirely on which of the two farming games you are playing.
- **Once expeditions are running and routes are set, the ceiling is base worker slots.** Furnaces have no build limit, but each takes two Pals (Kindling *and* Cooling), and a base holds 15 workers by default — so 7 furnaces if you dedicate a base to smelting. Scale by adding bases.
- **Work-*speed* passives are universal across all twelve jobs** (up to **+245%**), and they raise ranch output too — so one template covers most base Pals. **Farming is the exception:** it caps at 4 naturally instead of 8, and it is the only job with passives that raise its suitability (**Ranch Master +2**, **Farmhand +1**). Four templates cover the game: worker, ranch, combat, mount.
- **The AI Core chain is six tiers deep** (Cryogenic Coolant → Corrosive Solvent → Bio Battery → Computer → Thermal Core → AI Core), but the bottom three are ranch-fed and fully automatable — start them early.
- **The Plasma Rifle is 4× more ammo-efficient than the Beam Launcher** — 0.15 vs 0.6 Paloxite Ingot per round.
- **Weapon material cost scales with schematic rarity**, so a published "recipe" is meaningless without its tier. The Common Plasma Rifle is 68 Paloxite Ingot / 42 Bio Battery / 6 AI Core / 5 Ancient Civ Core.
- **Drop-boosters stack across different species, not duplicates** — two Menasting do nothing, but Menasting + Menasting Terra stack to ~160%. A regional variant counts as a different species. Fire, Neutral, Electric and Dark each have two species and can be doubled; the other elements have one.
- **Holy Water is the one endgame material you get by killing Pals**, so it is the one route where a drop-boosting party is the whole point — the Alluvion Lakefront loop at `-1638, 1340`, reported 500+ in 10–15 min.
- **Paloxite nodes despawn from your *Pal’s* proximity too**, not just yours — or skip the mechanic entirely with a World Tree passive (Dimensional Leap / Hermit Sage) for permanent protection.

## A warning about Palworld sources

Most Palworld guides on the web are from the **0.1.x early-access era (January 2024)** and are wrong for 1.0 — recipes, tiers, prices and the entire work-suitability system changed. Some sites serve stale early-access data under a 2026 date stamp. Every claim here carries a confidence rating, and `sources.html` lists what could not be verified rather than smoothing over the gaps.

## Structure

```
index.html               entry point — the ledger
merchants.html
base-production.html
passives.html
world-farming.html
endgame-demand.html
sources.html
assets/style.css         theme-aware, no build step
assets/app.js            ledger filtering + headline counts
data/materials.js        the ledger data — edit this to update the table
research/                raw research write-ups with inline citations
CHANGELOG.md             what changed, newest at the top
SESSION_LOG.md           handoff notes and unresolved watch-outs
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
