# Session Log

Running handoff notes for resuming work. Newest session at the top.

---

## ▶ PICK UP NEXT SESSION

**Nothing is blocked.** The route map question that was flagged here is resolved — the player supplied
a Paloxite-filtered map screenshot, 76 nodes were detected from it, and `world-tree-team.html#route`
now carries a real 61-node circuit. Derivation is archived in `research/paloxite-route/`.

**Open, in rough order of value:**

1. **Shot interval / reload / pellet count for the Tech 67–80 weapons.** The last real weapon gap.
   Attack, magazine, durability, ammo cost and per-rarity recipes are all confirmed; cadence is not,
   so damage *per second* stays uncomputable while damage *per material* is solid. No source
   publishes it — likely needs in-game measurement.
2. **The weapon repair cost formula** — materials or gold, and how much.
3. **The ~15% crafting cost reduction on this save.** Their Plasma Rifle panel reads `68/42/6/5`
   against a standard Common `80/50/8/7`. Something is discounting crafting and it applies to
   everything they build; worth identifying.
4. **Three Rainbow passive effects** still unpublished: Babysitter, Lavish Hospitality,
   Heavily Armored.
5. **Base Eidrolon's typing** — Eidrolon Ignis is Dragon/Fire and confirmed, but the base form was
   not checked, and mounted attacks take the mount's element.

**Do not re-attempt scraping palworld.th.gl** — investigated 5 Sep, dead end. Details in the entry
below.

**Working method that has paid off repeatedly:** the player is a far more reliable source than any
written guide. Six or seven corrections this project, every one of them theirs, several overturning
conclusions built on published sources. **Ask them before treating a mechanic as unresolved, and
prefer their firsthand account over a guide site.**

---

## 2026-09-05 (cont.) — The Paloxite immunity belongs to the whole World Tree tier

Two corrections, both from the player.

**(1) Any World Tree passive grants the Paloxite immunity**, not just Dimensional Leap and Hermit
Sage as this guide had it. World Tree resources stop despawning on approach for a Pal carrying any
skill in that tier, and no description mentions it. So it is not a build constraint at all — pick the
passive that suits the Pal's job and take the immunity free.

**The error shape is worth carrying:** I had two examples that granted the protection and inferred
that those two were special, rather than asking what they had in common. That is the second
generalise-from-a-sample mistake in two days — the Paloxite node count was the first.

**(2) The mount is Eidrolon or Eidrolon Ignis**, so Dimensional Leap is the wrong pick anyway.
Rebuilt the mount advice around what a mount actually needs when the *player* deals the damage:

- **World Tree Seedbed** (hunger −50% slower) is usually right for a 61-node lap. Notably
  **Dimensional Leap makes hunger *worse***, which works directly against a long circuit — probably
  why it felt wrong to them.
- The Attack-swing passives (Twin-Edged Holy Blade, God of Destruction, Sanctified Meat Shield) are
  wasted on a mount that is not the one attacking.

**Eidrolon Ignis specifics, now on the page:** Dragon/Fire, **2,750 riding sprint** rivalling
Jetragon — which on a 61-node circuit is the real justification, since traversal dominates. Mounted
attacks take its element, so **Dragon is advantaged into Orserk** (Dragon/Electric) and neutral into
Snock Lux, trading damage on half the targets for speed across the lap. Its partner skill
*Resentful Pterosaur* scales with other Dragon/Fire party members, of which a drop-booster comp has
none, so it contributes ~nothing here.

**Also confirmed this session:** the node map is **filtered to Paloxite specifically**, so the 76
count and everything downstream of it stands unqualified.

---

## 2026-09-05 - The node map invalidated a bottleneck claim

User: *"there are far more nodes than the reddit posts mention, i've been to many of them."*

That confirms the 76-node detection is real rather than a screenshot artefact, and it kills a claim I
had built a whole page around: **"Paloxite is your real bottleneck, and no Pal can help with it."**

The reasoning had been sound given the inputs - Holy Water has many sources, Paloxite has one, so
Paloxite binds. The inputs were wrong. Guides name three clusters (~12 nodes); reality is ~76. With
61 on a single circuit, Paloxite is plentiful and the constraint reverts to **Ancient Furnace
throughput capped by base worker slots**, which is what the rest of the guide already said.

### Second time, same mistake

The Sunreach Soralite route went the same way: published as one 5-node cluster at `-300,-1400`,
actually a five-stop loop of 30-40 nodes yielding 1,200-1,600 ore. Both times a written guide named a
few convenient spots near fast-travel points and I read the list as an inventory.

**Rule to carry: a guide's named locations are a sample, not a census.** Where a claim depends on
scarcity, check the count before building on it - and prefer the player's firsthand experience over
any written source, which has now been right five or six times running.

### Still open
- ~~Whether the map is Paloxite-specific~~ — **confirmed 5 Sep: it is.**
- Shot interval / reload for Tech 67-80 weapons; the repair cost formula.
- A few Rainbow passive effects; the ~15% crafting cost reduction on this save.

**Status: shipped.**

---

## 2026-09-04 (cont.) - Three corrections that unified a lot of loose ends

User gave three facts: (1) everything stacks unless stated, and "does not stack" means same-species
only; (2) the Drone Launcher is the Terraprisma's upgrade; (3) weapons at zero durability are
repaired, not replaced.

### Each one propagated further than it looked

**(1)** I had this rule but only for drop boosters. Generalised it to every passive and partner skill,
which retroactively justifies layering Solenne + Robinquill + five Vanguards.

