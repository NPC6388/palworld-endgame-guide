# Changelog

Notable changes to the guide. Newest at the top.

---

## 2026-09-06 (cont. 8) — Idiosyncratic is dual, and the tier lists have been lying by omission

Player sent the in-game tooltip. It reads **"Pal and Player Auto Health Regeneration Rate +50%
Defense +25% Immune to Poison Damage Immune to Burn Damage"** — with the party icon on the regen row.
Only the **immunities** are carrier-only. The two numbers reach the player.

**So their original loadout was right and my correction was wrong.** I had just told them Idiosyncratic
was "completely inert on a bench Pal" and swapped it for Wellness Watcher. Reverted.

**The root cause is worth more than the fix.** I did not read the effect off a tooltip — I read it off
this guide's own Rainbow table, which renders it "Defence +25%, auto regen +50%, Poison and Burn
immunity". That string came from published tier lists, and **every one of them drops the "Pal and
Player" prefix.** So the site has been carrying a systematically truncated version of the passive data
and I reasoned confidently on top of it.

Logged three ledger rows: the confirmation, a general downgrade on all effect strings not sourced from
a tooltip, and a new **open item — are Immortality and Heavily Armored dual too?** Same shape of
source, same omission. **If Immortality's +15% Attack is dual, it beats Vanguard's +10% on the bench**
and the whole loadout changes again. One screenshot each settles it.

**Idiosyncratic turns out to be the best player-Defence passive in the game: +25% per slot, two and a
half times Stronghold Strategist**, plus +50% regen which is what actually keeps you upright between
packs.

**Bench loadout, both parties: Mine Foreman · Vanguard · Idiosyncratic · Stronghold Strategist.**
+100% mining, +40% player Attack, **+140% player Defence**, +200% player HP regen. Cost 120 Bounty
Tokens plus four Glistening-relic pulls.

**Nice structural consequence:** Idiosyncratic is the only bench passive that cannot be bought, and it
comes from Glistening relics — so **the relic party is what upgrades the Paloxite party**. That gives
the two-party split a build order it did not have before: relics first.

