# Changelog

Notable changes to the guide. Newest at the top.

---

## 2026-09-04 - In-game screenshots: Computer chain confirmed, per-job passive claim corrected

Player-supplied screenshots of the crafting UI and two passive tooltips. Highest-confidence source
in the guide so far.

### Corrected - the headline on `passives.html` was wrong
The page claimed **"there are no per-job passives"**. Screenshots show **Farmhand (Farming's Work
Suitability +1)** and **Ranch Master (+2)**. Per-job passives do exist - they are just confined to
Farming, which is also the only job with a natural cap of **4** instead of 8. The claim now reads:
work-*speed* passives are universal; Farming is the one job with suitability passives.

The generalisation was drawn from an absence of evidence about the other eleven jobs, which is
exactly the reasoning error this guide warns about elsewhere.

- New ranch stacking ladder: **Farming 4 -> 6** (Ranch Master) **-> 7** (Farmhand) **-> 8** (Applied
  Ranching Handbook, 300 Dog Coin) **-> 9** (Cinnamoth work aura, +1 to every *other* Pal at base)
  **-> 10** (condensation).
- Documented **work auras** properly: 12 Pals, one per job, each granting +1 of that suitability to
  all other Pals at the base. Cinnamoth for Farming, Ribbuny for Handiwork.
- Ranch template is now **Ranch Master + Farmhand + two work-speed passives**.
- Templates go from three back to **four**: general worker, ranch worker, combat, mount.

### Confirmed - the AI Core chain is complete
- **Computer** = `2 Circuit Board + 3 Plasteel + 2 Bio Battery + 2 Carbon Fiber`, **workload 2,500**.
  Closes the last gap in the chain.
- **AI Core** = `5 Computer + 10 Soralite Ingot + 2 Thermal Core + 1 Ancient Civ Core`,
  **workload 50,000** - matching what the guide had already sourced.
- Added **Circuit Board** (`2 Pure Quartz + 1 Polymer`), **Plasteel** (`5 Crude Oil + 5 Paldium +
  10 Ore`, Electric Furnace only) and **Crude Oil**. Ledger 45 -> **49 materials**.
- The Beam Launcher worked example now unpacks two tiers deeper: 50 Computers means **150 Plasteel**,
  which means **1,500 Ore** and 750 Crude Oil. That is the number that surprises - it is why a
  serious ore base still earns its keep at Lv80.

### Removed - bad workload figures
The datamined "700,000 for a Soralite Ingot" and "1,000,000 for a Paloxite Ingot" **cannot be right**:
an AI Core consumes ten Soralite Ingots and is itself only 50,000. Both figures are deleted rather
than left to mislead, with a note explaining why.

### Dropped
The Teafant Spring yield conflict, at the player's request - not a route they use.

---

## 2026-09-04 - Ranch work-speed question resolved

Player confirmation from live 1.0.3 play: **work speed increases ranch Pal output**, not just the
animation rate. The open question raised earlier the same day is closed.

### Changed
- **Ranch Pals take the standard worker passive stack.** The breeding programme drops from **four
  templates to three** - worker, combat, mount - because a ranch Pal *is* a worker.
- **Two independent multipliers per ranch slot**, and they stack: condensation rank raises drop
  quantity per cycle (rank 1 -> rank 5 is roughly 1 -> 1-5), and work speed raises output on top.
- Added the compounding note: **Cake gates breeding, Honey gates Cake, and Honey has no vendor** -
  so work-speed passives on a Beegarde directly accelerate the breeding pipeline that produces your
  work-speed passives. Same for Sibelyx Primo (HQ Cloth), Dumud (HQ Pal Oil -> Polymer) and
  Flambelle (Flame Organ -> Carbon Fiber).
- Removed the earlier "do not burn a Demon's Hand on a Beegarde" advice, which was based on the
  uncertainty rather than on priority.
- `base-production.html` now carries the same note beside the ranch table.

---

## 2026-09-04 - Passives page added; furnace ceiling corrected

Three player corrections from live 1.0.3 play.

### Added - `passives.html`
A new page, linked in the nav on every page. **The headline finding: there are no per-job passives.**
Nothing boosts Handiwork or Kindling specifically - work-speed passives apply to all twelve jobs
equally, so the job is decided by *work suitability level* and the passives are one universal
template. That collapses the breeding problem from twelve templates to four.

- **Work stack, up to +245%:** Demon's Hand (+90%), Remarkable Craftsmanship (+75%), Artisan (+50%),
  Work Slave (+30%). Swap Work Slave for **Insomnia** on non-nocturnal Pals for +215% and
  round-the-clock production. **Musclehead is -50% Work Speed** and must never land on a base Pal.
- **Combat, mount and water stacks** with exact percentages.
- **All 7 World Tree passives** with their downsides - most are trades, not upgrades.
  **Hermit Sage is -20% Work Speed**, so it is an endurance choice, not a throughput one.
- **Rainbow passives** (mutated eggs), including **Ranch Master** - the closest thing to a
  job-specific passive in the game.
- **How to get them:** Artisan and six others are **implants at 15 Bounty Tokens**; seven more at
  50 Battle Tickets. Do not breed for what you can buy - breed for Demon's Hand and Remarkable
  Craftsmanship, which you cannot.