**(2)** Chasing the upgrade relationship turned up that **the Drone Launcher uses no ammunition at
all** - it and the Nightglow are the only ranged weapons that need none. My ammo table had said "not
published". For a player farming Paloxite who refuses to spend Paloxite on ammo, that is a
significant option I had left blank.

**(3)** Searching the repair mechanic surfaced two things I did not go looking for:
- **Durability is 1 per attack regardless of damage.** That single fact explains everything the user
  had observed: the Bow gets 20,000 damage per point and never runs dry; the Terraprisma at a 0.028s
  interval across nine swords burns its bar fast. Their "Terraprisma is limited by durability" was the
  visible symptom of this mechanic.
- **Tetroise Primo** - partner skill reduces durability loss on all weapons and armour by
  **80/84/88/92/100%**. At ☆4 that is total wear immunity, and it covers the Plasma Multicutter while
  mining. This straightforwardly *solves* the constraint the user named two exchanges ago.

### What I changed in the build

Restructured the World Tree party into two fixed slots plus three that are a genuine trade, with the
weapon choosing the trade. Added the honest caveat that **Solenne only pays if kills are
damage-limited** - with a 20,000 Bow and headshots against Lv70-80 targets they may already be
one-shotting, in which case that slot should be Menasting Terra. Total yield is drops-per-kill times
kills-per-hour; which term you optimise depends on which one you are short of.

### Pattern worth noting

That is now five corrections in a row where the user supplied a mechanic and the *consequences* were
bigger than the fact. The durability one especially: a single sentence about repair costs led to a
mechanic (1/attack) that reframed the whole weapon comparison and to a Pal that removes the
constraint entirely. **When given a mechanic, search its implications rather than just patching the
sentence.**

### Still open
- ~~Whether the map is Paloxite-specific~~ — **confirmed 5 Sep: it is.**
- Shot interval / reload for Tech 67-80 weapons - the last real weapon gap.
- Repair *cost* formula (materials or gold, and how much).
- A few Rainbow passive effects; the Paloxite Reddit links; the ~15% crafting cost reduction on this
  save.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Mounted play exposed a system I had never looked at

User: "assume I'm doing the damage while mounted, so the 5th pal having passives to boost my damage
is useful."

That one sentence invalidated a claim I had shipped an hour earlier and opened a mechanic the guide
had no coverage of at all.

### The correction

I had written, confidently, that drop boosters "never deploy, so their passives are irrelevant". It
reads as sound reasoning - a Pal on the bench does not fight, so its combat passives do nothing. But
there is a whole class of passives that buffs the **player** from the bench:

- **Vanguard: +10% player Attack, stacking additively across the party.** Five of them is +50%.
- And **Vanguard is a Bounty Officer implant at 15 tokens** - 75 tokens buys the whole party's worth
  with no breeding at all.

So the "their passives don't matter" advice was actively costing the user the cheapest damage
upgrade in the build.

**Lesson:** I reasoned from a model of how passives work rather than checking the passive list. The
model was reasonable and wrong. This is the fourth correction this session that came from asserting a
general rule instead of checking the specific case - and notably, the original research brief for
this project *had* a bookmarked video called "Player Booster Pals Tested" that I never opened,
because the agent assigned to it died on the rate limit and I never went back for it.

### The system

Player-buffing partner skills, per star: **Solenne +30/40/50/60/80% player Attack** (conditional on
all party species being unique - trivially met), **Robinquill +10-35% bow damage**, Gobfin/Gobfin
Ignis +20% each and stackable, Xenogard energy weapons, Croajiro +50% airborne, Dupin below 50% HP.

Also: **mounted partner skills change the player's attack type to the mount's element** and add
+5-20% Attack. Both targets here are Electric, so a **Ground-element mount** stacks a type advantage
onto the slot that was already carrying Dimensional Leap for Paloxite immunity. Nice convergence.

### Revised priority

Condense **Solenne before the Menastings**: same 48-Pal cost, but player Attack applies to every
fight in the game whereas the Electric drop bonus only applies to this one route.

### Still open
- ~~Whether the map is Paloxite-specific~~ — **confirmed 5 Sep: it is.**
- Shot interval / reload for Tech 67-80 weapons.
- Whether Vanguard's additive stacking is right - single source, though the effect itself is well
  documented. Worth testing since the build leans on it.
- A few Rainbow passive effects; the Paloxite Reddit links; the ~15% crafting cost reduction on this
  save.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - World Tree team page

Ask: breed a team to maximise drops while farming the World Tree for Holy Water and Paloxite. Weight
is irrelevant - everything set to weightless.

### Two mechanics confirmed before writing
- **Partner skill level = condensation + 1.** Lv1 at ☆0 through Lv5 at ☆4, and the drop bonus scales
  with it exactly (40/50/60/70/80%). This is what makes condensation the whole project.
- **Dandilord's partner skill is Mist Stalwart** - Poison immunity for player and party, **nullifies
  the World Tree toxic gas**, and adds Poison 2 to attacks. Does not stack. Better than the vague
  "toxic gas immunity" the guide previously carried.

### The route insight

Dusty Ravine wins because of **element coverage per slot**, which is not obvious until you line the
droppers up: Orserk and Snock Lux are *both Electric*, so one Menasting pair covers both, whereas
Alluvion needs Neutral (Starryon Primo) plus Water (Shaolong) - three slots for two species. And
Dusty Ravine has a Paloxite cluster on the fast-travel point. One loop, both resources, two booster
slots.

### The finding worth remembering

**Boosters never deploy, so their passives do nothing.** The user asked for a breeding plan; the
honest answer is that only two of the five Pals need bred passives at all. The rest is catching
volume for the condenser. That turns a daunting request into a small one.

