# Changelog

Notable changes to the guide. Newest at the top.

---

## 2026-09-04 - Rarity scaling and sustained DPS

Parsed The Pal Professor's weapon table (v1.0.3, 27 Aug 2026) - 240 rows across five rarities.
That source writes decimals with commas, so `1,667` is 1.667 seconds; the raw parse is saved to
`research/weapon-stats-thepalprofessor.tsv`.

### Added
- **Rarity scales the weapon, not just the recipe.** Common -> Legendary: Attack **x1.2-1.67**,
  DPS **x1.3-1.67**, and durability **x2-4**. Because Attack moves so little, the Common-rarity
  figures elsewhere in this guide are a floor, and **rarity cannot explain the Mechanical Bow's
  10x lead** over the Plasma Rifle.
- **Terraprisma full rarity ladder.** Its Common row (90 Attack, 5,000 durability) matches the
  in-game panel exactly, which calibrates the whole table. **Legendary: 10,368 durability and
  6,750 DPS** - 4th-highest sustained DPS in the table, with 13x the durability of the Charge
  Rifle above it. For a weapon whose only cost is wear, that is the highest-value schematic
  upgrade available.
- **Calibration table** of known sustained DPS. Power/S includes reload, verified against the
  Charge Rifle: 10 shots x 15,000 over (10 x 1.4 + 1.933)s = 9,414.
- **Bow cadence confirmed.** The Advanced Bow fires every **1.667s**, which is the archetype
  reason bows feel slow. If the Mechanical Bow shares that cadence, its 20,000 Attack implies
  roughly **12,000 DPS** before headshots - flagged clearly as archetype inference, not measurement.

### Limit of the source
**None of the 1.0 endgame weapons are in it** - no Mechanical Bow, Plasma Rifle, Beam Launcher,
Beam Scatter, Drone Launcher, Heavy Assault Rifle, Combat SMG, Prototype Shotgun or Tactical
Grenade Launcher. Terraprisma is the only weapon this guide discusses that it covers. Shot interval
and DPS for the Tech 67-80 tier remain unmeasured.

---

## 2026-09-04 - Energy weapon Attack values; two corrections

Six in-game panels: the three energy ammo recipes and the Beam Scatter, Beam Launcher and Drone
Launcher weapons. Plus player handling notes from live play.

### Correction 1 - the Beam Launcher is the efficient energy weapon, not the Plasma Rifle
This guide said the Plasma Rifle was "4x more ammo-efficient than the Beam Launcher". **True per
round, wrong per point of damage.** The Beam Launcher does **14,000** Attack against the Plasma
Rifle's 1,860 - 7.5x the damage for 4x the Paloxite.

Per Paloxite: **Beam Launcher 11,667 damage, Plasma Rifle 6,200**. The Beam Launcher is ~1.9x more
Paloxite-efficient. A 200-Paloxite run buys 2.33M total Attack as Beam Launcher rounds against
1.24M as Plasma Rifle rounds. The earlier claim compared cost without comparing damage.

### Correction 2 - the schematic-rarity theory is withdrawn
Three tech panels match published recipes **exactly** (Beam Scatter 50/50/5/5, Beam Launcher
100/50/10/10, Drone Launcher 70/40/8/5). If cost scaled with rarity these would have varied too. The
Plasma Rifle's 68/42/6/5 against a published 80/50/8/7 is now **unexplained** rather than attributed
to a rarity ladder.

### Added - how to read an Attack figure
**Attack is per projectile, not per trigger pull.** Beam Scatter (508, multi-pellet), Drone Launcher
(200, nine drones) and Terraprisma (90, nine swords) all list per-unit damage. Only single-projectile
weapons are directly comparable, so the efficiency table is now split into two.

### Added - handling notes from live play
- **Mechanical Bow is slow but precise and excellent for headshots.** It is a precision weapon, not a
  DPS weapon - best against single high-value targets, weak against crowds.
- **Terraprisma is limited by durability, not damage.** The nine swords hit with enough speed and
  range to be genuinely useful; with no ammo cost it is a wear item rather than a supply item.