What survives from the retracted callout: the rule itself ("on the bench, only what reaches the player
does anything"), and that Diamond Body, Demon God, Legend and the World Tree attack passives really are
dead there. Also that Idiosyncratic is still **not gas cover** — that part was right, since the
immunities are the carrier-only half.

Files: `world-tree-team.html`, `passives.html`, `world-farming.html`, `sources.html` (3 rows + a new
"worth correcting if you have read it elsewhere" entry).

---

## 2026-09-06 (cont. 7) — Logging Foreman comes out; Idiosyncratic never belonged on the bench

Player's proposed bench loadout: **Mine Foreman, Idiosyncratic, Vanguard, Stronghold Strategist**, and
no Logging Foreman because wood is not scarce.

**They are right about Logging Foreman, and the confirming fact is one this guide already had:** the
Recycler drops **Mythical Wood at 100% from every relic tier**. So a relic route is already a wood
route, before expeditions and kills are counted. I had recommended Logging Foreman on the reasoning
that it was free and +25% — **which is not a reason, it is two properties.** The test that put Mine
Foreman in the party is whether the thing being multiplied is something you are short of. Paloxite is;
Mythical Wood is not. Free and large loses to useful and small.

**Idiosyncratic is the one to correct.** Def +25%, regen +50%, Poison and Burn immunity — all
**Pal-side**, and therefore **completely inert on a bench Pal**. A Pal that never deploys is never hit,
never regenerates and is never poisoned. The Poison immunity in particular reads like gas cover and is
not: it protects the carrier, not the player. It belongs on the mount, which is the only Pal on either
party that is actually out — and the gas is already answered by the Corrosive Mist Mask regardless.

**This is the third form of the same trap in one day**, so it is now named explicitly in a callout on
both `world-tree-team.html` and `passives.html`: *on the bench, if the text does not say Player, it
does nothing.* Earlier instances were the drop-booster passives ("their passives are irrelevant" — which
was wrong in the other direction) and talents/IVs on bench Pals.

**Fourth seat goes to Wellness Watcher** (&minus;5% player stamina, &minus;20% across four). It is a weak
field once Logging Foreman is out — Motivational Leader is base crafting, Healing Coach and Reload
Master are rounding errors — but mining swings do cost player stamina, so it is worth a little rather
than nothing.

**Bench loadout, both parties: Mine Foreman · Vanguard · Stronghold Strategist · Wellness Watcher.**
Party total +100% mining, +40% player Attack, +40% player Defence, &minus;20% stamina drain, for **180
Bounty Tokens** (Mine Foreman is free; the other twelve installs are 15 each). Identical on both
parties, so it is set up once.

Files: `world-tree-team.html` (two new callouts, table and totals rewritten), `passives.html` (inert
Pal-side passive warning), `merchants.html`, `world-farming.html`.

---

## 2026-09-06 (cont. 6) — Mounted damage is always a mix, so the answer is a threshold

**Player: damage while mounted is always some combination of player and Pal, with the split set by
their own clear-speed testing.** That retires the "pure mount-kill route" assumption I built the relic
party on, where I called Solenne and the bench Vanguards "dead weight on a route where you never fire a
shot". **There is no such route.**

**The reframing is better than what it replaced.** I had presented the two pipelines as a dilemma —
"killing with both means funding both". They are not fungible, so it is barely a dilemma at all:

- The **sixteen bench passive slots** can *only* buy player damage. There is nothing Pal-side to put
  in them.
- The **mount's four passive slots** can *only* buy Pal damage.
- Neither pool trades against the other, so **you max both and no choice is involved** in the great
  majority of the investment.
- They compete in exactly **one** place: the five party slots, where Solenne sits against a booster.

**And that one decision has a computable threshold**, which is the genuinely useful thing to come out
of this. On the Paloxite run: Cryolinx multiplies Orserk drops by **1.31x** (+160% to +240%); Solenne
multiplies kills per hour by whatever she cuts off clear time. So **Solenne wins only if she cuts clear
time by more than ~24%**, since 1/(1-0.24) = 1.31. Two timed laps settle it — and the same number
reveals the player-versus-Pal damage split, because Solenne can only amplify the player's half.

**On the relic run the bar is much lower**, because Dark has only two boosters and +160% is already the
ceiling — there is no third booster to compete with. Solenne is up against Nitemary (a different
resource) or a Dragon body worth +6%. So **Solenne goes into the relic party**, replacing the
Dragon/Fire flex I had recommended.

Relic party is now **Eidrolon · Elphidran · Enchanted Sword · Solenne · Nitemary**.

Also corrected the "do not run one party for both jobs" callout, which claimed the relic party carries
zero player-side buffs. The two parties actually share more than I said: **the sixteen bench passive
slots are identical on both**, so half the setup work is done once.

Files: `world-farming.html` (new `#split` threshold block), `world-tree-team.html` (pipeline callout
rewritten, one-shotting caveat pointed at the threshold).

---

## 2026-09-06 (cont. 5) — Weight is disabled on this save

**Player runs with weight off — everything is weightless.** This invalidates the carry-capacity
recommendation made an entry ago, and with it the "highest-value open question" I had just flagged
(whether Paloxite counts as "ore" for Turtacle). Both retracted within the hour.

**The mistake worth recording:** I had the player's settings noted as "default", took that literally,
and reasoned my way to a confident recommendation on top of it — including promoting Turtacle to a
condense-worthy Pal, a 48-Pal project. Worse, `world-tree-team.html` line 378 has said *"irrelevant on
your settings anyway"* about item weight since an earlier session, so **the guide already contained the
fact that contradicted the recommendation.** I did not check it. Second time today that this site
already held the answer to something I researched from scratch — the stat-fruit miss was the first.

**Added a settings block to the top of `sources.html`** stating the world configuration explicitly, so
the exception is visible rather than buried in a memory note. Kept the carry-weight reference table,
which is correct on default settings, but marked every recommendation built on it as default-only.

**The Paloxite fifth slot now goes to Cryolinx.** Orserk is Dragon/Electric, so a Dragon booster stacks
on top of both Menastings and takes Orserk to **+240%** Holy Water. With capacity no longer competing
for the slot, it is the only candidate that multiplies a resource rather than nudging kill speed — and
on a lap where mining and travel dominate the clock, kill speed is not what that slot is short of.

**Noted the floor that makes this an easy call:** every party slot is also four passive slots, so
whatever Pal sits there still carries Mine Foreman, Logging Foreman, Vanguard and Stronghold
Strategist. The slot is never wasted; only the partner skill is ever in question.

**The one thing that would flip it:** if laps finish with *surplus* Holy Water, Cryolinx is boosting the
wrong half — an ingot is 2 Paloxite + 1 Holy Water, so ore is the half in demand. Nitemary for Pal
Souls would be the swap. That needs a lap's observation, not a source.

Ledger: the Turtacle row is now "Moot here" rather than Open. Files: `world-farming.html`,
`world-tree-team.html`, `sources.html`. Memory corrected: the play-context note said plain "default
settings" and now records the weight exception with an explicit instruction never to recommend a
capacity Pal.

---

## 2026-09-06 (cont. 4) — The mask frees a slot in both parties

**Player has built the Corrosive Mist Mask**, so Dandilord is not needed. This guide had him listed as
one of two slots "the World Tree demands" — wrong on a save with the mask, and corrected in five
places. The mask is a Legendary accessory from Toxin Filtering Membrane granting outright Toxic Gas
immunity for **no party slot**; the only thing lost with Dandilord is the Poison 2 rider.

**Worth noting for anyone else reading:** the item is the **Corrosive Mist Mask**. The separately-named
"Gas Mask" is unobtainable developer leftovers with no recipe, drop or vendor.

**Both parties therefore get a fifth slot back, and it goes to different things.** Wrote up the two
finalised parties at `world-farming.html#two-parties`.

**Relics (Wistella) — Eidrolon · Elphidran · Enchanted Sword · Nitemary · flex.** The finding that
settles the "what maximises AoE kill speed" question: **no party slot speeds up the killing.** Partner
skills buff the *player*, boost drops, or carry utility — essentially none buff a Pal's damage. So on a
route where the mount kills, clear speed comes entirely from the mount's own passives, condensation and
talents, and Solenne plus every bench Vanguard is dead weight. The spare slots should buy **yield**:
Nitemary for the Pal Souls this route already produces in bulk, and a Dragon or Fire body for the free
+6% via Resentful Pterosaur (Elphidran is already a Dragon, so one tick comes free — but do not build
around it, since maxing it would mean dropping the Dark boosters).

**Paloxite — the freed slot goes to carry capacity, not more drops.** The tempting move is Cryolinx to
push Orserk to +240% Holy Water. Wrong lever: **a Paloxite Ingot is 2 Paloxite + 1 Holy Water**, so ore
is the half you are short of, and boosters do nothing for ore. The binding constraint on a 61-node lap
is how much you can carry before going home.

**Carry-weight gap closed** (open since 3 Sep, and the earlier Lunaris-only answer was incomplete):

- **Turtacle — ore weight −80% → −100%.** At max condensation the haul becomes *weightless*, which
  removes the constraint rather than raising it. **First choice, conditional.**
- **Lunaris +300 → +600** capacity, **Cattiva +100 → +200**, both unconditional and stacking.
- **Fuddler** (stone), **Gumoss** (wood −40 → −60%, logging +30 → +50%).

**New highest-value open question: does Paloxite count as "ore" for Turtacle?** No source says. It
decides the fifth slot outright, and one lap answers it. Flagged on the page and in the ledger.

Also promoted Turtacle to a condense-worthy Pal on the team page — the ore reduction scales with
condensation and the last 20 points are exactly what makes a haul weightless, so it is the one
carry-weight Pal where the 48-Pal project pays.

Ledger: 4 rows added, 1 superseded. Files: `world-farming.html` (new `#two-parties` section, gas
warning and carry-weight answer rewritten), `world-tree-team.html` (Dandilord corrected in five
places), `passives.html`, `sources.html`.

---

## 2026-09-06 (cont. 3) — Relic farming, and the booster ceiling was wrong

Player is building a relic-farm team and shared a community infographic (SiNKiLLeR, "verified v1.0.2")
for an Orserk + Snock Lux party. Two things came out of it, one of which corrects this guide.

**(1) The +160% booster ceiling only ever applied to single-typed targets.** The booster keys off the
*target's* element, and **a dual-typed Pal is boosted by either of its elements**. Orserk is
Dragon/Electric, so Menasting + Menasting Terra + Cryolinx all apply — **+240%**. This site had been
quoting +160% as the cap throughout. Added to `world-farming.html` and caveated on the booster table.
Medium confidence: consistent with the species/skill-ID rule already established here, but the only
source is the infographic.

**(2) The infographic's route is probably not the best one for relics, and the reason is arithmetic
the infographic does not do.** +160% is 2.6x drops; +240% is 3.4x. So the third booster is worth
**+31% per kill, not +80%** — and on a two-species route you spend *two* slots (Cryolinx and Vaelet)
to get it, each idle on half your kills. The infographic even states this itself ("Vaelet does not
apply to Orserk", "Cryolinx does not apply to Snock Lux") without drawing the conclusion: **one of the
five slots is dead on every kill.**

Against that, the **Wistella route** (Gilded City Ruins Watchtower, -1862, 1377) targets a single
**Dark** species in tight groups on a short loop, drops **all five relic tiers**, and takes Elphidran +
Enchanted Sword for +160% with **zero dead slots and two genuinely free ones**. Reported yield 706
relics in ~20 min. Recommended it, with the caveat that **Game8's own relic guide names different
routes entirely** (Grizzbolt/Mossanda Lux) — route choice is genuinely unsettled, so told the player to
time both rather than presenting it as decided.

**(3) The gas gap.** Any five-Pal relic comp that is mount + four boosters has **no answer to the World
Tree toxic mist**. Only Dandilord's Mist Stalwart nullifies it *for the player* — Idiosyncratic's
Poison immunity is a Pal passive and protects the carrier only. The player's proposed mount build had
Idiosyncratic in it, which is the kind of thing that looks like it covers the gas and does not.

**(4) Resolved: base Eidrolon is Dragon/Dark** (Ignis is Dragon/Fire). Open since 3 Sep. Both share the
Dragon half, and **Dragon is super-effective into Dark**, so Eidrolon is type-advantaged against every
target on the Wistella route — a genuinely good pairing with the player's mount choice.

**On their proposed mount build (Dimensional Leap, Legend, Diamond Body, Idiosyncratic):** three of
four slots are defensive — +75% Defence against only +20% Attack — on a Pal whose stated job is fast
AoE clears. Two specific notes given:

- **The despawn immunity does nothing on a pure kill-farm.** It stops resource *nodes* despawning;
  relics from defeated Pals are unaffected. So Dimensional Leap is bought for its +50% movement alone,
  and the World Tree slot is not forced — which reopens **Twin-Edged Holy Blade (+50% Atk)**.
  Flagged as unconfirmed whether world-object relics (junk piles, chests) despawn like nodes do.
- **Route shape flips the build.** The Paloxite circuit is 61 nodes and travel-dominated, so movement
  won slots there. A relic route is a short loop against tight packs, so **clear speed is nearly the
  whole yield term**. Recommended Serenity + Demon God + Twin-Edged Holy Blade + Diamond Body.
  **Diamond Body is the one pick of theirs to keep** — flinch/knockback immunity means AoE casts are
  never interrupted mid-pack, which is worth more here than on any other route.

Ledger: 4 rows. Files: `world-farming.html` (new `#relics` section), `passives.html` (Glistening source
corrected in two places), `sources.html`.

---

## 2026-09-06 (cont. 2) — The mount fights, and max IVs turn out to be a purchase

**Correction from the player: the mount is not a firing platform.** They use its abilities to kill, so
its own Attack is live. This page had been written around "you are dealing the damage, so the mount is
a platform rather than a fighter", and that framing was load-bearing for several verdicts — all now
rewritten.

**The structural point that came out of it, and it should have been said much earlier:** there are
**two damage pipelines and they do not feed each other.** Vanguard and Solenne buff *Player* Attack —
the gun. Demon God, Legend and the World Tree attack passives buff the *Pal's* Attack — the mount's
abilities. The sixteen bench slots are entirely player-side and cannot be repurposed, so the mount's
own four slots are the only place mount damage can come from. That makes them worth more than the page
assumed.

**Two things I got wrong earlier today and have retracted on the page:**

1. **"Swap Legend for Runner."** That rested on Legend's Attack and Defence being dead weight on a
   platform mount. With the mount fighting, Legend's +20% Attack is live and Runner is the weaker pick.
2. **Eternal Engine.** I argued flight drains stamina continuously, so it earns a slot. True in general,
   but **this route lands at 61 nodes** and stamina regenerates on the ground — the legs between
   clusters are short. The slot is better spent on damage. Left the build on the page as the
   "maximum speed" option with the symptom that would justify it (gliding down mid-flight).

**Recommended mount is now Dimensional Leap · Serenity · Demon God · Swift** (+80% move, +40% Atk,
−30% cooldown). **Serenity is the pick most easily missed**: if abilities are doing the killing, uptime
is the limiter, and −30% cooldown is roughly **+43% ability uptime** — a bigger multiplier than any
single attack passive, plus +10% Attack. Arena implant, 50 tickets.

Dimensional Leap stays over Twin-Edged Holy Blade (+50% Atk) despite the mount now wanting damage,
because the **slot pool is asymmetric**: outside the World Tree tier you can buy attack at up to +30% a
slot plus cooldown reduction, while movement outside the tier caps at Swift's +30%. Spend the forced
slot on the stat you cannot buy elsewhere.

**Player also confirmed hunger is a non-issue — they wear a feedbag.** So Dimensional Leap's hunger
penalty is *zero* on this save, not merely "bounded". World Tree's Bounty drops to a no.

---

**New section: talents (IVs).** Requested; sits at `passives.html#ivs` with cross-links from both
condensation discussions (`world-tree-team.html`, `base-production.html`) and from the fruit row on
`merchants.html`.

**The headline is that maxing IVs is a purchase.** Life / Power / Stout Fruit each add **+10 talent**
to HP / Attack / Defence, cap 100, and the Bounty Officer sells them at **25 tokens**. So ten fruits
finish any stat from zero, and the common guide claim that IVs are "the one layer you cannot buy or
grind after the fact" is false in 1.0.

**Embarrassing detail worth recording: this guide already listed the fruit.** `merchants.html` has had
Life/Power/Stout at 25 tokens since the first build, filed under "stat fruit", and nothing ever said
what they were for. Exactly the same shape as the Recycler miss earlier today — the solved problem was
sitting on a shelf already documented on the site. **Worth a sweep: what else is listed here without
its purpose attached?**

**The one genuinely non-obvious bit,** and no guide states it: a fruit is a flat +10 and the cap is
100, so the bill is **⌈(100 − talent) ÷ 10⌉** fruits. **A Pal at 71 and a Pal at 79 cost exactly the
same to finish.** Breeding 71 → 79 is worth nothing; 71 → 81 saves one fruit, or 25 tokens. That prices
the whole breeding decision: keep hatching only while you expect to cross a ten-boundary, at 25 tokens
a crossing.

**Inheritance** (Game8, 107-egg test, 24 Aug 2026): at least one of the three talents is always
inherited from a parent; the rest are ~30% from a given parent and ~40% a fresh 0–100 roll. Cakes:
Mushroom improves the talent roll, Extravagant Vegetable adds talent points and ~3% mutation and needs
no Honey, Vegetable doubles eggs, Special is passives only. Read talents with **Ability Glasses**
(Level 34), green at 70+.

**And the thing that saves the player tokens: talents do nothing for the four bench Pals.** Their HP,
Attack and Defence never apply. Do not feed them fruit — that is 750 tokens per Pal saved, and it goes
to implants instead. On that team only the mount's talents matter.

Ledger: 4 new rows. Pal Soul cap logged as **Open** — the +3%/level figure is consistent but the
level-20 / +60% cap traces to patch 0.4.11.0, which is early-access era and not verified for 1.0.

---

## 2026-09-06 (cont.) — Three player answers, and the mount build settles

All three open questions from earlier today answered from live play. All three went against what the
sources implied, which is the usual pattern here.

**(1) The despawn immunity requires the *deployed* Pal.** A benched party Pal does not project it.
This is the opposite of the convenient answer, and it *improves* the page rather than complicating it:
the mount spends one slot on the World Tree tier no matter what, so the question stops being "which
World Tree passive suits a mount" and becomes "which one is not a dead slot". Only **Dimensional Leap**
answers that.

**That reverses this guide's own advice from 5 Sep**, which said World Tree's Bounty beats Dimensional
Leap on a long lap because Leap worsens hunger. The reasoning was locally sound and still wrong,
because it priced the slot as free. Once the slot is committed, the comparison is +50% movement against
a hunger modifier — and **hunger is bounded and answerable by carrying food, while movement is not
recoverable.** Worth remembering as an error shape: I compared the two *effects* without noticing the
slot was not optional.

**(2) Mine Foreman and Logging Foreman are default Surgery Table options — free.** No token, no relic,
no breeding. Sources called them "implants" and could not agree on a shelf; none said "free". So the
two largest player-side numbers in the game cost nothing.

That resizes the bench build cleanly. Eight passives reach you from the bench, four are clearly the
biggest, and four Pals x four slots is sixteen — **four copies each of Mine Foreman, Logging Foreman,
Vanguard and Stronghold Strategist fills every slot exactly.** +100% mining, +100% logging, +40% player
Attack, +40% player Defence, for **120 Bounty Tokens total** since half the installs are free. Wellness
Watcher, Motivational Leader, Healing Coach and Reload Master are all cut — a -5% and a +4% cannot beat
a +25% for a seat.

**(3) It is World Tree's Bounty**, not Seedbed. Guide corrected, old name kept visible.

**The mount (player's build, endorsed): Dimensional Leap · Swift · Legend · Eternal Engine.**
+100% movement and +75% flight time. Checked Eidrolon Ignis while writing it up: it is a **flying**
mount, 2,750 sprint / **400 base stamina**, and flight drains stamina continuously rather than in
sprint bursts — so Eternal Engine over a further +20% move is the right call on a 61-node lap.

**Also caught a math error while rewriting that card.** The mount was described as "roughly +120%
movement" for a stack of *World Tree passive + Swift + Legend + Runner*, which is +70%. The +120%
was left over from an earlier version whose first slot was Dimensional Leap. Fixed.

**One addition to the player's build worth flagging:** **Legend** is Atk/Def/Move +20%, and the first
two are dead weight on a mount you only shoot from — so **Runner** (+20% move, Arena, 50 tickets) is an
exact substitute for the part being used. Swap it and the whole mount needs no breeding: Dimensional
Leap, Swift and Eternal Engine are all in the Recycler's common pool, Runner is an Arena implant.
Keep Legend if already owned; do not start a project for it.

Files: `world-tree-team.html`, `passives.html`, `merchants.html`, `sources.html` (4 ledger rows,
three now Resolved).

---

## 2026-09-06 — The Ancient Relic Recycler breaks the "you must breed it" assumption

Player pointed at a Reddit thread on the **Ancient Relic Recycler** and said they had already pulled
**multiple World Tree passives** from it. Reddit is still unreachable from here, so the mechanic was
rebuilt from palpedia + Game8 + palworld.gg and checked against their report.

**Correction (theirs, again — that is seven or eight now).** The guide said a World Tree passive was
"the one thing you genuinely have to breed". Wrong. The Recycler (Tech 74) makes **Disposable
Implants**, installed at the **Pal Surgery Table** (Tech 38):

- **Common pool, any relic grade — 16 items at 6.25% each.** *All seven World Tree passives are in
  it*: Demon's Hand, Twin-Edged Holy Blade, God of Destruction, Sanctified Meat Shield, Dimensional
  Leap, World Tree's Bounty, Hermit Sage. Plus Swift, Demon God, Diamond Body, Remarkable
  Craftsmanship, Eternal Engine, King of the Waves, Vampiric, Mastery of Fasting, Heart of the
  Immovable King.
- **Glistening-only pool — 5 items at 20% each.** The **Rainbow tier**: Immortality, Heavily Armored,
  Babysitter, Skymarcher, Idiosyncratic. So "mutated eggs are the only source of Rainbow passives"
  was also wrong. Hard-mode expeditions are the Glistening source.
- **Reconciling the rate conflict:** both pools sum to exactly 100%, so those are *within-pool*
  shares. Game8's absolute figures top out near 3.9%, implying roughly one relic in five rolls an
  implant at all. Neither source states the roll chance directly — logged as Medium.

**The second half of the question: the three empty slots on the WTF team.** The page only ever
specified Vanguard. The useful framing turned out to be that a **bench Pal's own stats are inert** —
only passives whose text says *Player* do anything — and there are exactly **eight** of those in the
game against **16 slots** across the four bench Pals. So the pool is smaller than the slot count and
the build is just "take the best four, four times".

**Mine Foreman (+25% player Mining Efficiency) is the miss.** Everything on that page optimised
*kills*, but Paloxite does not come from kills — it comes from swinging a Multicutter at 61 nodes.
Mine Foreman is the only passive in the game that touches that half of the route. Four copies = +100%.
Game8 (20 Aug 2026) is explicit that it is the player's tool speed, not base work. **Cross-party
stacking is inferred from the Vanguard class, not measured — the largest untested number in the build.**

Recommended sixteen: Mine Foreman + Vanguard + Stronghold Strategist on all four, then one World Tree
implant (Solenne) and Wellness Watcher elsewhere. Twelve of those are Bounty Officer implants at 15.

**New open question, and it is cheap to answer in one lap:** does the World Tree despawn immunity
reach from an **undeployed** party Pal? If yes, park it on Solenne and the mount's fourth slot frees
up for **Eternal Engine** (+75% mounted stamina), which matters on a 61-node circuit. If no, keep it
on the mount.

**Naming:** two datamine sources call the hunger passive **World Tree's Bounty**; this guide had
*World Tree Seedbed*. Adopted Bounty, kept the old name visible. Effect identical.

Files: `world-tree-team.html` (new `#slots` section + recycler correction), `passives.html` (new
§3b player-buff passives, recycler in the acquisition list, Rainbow correction), `merchants.html`,
`sources.html` (7 ledger rows).

---

## 2026-09-05 - Correction: the Paloxite immunity belongs to the whole World Tree tier

Two player corrections.

**Every World Tree passive grants World Tree resource protection**, not just Dimensional Leap and
Hermit Sage as this guide claimed. Resources stop despawning on approach for any Pal carrying one,
and no skill description mentions it. So it is not a constraint on the build at all - **pick the
passive that suits the Pal's job and the immunity comes free**.

Added a selection table for a mount you shoot from: **World Tree Seedbed** (hunger -50% slower) is
usually the pick for a long circuit, since Dimensional Leap makes hunger *worse*. The Attack-swing
passives are wasted on a mount that is not the one dealing damage.

**Eidrolon Ignis** is now covered directly, since it is the mount in use. Dragon/Fire with a
**2,750 riding sprint** rivalling Jetragon - and on a 61-node circuit traversal is most of the run.
Mounted, your attacks take its element, so **Dragon is advantaged into Orserk** (Dragon/Electric) and
neutral into Snock Lux, trading some damage on half the targets for speed across the whole lap. Its
partner skill *Resentful Pterosaur* scales with other Dragon or Fire Pals in the party, of which a
drop-booster comp has none - ride it for the speed, not the skill.

---

## 2026-09-05 - Correction: Paloxite is plentiful, not the bottleneck

Player confirmation that the map's node count reflects reality - they have visited many of them, and that **the map is filtered to Paloxite specifically**, so every detected marker is a Paloxite node.

This guide had claimed **"Paloxite is your real bottleneck, and no Pal can help with it"**, reasoning
that Holy Water has many sources while Paloxite came only from three named clusters. Published guides
name three clusters totalling about **twelve** nodes; the region actually holds about **seventy-six**,
and one circuit visits 61.

So Paloxite is plentiful, neither half of the Paloxite Ingot recipe is scarce, and the constraint
returns to where the rest of the guide already had it: **Ancient Furnace throughput, capped by base
worker slots**. You gather ore faster than two Pals per furnace can smelt it.

**What still holds:** drop boosters do nothing for mining, so on this trip they remain pure Holy Water
value; and the 2 Paloxite : 1 Holy Water ratio is unchanged.

### The pattern, now twice
Written guides name a few convenient spots near fast-travel points, and reading that as an inventory
rather than a sample has now produced a wrong conclusion twice - here, and with the Sunreach Soralite
route, published as a single 5-node cluster but actually a five-stop loop of 30 to 40 nodes. Noted on
the page and in the correction log.

---

## 2026-09-05 - The real node map, and a computed 61-node circuit

Replaced the three-cluster schematic with the player's own Paloxite-filtered map plus a route
computed over it.

**Method** (archived in `research/paloxite-route/` so it can be rerun):
1. Detected **76 Paloxite markers** from the screenshot by colour, splitting overlapping icons in the
   dense volcano cluster by area.
2. Nearest-neighbour tour refined with 2-opt, then greedily dropped the highest-detour nodes until
   80% remained, re-optimising as it went.
3. Emitted a Catmull-Rom smoothed SVG overlay with evenly spaced direction arrows, scaled with the
   image so both stay aligned.

**Result: 61 of 76 nodes for 71% of the full-sweep distance.**

### Two findings from the analysis
- **The skipped 20% are isolated stragglers, not a corner of the map.** Median distance to their
  nearest neighbour is **46px against 22px** for nodes on the circuit, so each costs roughly double
  the travel and returns the same single node. My first read from the preview - that they were
  interior nodes - was wrong; they are only 5% closer to centre, which is noise.
- **The efficiency curve is flat between about 70% and 85% coverage**, so there is no sharp optimum
  to hit. The one genuinely sharp win is the first four nodes dropped, which shed **13% of travel for
  5% of nodes**. Below ~63% coverage it stops paying entirely. Published the full trade-off table so
  the target can be moved on evidence.

### Limits stated on the page
Detection is colour-based rather than game data, so the count may be off by two or three; the route
shape does not depend on it. The circuit is a straight-line flight path and ignores terrain.

---

## 2026-09-04 - Paloxite route map

Added a hand-authored inline SVG to the World Tree team page plotting all three Paloxite clusters
from their in-game coordinates, with node counts and a suggested run order.

**Dusty Ravine (3) -> Remnant Riverside (3+) -> Gilded City Ruins (6)** - twelve nodes a lap. Start
at Dusty Ravine because its three sit on the fast-travel point, so you are mining within seconds of
landing; finish at Gilded City Ruins so the most time has passed before you loop back to the first.
A dashed optional leg runs to Alluvion Lakefront for the Holy Water kill loop.

Theme-aware via CSS custom properties rather than baked colours, with `role="img"` and an aria-label
matching the caption. The interactive map at palworld.th.gl is linked for surrounding terrain - its
node data is client-side only, so the coordinates come from the guides already cited.

---

## 2026-09-04 - Stacking generalised, durability understood, Drone Launcher corrected

Three player corrections, each of which propagated further than expected.

### The stacking rule is general
**Unless a passive or partner skill says otherwise, it stacks. And where the text does say "does not
stack", that means it will not stack with another of the same species** - it still combines freely
with different Pals carrying different effects.

This guide had the rule but only for drop boosters. It is now stated as a general principle on the
passives and farming pages, which makes layering Solenne (+80% player Attack) with Robinquill (+35%
bow) and a Vanguard passive on every party member explicitly correct.

### Durability is spent per hit, not per damage
**A weapon loses 1 durability per attack regardless of how hard it lands**, so durability efficiency
is simply damage-per-hit:

- **Mechanical Bow: 20,000 damage per durability point** - best in the game by an order of magnitude.
- **Tactical Grenade Launcher: 6,722** - so its alarming 800 durability is ~800 heavy hits, fine.
- **Drone Launcher and Terraprisma: 200 and 90 per hit from nine constantly-attacking units** - they
  burn durability faster than anything else.

**And weapons are repaired, not replaced.** Hitting zero costs a repair rather than the full recipe.
That removes the "expect to rebuild it" framing this guide had applied to the Grenade Launcher and
Terraprisma.

**The fix:** **Tetroise Primo**'s partner skill *Stone-Chaser Archelon* cuts durability loss on all
weapons and armour by **80/84/88/92/100%** - total wear immunity at ☆4, and it covers the Plasma
Multicutter while mining too.

### Drone Launcher corrected
It is **the Terraprisma's upgrade** - same nine-unit playstyle, 200 Attack against 90, and 26,000
durability at Legendary against 10,368. And it **uses no ammunition at all**: it and the Nightglow are
the only ranged weapons in the game that need none. The ammo table previously said "not published".

### World Tree team restructured
Two slots are fixed (Dandilord, Ground mount with Dimensional Leap) and the other three are a real
trade, now presented as two loadouts:

- **Bow / Grenade Launcher:** Menasting x2 + Solenne. +160% drops, +80% Attack, durability irrelevant.
- **Drone Launcher:** Menasting + Solenne + Tetroise Primo. +80% drops, but **nothing in the loadout
  consumes materials at all**.

Added the caveat that Solenne only pays if kills are damage-limited - against Lv70-80 targets with a
20,000-Attack Bow and headshots you may already be one-shotting, in which case that slot belongs to
Menasting Terra.

---

## 2026-09-04 - Player damage: correction and a whole missing system

The player farms from the saddle, which makes slot 5 a player-buff slot rather than a combat-Pal
slot. Chasing that surfaced a mechanic the guide had ignored entirely.

### Correction - party-bench passives are not irrelevant
This page previously said drop boosters "never deploy, so their passives are irrelevant". **Wrong.**
A class of passives buffs the *player* from the party bench regardless of what the carrier is doing.

- **Vanguard: +10% player Attack**, stacking **additively** across every party Pal carrying it -
  **five Vanguards is +50% player Attack**.
- And it is a **Bounty Officer implant at 15 tokens**, so the whole party is +50% Attack for
  **75 tokens and no breeding**. Cheapest upgrade in the build.
- **Stronghold Strategist** (player defence) sits on the same shelf.

### Added - player-buffing partner skills, with per-star values
- **Solenne - Untainted Maiden: +30/40/50/60/80% player Attack** if all party Pals are different
  species. Biggest single-slot buff in the game; the condition is trivially met here. **Now slot 5.**
- **Robinquill - Grounded Archer: +10 to 35% bow damage** - a real contender given the Mechanical
  Bow's headshot playstyle. Trading a Menasting for it swaps 1.44x drops for ~35% kill speed, which
  is roughly even.
- Gobfin / Gobfin Ignis (+20% each, two species so they stack), Xenogard (energy weapons), Croajiro
  (+50% airborne), Dupin (below 50% HP) all catalogued with verdicts.

### Added - mounted mechanics
A mounted partner skill **changes your attack type to the mount's element** and adds
**+5/7/10/14/20% Attack**. Both targets are Electric, so **ride a Ground-element mount**: Dimensional
Leap is a bred passive rather than a species, so one slot delivers Paloxite immunity, traversal
speed, the mounted Attack bonus and a type advantage.

### Revised condensation priority
**Condense Solenne before the Menastings.** Same 48-Pal cost, but +30% to +80% player Attack pays off
in every fight in the game, where the Menastings only ever help against Electric Pals.

---

## 2026-09-04 - New page: World Tree farming team

A focused build page for farming Holy Water and Paloxite together, with the breeding and
condensation plan behind it. Linked in the nav on every page.

### Route
**Dusty Ravine `-1560, 1510`** is the only spot that pays both ways. Its Holy Water droppers -
**Orserk and Snock Lux - are both Electric**, so a single booster pair covers both species, and the
tightest Paloxite cluster sits on the fast-travel point. Alluvion Lakefront has a higher raw Holy
Water rate but needs three booster slots (Neutral + Water) and has no Paloxite.

### The party
Menasting + Menasting Terra (Electric boosters, different species so they stack) - **Dandilord**
(Mist Stalwart: nullifies World Tree toxic gas outright, plus Poison immunity and Poison 2 on your
attacks; does not stack) - a **mount carrying Dimensional Leap** (+50% move *and* permanent immunity
to the Paloxite despawn aura) - a combat Pal. **Lunaris is dropped** because this player runs
weightless, which frees that slot for damage.

### The finding that shrinks the work
**Drop boosters work from the party and never deploy, so their passives are irrelevant.** Only
*condensation* scales them. The breeding programme is therefore **two Pals - the mount and the combat
Pal - not five**.

Partner skill runs **Lv1 at ☆0 to Lv5 at ☆4**, scaling the bonus 40% -> 80%. Notably **two boosters
at ☆0 give +80%, exactly what one booster at ☆4 gives** - so catching both Menastings matches a
48-Pal condensation project instantly. Condense afterwards for the last +80%.

### Honest framing kept up front
Drop boosters do nothing for Paloxite, and a Paloxite Ingot needs **2 Paloxite to 1 Holy Water**.
Holy Water has many sources including passive base generation; Paloxite has exactly one. **Paloxite
is the real bottleneck and no Pal can help with it** - so the team makes the Holy Water half free
while you are there, but route time belongs on nodes.

Also noted: bring the **Tactical Grenade Launcher**, whose ammo costs no Paloxite - do not farm
Paloxite with a Beam Launcher.

---

## 2026-09-04 - Full 1.0 weapon database; rarity-cost theory reinstated

Parsed the Steam guide "All 82 Weapons Database in Palworld (1.0 UPDATED)" - per-rarity Attack,
magazine, weight, durability, materials, schematic and crafting station for every weapon, including
the whole Tech 67-80 tier that no other source covered. **Every Common value matches the in-game
panels captured earlier**, which calibrates it. Raw parse in
`research/weapon-database-1.0-steam.tsv`.

### The weapon I had missed
**Tactical Grenade Launcher: 6,722 Attack at Common, and its ammo uses no Paloxite** (10 Gunpowder +
4 Soralite Ingot per 10 rounds). That is **4.2x the damage of a Heavy Assault Rifle round** for
materials in the same automatable class. Its catch is **800 durability** - the lowest of any endgame
weapon - so expect to recraft it, which is cheap precisely because it needs no Paloxite.

### Correction - the rarity-cost theory is reinstated
Per-rarity recipes climb steadily: Beam Launcher runs **100 -> 200 Paloxite Ingot** Common to
Legendary, AI Core 10 -> 20, and higher tiers add **Ancient Civilization Parts the Common recipe does
not need at all**.

I had withdrawn this theory when three technology panels matched published figures exactly. Those
panels show the **Common** recipe and the published figures **were** Common - so they agreed for a
reason that was not evidence against scaling. The theory was right; my test of it was not.

### On this save specifically
The player's Plasma Rifle panel reads `68/42/6/5` where the standard Common recipe is `80/50/8/7` -
consistently ~15% lower. Something on that save reduces crafting cost, and it applies to everything.

### Added
- Per-rarity Attack, magazine and durability table for all ten endgame weapons.
- **Durability is what rarity actually buys**: Attack rises 1.2-1.67x Common to Legendary, durability
  rises **4x** across the board (Plasma Rifle 25,000 -> **100,000**; Combat SMG 8,000 -> 32,000).
  Upgrading a schematic buys uptime, not damage.
- **Plasma Rifle is the durability king** at 100,000 Legendary - its case is that it never needs
  replacing, not its damage.
- **Terraprisma recipe**, closing an open item: Hallowed Bar 40 + Pal Metal Ingot 20 + Ancient Civ
  Parts 3 at Common; 480/240/15 at Legendary.
- Laser Sword Common recipe and Attack (2,000).

### Still open
Shot interval, reload and pellet count for the Tech 67-80 weapons are unpublished anywhere reachable,
so damage per **second** remains uncomputable. Damage per **material** is fully solid.

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