Also the shortcut: **two boosters at ☆0 = +80% = one booster at ☆4.** Catching both Menastings
matches a 48-Pal grind instantly, so the advice is "go now, condense later" rather than "grind first".

### Where I pushed back rather than just building what was asked

The team optimises **Holy Water**, but a Paloxite Ingot needs **2 Paloxite : 1 Holy Water**, and Holy
Water has many sources (fishing, passive Large Fishing Pond, alphas, expeditions) while Paloxite has
exactly one. **Paloxite is the binding constraint and no Pal affects mining.** Said so at the top of
the page: build the team, but spend route time on nodes.

Also flagged: do not farm Paloxite carrying a Beam Launcher, whose ammo costs 1.2 Paloxite a round.
The Tactical Grenade Launcher does 6,722 Attack on zero-Paloxite ammo.

### Still open
- ~~Whether the map is Paloxite-specific~~ — **confirmed 5 Sep: it is.**
- Shot interval / reload for Tech 67-80 weapons (damage per second still uncomputable).
- A few Rainbow passive effects; the Paloxite Reddit links.
- The ~15% crafting cost reduction on this save.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - The database that closed most of the weapon questions

User sent a Steam guide: "All 82 Weapons Database in Palworld (1.0 UPDATED)". Steam BBCode tables
are `div.bb_table_tr` / `bb_table_th` / `bb_table_td` - curl the page and regex those; the WebFetch
summariser again under-reported what was present. **Second time in one session that fetching raw and
parsing locally beat the summariser on a large table.** Make that the default for tables.

### What it settled

Everything except cadence. Per-rarity Attack, magazine, weight, durability, materials, schematic and
crafting station for all ten Tech 67-80 weapons - and **every Common row matches the in-game panels
the user screenshotted earlier**, which is about as good a cross-check as this project has had.

### Correction: I withdrew a correct theory on a bad test

I had explained the Plasma Rifle cost discrepancy as rarity scaling cost, then **withdrew** it when
three tech panels matched published figures exactly. That withdrawal was wrong. Tech panels show the
**Common** recipe, and the published figures were **also** Common - they agreed for a reason that had
nothing to do with whether higher rarities cost more. The database shows costs climbing steadily
(Beam Launcher 100 -> 200 Paloxite Ingot) and higher tiers requiring Ancient Civilization Parts that
Common does not.

**Lesson:** I tested the hypothesis against data that could not discriminate it, then treated the
null result as disconfirmation. Check that a test can actually distinguish the cases before letting
it overturn a claim.

The residual - the panel reading ~15% below standard Common - is a **crafting cost reduction on this
save**, not a data error. Worth identifying, since it applies to everything.

### The find

**Tactical Grenade Launcher, 6,722 Attack, zero-Paloxite ammo.** 4.2x a Heavy Assault Rifle round in
the same material class. It was in the ammo table all along and I never looked at its damage, because
until this database there were no Attack values for it. Durability 800 is the catch.

### The other structural insight

**Rarity buys durability, not damage.** Attack 1.2-1.67x Common to Legendary; durability a flat ~4x
(Plasma Rifle 25,000 -> 100,000). Schematic upgrades are an uptime purchase. That reframes the
Terraprisma advice from the previous exchange correctly - and explains why the Plasma Rifle exists at
all, since its case is 100,000 durability rather than its unremarkable 1,860 damage.

### Still open
- **Shot interval / reload / pellet count for Tech 67-80.** Unpublished anywhere reachable. Damage
  per material is solid; damage per second is not computable. The only real weapon gap left.
- A few **Rainbow passive** effects; the **Paloxite Reddit links**.
- Identifying the ~15% crafting cost reduction on this save.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Weapon spec table; partial answer to the DPS gap

User pointed at https://thepalprofessor.com/weapons/ and warned that **commas are decimal
separators**. WebFetch's summarizer truncated the table and wrongly reported the endgame weapons as
absent-but-for-different-reasons; **curl + a regex parse of the raw HTML** got all 240 rows cleanly.
Worth remembering: for a large table, fetch raw and parse locally rather than trusting the
summarizer. Parse saved to `research/weapon-stats-thepalprofessor.tsv`.

### What it gave

- **Rarity scaling, confirmed across five tiers.** Attack x1.2-1.67, DPS x1.3-1.67, durability
  **x2-4** from Common to Legendary. This is a genuinely useful rule and it also **retires a worry**:
  since Attack barely moves with rarity, my Common-read figures are a floor and the Bow's 10x lead
  over the Plasma Rifle cannot be a rarity artefact.
- **Terraprisma, fully.** Common row matches the in-game screenshot exactly (90 Attack, 5,000
  durability), which calibrates the source. Legendary is 10,368 durability / 6,750 DPS - 4th-best
  sustained DPS in the whole table with 13x the durability of the Charge Rifle above it.
  **This directly answers the user's "Terraprisma is limited by durability"**: the fix is a
  Legendary schematic, which roughly doubles durability and lifts DPS 67%.
- **Bow cadence: 1.667s.** Confirms "slow" as an archetype property. Lets me offer a bounded
  inference for the Mechanical Bow (~12,000 DPS at 20,000 Attack on that cadence), clearly labelled
  as inference.
- **Power/S is sustained DPS including reload** - verified arithmetically against the Charge Rifle
  row, so the column can be trusted.

### The gap it does NOT close