### Confirmed
All three energy ammo recipes match the published figures exactly, which vindicates the ammo table.

---

## 2026-09-04 - Attack values land, and they reverse the ammo conclusion

Three in-game screenshots at **Common** rarity supply the missing damage figures, turning the ammo
cost table into a genuine efficiency table.

| Weapon | Attack | Paloxite/round | Soralite/round | Attack per Soralite | Durability |
|---|---|---|---|---|---|
| Mechanical Bow | **20,000** | 0 | 0.4 | **50,000** | 2,000 |
| Heavy Assault Rifle | 1,615 | 0 | 0.2 | 8,075 | 5,500 |
| Plasma Rifle | 1,860 | 0.30 | 0.35 | 5,314 | - |
| Terraprisma | 90 + 9 summons | 0 | **0** | no ammo | 5,000 |

### What changed
- **The Mechanical Bow is the standout weapon in the guide.** 20,000 Attack is over **ten times** the
  Plasma Rifle and Heavy Assault Rifle, at 0.4 Soralite per round and **zero Paloxite**. Cheapest
  ammo and highest per-shot damage simultaneously, unlocking earliest at Tech 67.
- **The Plasma Rifle's damage advantage is negligible** - 1,860 against the Heavy Assault Rifle's
  1,615 is a 15% edge, for the privilege of being the only one that costs Paloxite and Holy Water.
  On materials the Paloxite energy weapons now look like a poor trade.
- **Terraprisma added** (Tides of Terraria). 90 Attack but summons up to nine blessed swords, and as
  a melee weapon it consumes **no ammunition at all** - a category of its own for sustained farming.
- Practical loadout rewritten around all three.

### Caveats kept prominent
Attack is **per-shot damage, not DPS**. No confirmed fire rate, projectile count or reload data, and
the Bow's 2,000 durability against the rifle's 5,500 hints at a balancing cost. The Plasma Rifle's
chaining damage may not be captured by a single-target figure. The *material* conclusion holds
regardless - roughly 10x the damage per round at zero Paloxite survives even a several-fold fire-rate
difference - but a 10x outlier is flagged for sanity-checking against real kill speed.

---

## 2026-09-04 - Weapon costs scale with rarity; Katress confirmed Neutral

Three more in-game screenshots. Both remaining source conflicts resolved, and one of them was not a
conflict at all.

### The Plasma Rifle "conflict" was a missing variable
The guide had been weighing two published recipes (80/50/8/7 and 100/62/10/8) and had picked one.
The screenshot of the **Common** Plasma Rifle shows a third set: `68 Paloxite Ingot + 42 Bio Battery
+ 6 AI Core + 5 Ancient Civilization Core`, Attack **1,860**.

All three are real. **Weapon material cost scales with the rarity of the schematic** (Common ->
Uncommon -> Rare -> Epic -> Legendary), so 68 -> 80 -> 100 Paloxite Ingot is one ladder, not a
contradiction.

**Consequence for the whole weapons table:** every other row is a snapshot of an *unknown* rung.
They are comparable to each other but are not the cost of the schematic in your inventory. The table
now carries that caveat, and only the Plasma Rifle row is pinned to a known rarity.

### Katress confirmed - and a trap named
In-game tooltip: **Mystical Black Magic** - *"While in party, Neutral Pals drop 40% more items when
defeated"*, plus a **10% chance to prevent Pal Sphere consumption** when thrown.

So Game8 was right and the Holy Water guide's "Fire" label was wrong, which means **Starryon Primo
is a Neutral Pal**. The pairing was always the trustworthy part.

**The trap, now stated explicitly on the farming page:** a Pal's own element is *not* the element it
boosts. Katress is **Dark** and boosts Neutral; Blazehowl Noct is **Fire/Dark** and also boosts
Neutral. That mis-inference is the likely origin of the bad label. Never read the boosted element off
the Pal's typing.

Also: Katress and Blazehowl Noct are different species, so on the Alluvion Holy Water route you can
**run both and stack** rather than choosing.

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