- **Dimensional Leap and Hermit Sage both grant permanent Paloxite protection**, and Dimensional Leap
  is also the best mount passive - so one Pal is both your fastest traversal and your Paloxite key.

### Corrected
- **Ancient Furnaces have no practical build limit.** The previous "is there a build limit?"
  watch-out is closed. The real ceiling is that **each furnace consumes 2 of a base's worker slots**,
  and a base holds **15 workers on default settings** - so **7 furnaces** if you dedicate a base to
  smelting. The cap climbs +1 per base level to 30 if you raise the world setting (vanilla allows
  50), and base slots unlock through Base Missions. Scale by adding bases.
- **The "work" figures are demystified, not unresolved.** 50,000 / 700,000 / 1,000,000 represent how
  long a Pal takes to produce the item. They are useful as *relative* costs and largely moot in
  absolute terms once you run best-in-slot Pals with bred work-speed passives. Removed from the open
  questions list.

### New open question
**Whether Work Speed raises ranch *output*** as opposed to just the animation rate. Condensation rank
raising drop quantity is confirmed; the work-speed question is only tested in early-access-era data.
Flagged on the passives page rather than guessed at.

---

## 2026-09-04 — Stacking rule resolved

Player report from live 1.0.3 play settled the conflict logged earlier the same day.

**The rule: "does not stack" applies to the same *species*. Different species carrying the same
effect *do* stack — and a regional variant counts as a different species.**

So two Menasting give nothing extra, but **Menasting + Menasting Terra stack** to ~160% at max
partner skill level, as do Penking + Faleris Aqua.

This reconciles both published sources rather than overruling either: Game8's "different Pals stack"
and KeenGamer's "multiple copies provide no extra benefit" were describing the same rule from
opposite ends. **The apparent contradiction was a vocabulary problem, not a factual one.**

### Changed
- Stacking restored as a positive, stated rule; the withdrawn claim is reinstated with the precise
  species-vs-duplicate qualifier that was missing the first time.
- Element table column renamed back to **"Stack"**, now explicitly counting *different species*
  carrying the effect: Fire, Neutral, Electric and Dark can be doubled; Grass, Water, Ice, Ground,
  Dragon and Pal Soul have one species each and cannot.
- **Template A slot 2** is a firm recommendation again — a *different species* of the same element.
- **Template E**, Dusty Ravine leg: run **Menasting + Menasting Terra together** to stack the Electric
  boost while one booster already covers both target species (Orserk and Snock Lux).
- Noted that Menasting Terra's Golden Scorpion also grants **+5–10% player Defence** alongside the
  Electric drop boost.

### Verified
"Menasting Noct" does not appear as a drop-boost variant in 1.0 — **Menasting Terra** is the one
carrying Golden Scorpion, so the tables keep Terra.

---

## 2026-09-04 — Holy Water kill-farm, Paloxite detail, and a stacking claim walked back

Prompted by a bookmarked Reddit post (`1v1v74v`, "World Tree Holy Water Farm 500+ Holy
Water/15mins"). Reddit is unreachable from the research environment, so its substance was
corroborated through a guide covering the same farm.

### Added
- **Template E — the Alluvion Lakefront Holy Water kill-loop** (`-1638, 1340`). Reported 500+ in
  10–15 min. Four-stop route around the Ru Nest, Teafant Spring pickup each lap, and the
  **per-species booster pairings**: Katress/Blazehowl Noct for Starryon Primo, Fenglope Lux for
  Shaolong, Menasting for Orserk and Snock Lux. **This is the one route where a drop-boosting
  party is the entire point** — everything else at endgame is node mining, where boosters do nothing.
- **Holy Water is a kill drop, not just a fishing drop.** World Tree Pals Lv70+ drop 1–3 at 50%.
- **Paloxite cluster detail** — node counts per cluster; Gilded City Ruins is **6 nodes**, not 3.

### Corrected
- **Paloxite despawn is triggered by your *Pal's* proximity too**, not just yours — a Pal running
  ahead can wipe a node before you reach it. Buff window restated as **30–60 seconds**.
- **A World Tree passive (Dimensional Leap or Hermit Sage) gives permanent Paloxite protection**,
  replacing the 30-second scramble entirely. **This supersedes the "Rainbow passive" note** added
  on 3 Sep, which the better source explicitly does not support.
- **Drop-booster stacking is now marked unresolved, not asserted.** Game8 says different Pals with
  the same effect stack (Penking + Faleris Aqua = 160%); KeenGamer says they do not stack at all.
  Both are 1.0 sources. The previous version called stacking "the single biggest yield lever in the
  game" — that claim is withdrawn pending a controlled test, and the Template A second-booster slot
  is now conditional. The element table's "Stackable?" column is renamed "Options" and counts Pals
  carrying the effect rather than implying a multiplier.
- **Plasma Multicutter doubles yield per node**, not just "required".

### Closed a gap
- **Lunaris** carries a weight-boosting partner skill — the open "which Pals boost carry weight"
  watch-out from the last session.

### New conflicts logged
Teafant Spring yield (5–10 per use vs 30 on a 10-min cooldown); Katress/Blazehowl Noct element
label (Neutral per Game8, Fire per the Holy Water guide — trust the pairing, not the label).

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