**No 1.0 endgame weapon is in the table.** Terraprisma is the only weapon this guide discusses that
appears. So shot interval and DPS for Tech 67-80 are still unmeasured - Attack and ammo cost are
confirmed, rate of fire is not. Said so plainly on the page rather than stretching the source.

### Note on a small internal inconsistency
Terraprisma's listed DPS (4,050 at Common) does not equal Attack / ShotInterval (90 / 0.028 =
3,214), whereas the Advanced Bow and Charge Rifle rows reconcile exactly. Either the interval is
rounded in display or something else is folded in. Cited their DPS as published and did not
recompute it.

### Still open
- **Shot interval / DPS for the Tech 67-80 weapons** - the main remaining gap.
- **Terraprisma recipe**; **Drone Launcher ammo cost**.
- Whether rarity scales crafting **cost** as well as stats (the unexplained Plasma Rifle 68/42/6/5).
- A few **Rainbow passive** effects; the **Paloxite Reddit links**.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Two of my own claims overturned in one exchange

Six screenshots plus two mid-turn gameplay notes. Both corrections were mine to make.

### 1. I compared cost without comparing damage

I shipped "the Plasma Rifle is 4x more ammo-efficient than the Beam Launcher" and repeated it in the
README. It is true **per round** and false **per point of damage**: Beam Launcher 14,000 Attack vs
Plasma Rifle 1,860, so 7.5x damage for 4x the Paloxite - **1.9x more efficient, not 4x less**.

The error is embarrassing precisely because the whole point of the ammo section was cost-efficiency.
I built a cost table, called it an efficiency table, and drew an efficiency conclusion from it before
I had the damage column. **A cost ranking is not an efficiency ranking until the output side is in.**

### 2. The rarity theory was over-fitted to one data point

I explained the Plasma Rifle's 68/42/6/5 (vs a published 80/50/8/7) as weapon cost scaling with
schematic rarity, and rewrote the weapons table caveat around it. Three new tech panels match their
published recipes **exactly** - so if rarity scaled cost, they would have varied too. The theory is
withdrawn and the discrepancy is logged as unexplained.

One data point, one confident mechanism. Should have been "unexplained" from the start.

### The interpretive rule that rescues three weapons

**Attack is per projectile, not per trigger pull.** Beam Scatter 508 is per pellet in a scattering
blast; Drone Launcher 200 is per drone with nine deployed; Terraprisma 90 is per sword with nine
summoned. Their headline numbers look terrible and are not comparable to single-projectile weapons.
The efficiency table is now split in two so nobody dismisses them on the raw figure.

### Player handling notes - these closed my open caveats

- **Bow: slow but precise, excellent for headshots.** That is exactly the missing half of the 20,000
  figure I had flagged as needing a sanity check. It is a precision weapon; the efficiency is real
  but converts best on single high-value targets.
- **Terraprisma: limited by durability, damage surprisingly useful due to speed and range.** So the
  nine swords do land, and the constraint is the 5,000 durability rather than damage or supply. A
  wear item, not a supply item.

### Still open
- **Fire rates, reload times, pellet counts, headshot multipliers** - the remaining gap between a
  damage-per-material table and a damage-per-second one.
- **Terraprisma recipe**; **Drone Launcher ammo cost**.
- The unexplained **Plasma Rifle cost discrepancy**.
- A few **Rainbow passive** effects; the **Paloxite Reddit links**.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Attack values arrive; the recommendation flips

Asked for Attack figures for the Tech 70-80 weapons at the end of the last exchange; got three
screenshots. This is the payoff of the whole ammo-economics thread.

**Mechanical Bow: Attack 20,000.** Heavy Assault Rifle: 1,615. Plasma Rifle (from earlier): 1,860.
Terraprisma: 90 plus nine summoned swords, melee, no ammo.

So the Bow is a **10x outlier** on per-shot damage while also being among the cheapest ammo in the
game (0.4 Soralite, no Paloxite, no gunpowder). It is simultaneously the cheapest and the hardest
hitting, and it unlocks earliest. That inverts the loadout advice I shipped an hour ago, which had
the Heavy Assault Rifle as the sweeper and the Plasma Rifle as the efficient energy option.

The other half of the finding: **the Plasma Rifle's 1,860 barely beats the Heavy Assault Rifle's
1,615.** A 15% damage edge, and it is the only one of the two that costs Paloxite and Holy Water.
The Paloxite energy tier looks materially bad once damage is in the table.

### Where I deliberately did not over-claim

Attack is per-shot, not DPS. I have no fire rate, projectile count or reload data, and a bow firing
once every couple of seconds against a rifle emptying twenty rounds is not comparable on Attack
alone. Two signals suggest the Bow is balanced elsewhere: **durability 2,000 vs the rifle's 5,500**,
and a lower ammo yield per craft (10 vs 20). The Plasma Rifle's description also mentions chaining
to multiple enemies, which a single-target figure misses.

So the page states the material conclusion firmly (it survives a several-fold fire-rate gap) while
telling the reader to sanity-check a 10x outlier against real kill speed. That felt like the right
line: the arithmetic is solid, the gameplay implication is not fully determined by it.

### Terraprisma

Worth having in the guide as the zero-recurring-cost option. Tides of Terraria melee, 90 Attack but
nine summoned swords doing the actual work, 5,000 durability, no ammunition. For anyone
ammo-constrained rather than time-constrained it is in its own category. Recipe not confirmed - worth
a screenshot if it comes up.

### Still open
- **Fire rate / DPS** for the Tech 67-80 weapons - the one thing that would close the Bow question
  properly.
