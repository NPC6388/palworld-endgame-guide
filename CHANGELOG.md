# Changelog

Notable changes to the guide. Newest at the top.

---

## 2026-09-03 — Bottleneck correction (`34fdae8`)

Reader feedback ("consider that expeditions yield cores, and i have them running constantly")
invalidated the previous framing and, followed through, inverted the conclusion.

### Corrected
- **Expedition Stations are one per base but stack across bases.** With expeditions running
  continuously, Ancient Civilization Cores accrue at ~3.5/hr per station and stop being a
  constraint at all. The previous "20 cores per Beam Launcher" headline was background noise.
- **The Sunreach Soralite route was under-reported.** What was listed as a single 5-node cluster
  at `-300, -1400` is one stop of a **five-stop loop**: 30–40 nodes at ~40 ore each,
  **1,200–1,600 raw Soralite in 10–12 minutes**, on a 30-minute respawn. A Beam Launcher needs 300.
- **Paloxite node mechanic restated.** Nodes *vanish as you approach* without Holy Water, rather
  than simply being unmineable. One bottle buys a window to chain several clustered nodes.

### New conclusion
With expeditions running and routes set, **no raw input is the constraint** — the binding limit is
**Ancient Furnace throughput**: only two Pals can work a furnace, and its workload splits evenly
between Kindling and Cooling, so one specialist covers half the job. Pair Renjishi (Kindling 8)
with Bastigor (Cooling 8) and scale by building more furnaces.

### Also
- Index headline advice swapped from "start the AI Core chain" to "build a second Ancient Furnace".
- Added the full 5-stop Sunreach route table to `world-farming.html`.
- Added the reported *Rainbow passive* Holy Water alternative, flagged unconfirmed.
- Downgraded the datamined "1,000,000 work" figure to **Unresolved** — its units are unverified.
  The furnace *constraint* is well-sourced; the per-ingot *time* is not.
- Added a correction log to `sources.html` rather than quietly editing the old claim.

---

## 2026-09-03 — Demand-side gaps closed (`90c12b7`)

Filled in what the killed research pass could not reach.

### Added
- **Ledger 39 → 45 materials.** New: Hexolite Quartz, Cryogenic Coolant, Corrosive Solvent,
  Bio Battery, Thermal Core, AI Core.
- **All 13 Lv67–80 weapon recipes** and their ammo costs with per-craft yields.
- **The armour ladder** with defence values, resistances and recipes.
- **The six-tier AI Core chain** (Cryogenic Coolant → Corrosive Solvent → Bio Battery → Computer
  → Thermal Core → AI Core), with a worked example unpacking one Beam Launcher to raw materials.
- **All five cake recipes**, sphere recipes, and **per-boss Ultra raid loot tables** with drop rates.
- **The Lv80 stat spread** — ~79 points, 50-per-stat cap, Weight > Stamina > HP, skip Attack and
  Work Speed. Replaced the previous "gap I could not close" note.

### Findings
- The **Plasma Rifle is 4× more ammo-efficient than the Beam Launcher** — 0.15 vs 0.6 Paloxite
  Ingot per round, same materials but double the yield.
- **Two Ultra raids return their slab at 100%** (Bellanoir Libero, Hartalis) and **two at 10%**
  (Blazamut Ryu, Xenolord), which decides which are actually farmable.
- Hexolite Quartz and Chromite are both on Feybreak — one trip, not two.

### Flagged, not resolved
Computer recipe (Tech 50); a source conflict on the Plasma Rifle cost (80 vs 100 Paloxite Ingot);
the Sulfur→Gunpowder rate; whether "Hexolite" is a smelt step from "Hexolite Quartz"; the Plasteel
recipe.

---

## 2026-09-03 — Initial build (`1eac3b6`)

A level-80 reference for Palworld 1.0.3 answering three questions in order: what has no vendor at
any price, what a base Pal can produce passively, and what party to take for the rest.

### Added
- **`index.html`** — 39-material filterable ledger with buy/base/world verdicts. Headline counts
  computed from the data so they cannot drift.
- **`merchants.html`** — 12 vendor archetypes, 4 currencies, locations, stock lists.
- **`base-production.html`** — the 1.0 work-suitability rework, all 29 ranch Pals, craft chains,
  node-base coordinates.
- **`world-farming.html`** — drop-rate mechanics and stacking, party templates, per-material routes,
  expedition firepower.
- **`endgame-demand.html`** — initial (thin) demand-side page.
- **`sources.html`** — per-claim confidence ledger and unverified gaps.
- **`research/01-merchants-vendors.md`** — the raw vendor research with inline citations.

### Findings
- At Lv80 gold buys consumables, ammo, meds, bait, ranch commodities, skill fruits, hat schematics
  and live Pals — **nothing else**. 25 of 39 materials had no vendor row.
- **Polymer, Carbon Fiber and Cement have no vendor row but are craft-only and fully automatable** —
  the most commonly wasted farming time in the game.
- **Drop-rate partner skills only affect items from defeated Pals**, not mining nodes — so there are
  two distinct farming games with incompatible party comps.
- **Different Pals with the same drop-boost effect stack**, despite the in-game tooltip saying
  they do not.

### Note
Built against a datamine snapshot at build 24088745 (July 2026); patches 1.0.2 and 1.0.3 landed
after it, so gold figures are treated as roughly one patch stale throughout.