- **Terraprisma recipe.**
- A few **Rainbow passive** effects (Babysitter, Lavish Hospitality, Heavily Armored).
- The **Paloxite Reddit links** - still not on disk.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Both remaining conflicts closed; one was never a conflict

Three more screenshots: the Common Plasma Rifle panel, a Blazehowl Noct name bar, and the Katress
Paldeck entry.

### The lesson worth carrying from this one

The Plasma Rifle had two published recipes that disagreed. I logged it as a **source conflict**,
picked the internally-consistent ladder, and flagged it for verification. The screenshot shows a
**third** set of numbers - and the reason is that **weapon cost scales with schematic rarity**.

There was never a conflict. There was an **unstated variable**, and neither source named its tier.

That is now twice in one day: the drop-booster "contradiction" was a vocabulary problem (same species
vs different species), and this was a missing dimension. **When two careful sources disagree on a
number, suspect a hidden variable before suspecting an error.** I have written that into the
correction log on the site as well.

It also means the whole weapons table is softer than it looked - every row is one rung of an unknown
ladder. That caveat is now at the top of the table rather than implied.

### Katress - clean confirmation, plus a trap

Tooltip: Mystical Black Magic, *"While in party, Neutral Pals drop 40% more items when defeated"*,
plus a 10% chance to save a Pal Sphere. Game8's table was right; the Holy Water guide's "Fire" label
was wrong; therefore **Starryon Primo is Neutral**.

The likely cause of the bad label is worth recording: **Blazehowl Noct is a Fire/Dark Pal that boosts
Neutral.** Someone read the boosted element off the Pal's own typing. The guide now says explicitly
not to do that.

Practical upside: Katress and Blazehowl Noct are different species, so the Alluvion Holy Water route
can run both boosters stacked.

### Still open
- A few **Rainbow passive** effects unpublished (Babysitter, Lavish Hospitality, Heavily Armored).
- The **Paloxite Reddit links** - still not on disk; that content remains guide-site sourced.
- **Every weapon row except the Plasma Rifle** is now known to be rarity-ambiguous. If more crafting
  screenshots turn up, pinning even a couple of rows to Common would firm the table considerably.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Screenshots beat every source I had

User supplied four in-game screenshots: the Computer and AI Core crafting panels, and the Farmhand
and Ranch Master passive tooltips. Read them with the Read tool - it renders images directly, so
this is a fast, high-confidence input channel. **Ask for screenshots earlier next time.**

### The correction that stings

I had published, as the headline of `passives.html`: *"There are no per-job passives. Nothing boosts
Handiwork specifically, or Kindling specifically."*

The tooltips show **Farmhand: Farming's Work Suitability +1** and **Ranch Master: +2**. So per-job
passives exist. They are confined to Farming - which, checking back, is also the only job with a
natural cap of **4** rather than 8, so it is the one job that needs them. That detail was already in
my own research notes from the work-suitability pass; I had it and did not connect it.

**The error was reasoning from absence.** Sources described work-speed passives as universal and
never mentioned per-job ones, so I asserted none existed. A search afterwards confirms Farmhand and
Ranch Master are the *only* two - so the shape of the claim was nearly right and the absolute
phrasing was what made it wrong. "None exist" needed to be "none found for the other jobs".

### What the screenshots also settled

- **Computer** = 2 Circuit Board + 3 Plasteel + 2 Bio Battery + 2 Carbon Fiber, workload 2,500. Last
  gap in the AI Core chain, open since the demand-side pass.
- **AI Core** = 5 Computer + 10 Soralite Ingot + 2 Thermal Core + 1 Ancient Civ Core, workload
  50,000 - matches what I had sourced, so that source is vindicated.
- **The datamined workload figures were garbage.** I had published 700,000 for a Soralite Ingot and
  1,000,000 for a Paloxite Ingot. An AI Core eats ten Soralite Ingots and is only 50,000 workload,
  so the ingot cannot be 700,000. Deleted both with an explanatory note. Good reminder that a
  datamine field of unknown units should not have been published as a number at all.

### Incidental observation worth remembering

The screenshots show the user's stock levels: Carbon Fiber 28,034 - Soralite Ingot 43,916 - Plasteel
14,148 - Computer 12,305 - Thermal Core 8,317 - Bio Battery 4,167 - AI Core 2,185 - Circuit Board
1,369 - **Ancient Civilization Core 45**.

Everything is in the thousands except ACC at 45. They already hold 2,185 AI Cores so they are not
blocked, but ACC is plainly the tightest line in their economy. Do not re-litigate the earlier
bottleneck discussion on this basis - they run expeditions continuously and told me cores accrue
fine - but it is a useful sanity check on what "scarce" means for this player.

### Standing pattern, updated

Six corrections now, all from live play. The reliable ones I keep getting wrong are **absolute
claims** ("no per-job passives", "different Pals stack", "the bottleneck is X"). The data underneath
has generally been fine. **Prefer "no source I found mentions X" over "X does not exist".**

### Still open
- **Plasma Rifle** cost conflict (80 vs 100 Paloxite Ingot) - the last real recipe conflict.
- **Katress / Blazehowl Noct element label** (Neutral per Game8, Fire per the Holy Water guide; the
  pairing with Starryon Primo is the trustworthy part).
- A few **Rainbow passive** effects still unpublished (Babysitter, Lavish Hospitality, Heavily Armored).
- The **Paloxite Reddit links** - still not on disk; that content remains guide-site sourced.
- Teafant Spring yield: **dropped at the user's request**, not a route they use.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (cont.) - Ranch work-speed confirmed

**User:** *"work speed does increase output of ranch pals"* - live 1.0.3 play.

Closes the open question flagged a few minutes earlier. I had been unable to resolve it from sources
because all the community testing on ranch drop rates is early-access era (the bookmarked Chickipi
egg-drop testing thread is from Jan 2024) and I could not confirm it transferred to 1.0.

**Consequence:** ranch Pals are just base workers. The breeding programme collapses from four
templates to **three** - worker, combat, mount. Condensation rank and work speed are two independent
multipliers on the same slot, so stack both.

**The compounding loop worth remembering:** breeding is gated by Cake, Cake by Honey, and Honey has
no vendor at any price - it comes off a Beegarde ranch. So work-speed passives on ranch Pals
accelerate the pipeline that produces work-speed passives. The four ranch slots that feed the
endgame are Beegarde (Honey), Sibelyx Primo (HQ Cloth), Dumud (HQ Pal Oil -> Polymer) and Flambelle
(Flame Organ -> Carbon Fiber).

I also pulled the earlier "do not burn a Demon's Hand on a Beegarde before a furnace Pal" line. That
was hedging dressed as prioritisation - once the mechanic is confirmed, the ranch slot competes on
its merits and the Beegarde case is strong.

### Standing pattern

Five corrections now, all from the user's live play, all cases where published 1.0 sources were
absent, stale or ambiguous: the expedition/core framing, the Sunreach route, the stacking rule, the
furnace build limit and work-value meaning, and now ranch work speed. **The user is a more reliable
source on mechanics than any guide site indexed here.** Ask before assuming a mechanic is unresolved.

### Still open
- **Computer** recipe (Tech 50) - 5 needed per AI Core.
- **Plasma Rifle** cost conflict (80 vs 100 Paloxite Ingot).
- **Teafant Spring yield** (5-10 per use vs 30 on a 10-min cooldown).
- **Katress / Blazehowl Noct element label** (Neutral vs Fire; the pairing is the trustworthy part).
- **Rainbow passive percentages** - Ranch Master especially, now that ranch output is known to scale.
- The **Paloxite Reddit links** the user mentioned - still not on disk, content still from a guide site.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (later still) - Passives page; the furnace ceiling was the wrong ceiling

**Three corrections from the user, all from live play:**
1. No practical limit on Ancient Furnaces.
2. The "work" figure is just how long a Pal takes to make the item - moot, because they will always
   run the best Pals with the best breedable passives.
3. The guide had no passives section. It should have one, broken down by what the Pal is for.

### The furnace correction chains

Removing the furnace build limit does **not** remove the ceiling - it moves it. Each furnace takes
**2 Pals**, and a base holds **15 workers on default settings**, so a base fully dedicated to
smelting tops out at **7 furnaces**. That is the real number, and it makes "a dedicated smelting
base" the concrete advice rather than the vague "build more furnaces".

Worth knowing for future sessions: the cap is **+1 per base level up to 30**, but the default world
setting pins it at 15; raising `Base worker limit` unlocks the ladder (vanilla max 50). Base *slots*
unlock through Base Missions, Base Level cap 35.

This is the third time a headline has moved: AI Core -> furnace throughput -> base worker slots.
Each move was correct given the new information, and each came from the user knowing the game. The
pattern is that **I keep locating the bottleneck one layer too shallow** - I find the thing that is
scarce in the recipe and stop, rather than asking what actually gates the player at their stage.

### The passives page

The genuinely useful finding, and the one that answers the user's question most directly: **there are
no per-job passives.** Nothing boosts Handiwork or Kindling specifically. Work-speed passives apply
to all twelve jobs equally, so the job is chosen by *work suitability level* and the passive template
is universal. Four templates cover the whole game: worker, combat, mount, ranch.

That is a better answer than the per-job table the request implied, and it is worth leading with,
because it makes the breeding programme much smaller than people assume.

Also notable: **Musclehead is -50% Work Speed** and is sold as an implant at the Bounty Officer, so
it is easy to apply to the wrong Pal. And **Hermit Sage is -20% Work Speed** despite being a World
Tree legendary - it is a sanity trade, not an upgrade.

### Watch-outs

- **New open question: does Work Speed raise ranch *output*, or only the animation rate?**
  Condensation rank raising drop quantity is confirmed; the work-speed half is only tested in
  early-access data. This matters because a ranch slot is a permanent investment. Flagged on the
  page, not guessed at.
- Several **Rainbow passive percentages are unpublished** (Ranch Master, Babysitter, Lavish
  Hospitality, Heavily Armored). Ranch Master is the interesting one - the only explicitly
  job-specific passive found.
- Still open: the **Computer** recipe; the **Plasma Rifle** cost conflict; **Teafant Spring yield**
  (5-10 vs 30/10min); the **Katress / Blazehowl Noct element label**.
- Still worth asking for the **Paloxite Reddit links** - that content is still from a guide site.

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 (later) — The stacking "conflict" was a vocabulary problem

**User, from live play:** *"bonuses stating they do NOT stack apply to having pals of the same
species. it does not apply to pals of different species eg. menasting and menasting noct"*

That settles the conflict flagged earlier the same day, and it settles it by **reconciling both
sources rather than picking a winner**:

- Game8: "different Pals with the same effect do stack" — correct, meaning different *species*.
- KeenGamer: "do not stack, carrying multiple copies provides no extra benefit" — also correct,
  where "multiple copies" means duplicates of *one* species.

Neither source was wrong. They were describing the same rule from opposite ends, in different words.
I had read them as mutually exclusive and escalated it to an unresolved conflict on the site.

**Lesson worth carrying, and it is a different one from yesterday's:** before flagging two sources as
contradictory, check whether they are using the same vocabulary. "Multiple copies" vs "different
Pals" was doing all the work here. Withdrawing the claim was still the right call given what I had —
but the framing should have been "these may be describing the same rule in different words", not
"these directly contradict each other".

The genuinely useful nuance, which neither published source states plainly: **a regional variant
counts as a different species for stacking.** That is the counterintuitive bit worth keeping —
Menasting + Menasting Terra stack.

### Minor factual check
The user's example said "Menasting Noct". Searched it: **Menasting Terra** is the variant carrying
the Golden Scorpion partner skill (Electric Pals drop 40–80% more, plus +5–10% player Defence); no
Noct variant carries a drop boost. Kept Terra in the tables — the mechanic the user described is the
substance and it is now the guide's stated rule.

### Watch-outs
- Stacking is **no longer** the open question it was flagged as this morning; the top open items are
  back to the **Computer** recipe, the **Plasma Rifle** cost conflict, whether Ancient Furnaces have
  a build limit, and the unverified "1,000,000 work" figure.
- Still worth asking the user for the **Paloxite Reddit links** — current Paloxite content is from a
  guide site, and their bookmarks file on disk still lags the live browser.
- Two live conflicts remain from this morning: **Teafant Spring yield** (5–10 per use vs 30 on a
  10-min cooldown) and the **Katress / Blazehowl Noct element label** (Neutral per Game8, Fire per the
  Holy Water guide — the pairing with Starryon Primo is the trustworthy part).

**Status: shipped.** See commit below; site live and verified.

---

## 2026-09-04 — Bookmarked Reddit post; Reddit is unreachable; a claim had to be withdrawn

**Ask:** pull a specific bookmarked Reddit post about a drop-boosting party for farming Holy Water,
plus bookmarked posts on farming Paloxite, and fold them into the guide.

### Two environment problems worth knowing before you try this again

1. **Reddit is hard-blocked from WebFetch.** `www.reddit.com` and `old.reddit.com` both return
   "unable to fetch". Not a rate limit or a redirect — the domain is unavailable. The last session
   recorded this as an agent-only limitation; it is not, it applies to the main session too.
   **Workaround that worked:** search for the post's subject and find a guide site covering the same
   farm, then attribute honestly. Do not pretend to have read the post.
2. **The Brave `Bookmarks` file on disk lags the live browser.** It was last written **31 Aug**;
   the session ran on **4 Sep**. Anything bookmarked in that window is not on disk. This is almost
   certainly why the Paloxite posts the user referred to could not be found — a full-file grep for
   `paloxite|holy water|world tree|soralite` across **all 4,099** bookmarks returned exactly one hit
   (the Holy Water post). Worth telling the user rather than silently substituting sources.

### The find that mattered

The Holy Water post led to the **Alluvion Lakefront kill-loop** — and to the realisation that the
guide had a structural hole. Every endgame route documented so far is *node mining*, where drop
boosters do nothing. Holy Water is the one endgame material you get by **killing Pals**, so it is
the one place the whole drop-boost party mechanic actually pays off. That is now Template E, with
per-species booster pairings.

Also corrected a real gotcha: **Paloxite nodes despawn from your *Pal's* proximity, not just yours.**
And a Pal with a **World Tree passive (Dimensional Leap / Hermit Sage)** grants permanent protection,
making the 30-second Holy Water scramble optional. That supersedes the "Rainbow passive" line added
last session, which the better source explicitly contradicts.

### Withdrew a headline claim

The guide asserted that different Pals with the same drop-boost effect **stack** (Penking + Faleris
Aqua = 160%), calling it "the single biggest yield lever in the game". The Holy Water guide says
flatly that they **do not stack** and its recommended parties carry exactly one booster per species.
Both are 1.0-era sources. The wording "multiple copies" is ambiguous enough that they might be
describing the same rule, but I cannot resolve it and found no controlled test.

**Claim withdrawn, both positions shown, marked unresolved.** Template A's second-booster slot is now
conditional, and the element table's "Stackable?" column was renamed "Options" so it counts Pals
rather than implying a multiplier.

**Lesson worth carrying:** this is the second time in two sessions a confident headline had to be
walked back. Both times the underlying data was fine and the *strength* of the claim was the problem.
Single-source mechanical claims should be stated as "one source says", not as the guide's own voice.

### Watch-outs for next session

- **Stacking is the single highest-value open question.** A controlled test — fixed route, one
  booster vs two of the same element, count drops — settles it and would firm up or delete several
  party recommendations. Everything else on this page is downstream of it.
- **Ask the user for the Paloxite Reddit links directly**, or re-check bookmarks after Brave flushes.
  The current Paloxite content comes from a guide site, not from their bookmarks.
- Still open from before: the **Computer** recipe; the **Plasma Rifle** cost conflict; whether
  Ancient Furnaces have a build limit; the unverified "1,000,000 work" figure.
- New conflicts: Teafant Spring yield (5–10 vs 30/10min); Katress + Blazehowl Noct element label
  (Neutral vs Fire — the *pairing* with Starryon Primo is the trustworthy part).

**Status: shipped.** See the commit below; site live and verified.

---

## 2026-09-03 — Built the guide; two framings had to be corrected before it was right

**Ask:** a Palworld endgame guide for a Lv80 solo player, in its own GitHub repo and live in a
browser, answering three questions in order — what can I *not* buy from a merchant, what of that can
a base Pal produce, and if I must go out, what party maximises yield. Research to start from the
user's Brave bookmarks.

**Bookmarks:** 163 Palworld links under `Bookmarks bar/Games/Palworld`, read from
`AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Bookmarks`. It is JSON — parse with
Python and set `PYTHONIOENCODING=utf-8` or the dump dies on a non-cp1252 character. Bottom third of
the folder is genuinely 1.0-era (Palpedia, PalSphere, Mobalytics 1.0, the dtgre endgame roadmap);
the top two-thirds is January 2024 early-access material and is actively misleading.

### Four research agents, one survivor

Spawned four (merchants / base production / farming comps / endgame demand). **All four were killed
by an API session rate limit** mid-run. Only the merchant agent had finished writing its file first
— `research/01-merchants-vendors.md`, 311 lines, and easily the strongest evidence in the guide.

Rather than wait for the 3:30pm reset I did the remaining three areas directly in the main session
with WebSearch/WebFetch. That worked fine and was cheaper. **If this happens again, just do it
inline** — the agents bought nothing that direct research did not.

### Why the merchant data is trustworthy and most of the rest is softer

Two datamine sites (`palworld.tools`, `palmods.gg`) independently reference the **same internal shop
table IDs** (`Wander_Shop_1`, `Desert_Shop_1`, `Caravan_Shop_1..25`), so they are reading real game
files rather than each other. Critically, palmods prints an explicit *"Not recorded — No vendor
listing"* string per item, which is what makes every **"cannot be bought"** verdict a positive
finding instead of an argument from silence.

Caveat baked into the site: that snapshot is build 24088745 (July 2026) and patches 1.0.2 and 1.0.3
landed after, so gold figures are ~one patch stale.

### Correction 1 — a source served early-access data under a 2026 date stamp

`sovisgames.com` returned a "1.0 endgame" base-Pal table listing Lifmunk, Digtoise, Tanzee, Foxparks
and Anubis. That is the **January 2024 meta**. 1.0 reworked work suitability from a 1–4 scale to
1–10 and the real answers are World Tree Pals — Solenne, Dandilord, Aegidron, Renjishi, Shaolong.
Caught it by cross-checking Game8's 1.0 tier list, which carries explicit level numbers and a
30 July 2026 date.

**Rule adopted:** where two sources conflict, prefer the one that names 1.0-specific Pals,
structures or patch numbers. A 2026 date stamp alone means nothing.

### Correction 2 — the user was right and it inverted the conclusion

Shipped `90c12b7` claiming the endgame bottleneck was the **AI Core**, reasoning that a Beam Launcher
unpacks to ~20 Ancient Civilization Cores. User: *"consider that expeditions yield cores, and i have
them running constantly."*

Correct, and chasing it down found a second error of mine:
- **Expedition Stations are one per base but stack across bases** — continuous expeditions make cores
  a non-constraint (~3.5/hr/station).
- The Soralite spot I had published (`-300, -1400`, "5 nodes") is **one stop of a five-stop loop**
  yielding **1,200–1,600 ore in 10–12 minutes** on a 30-minute respawn. A Beam Launcher needs 300 —
  a quarter of one run.

So with expeditions running and routes set, **no raw input is the constraint**. The real one is
**Ancient Furnace throughput**: two Pals maximum, workload split evenly between Kindling and Cooling,
so a Renjishi (Kindling 8) alone does nothing for the Cooling half. Pair it with Bastigor (Cooling 8)
and scale by building more furnaces. Fixed in `34fdae8` and logged openly in `sources.html` rather
than quietly edited.

**Lesson worth carrying:** I derived a headline from arithmetic without sanity-checking the inputs
against realistic acquisition rates. The unpacking maths was right; the *significance* I assigned it
was not. For a player with established loops, ask what their throughput actually is before calling
anything a bottleneck.

### Watch-outs for next session

- **The "1,000,000 work" figure for Paloxite Ingot is unverified.** It comes from a palmods datamine
  field whose units I could not confirm. The furnace *constraint* is well-sourced; the per-ingot
  *time* is not. Downgraded to Unresolved. If you can measure it in game, that number would sharpen
  the whole demand page.
- **Whether Ancient Furnaces have a build limit is unconfirmed** — and the current top-line advice
  ("build more furnaces") depends on it.
- **The Computer recipe (Tech 50) is the one hole in the AI Core chain.** You need 5 per AI Core.
- **Plasma Rifle cost is genuinely conflicted** — 80 vs 100 Paloxite Ingot, 50 vs 62 Bio Battery,
  across two sources. The site prefers the internally-consistent ladder and flags the conflict inline.
- **Unresolved smaller items:** Sulfur→Gunpowder rate; whether "Hexolite" is a smelt step from the
  "Hexolite Quartz" you mine; the Plasteel recipe; which Pals carry carry-weight partner skills in
  1.0; the reported *Rainbow passive* as a Holy Water alternative (single passing mention).
- **`old.reddit.com` was blocked** from the research environment, so there is no direct player-thread
  corroboration anywhere in this build. The user's own bookmarked Reddit threads would be the obvious
  next source, read manually.
- **`palworld.fandom.com` returns HTTP 402** and **wiki.gg merchant pages self-report as covering only
  through v0.3.4.0** despite 2026 edit dates. Do not trust either for 1.0.

**Status: shipped.** Three commits (`1eac3b6`, `90c12b7`, `34fdae8`) pushed to
`github.com/NPC6388/palworld-endgame-guide`, public, GitHub Pages serving from `main` at
<https://npc6388.github.io/palworld-endgame-guide/>. All six pages plus assets verified 200; ledger
data confirmed serving 45 materials. No build step — `data/materials.js` is a plain `<script>`, so
the site also works opened from the filesystem.
