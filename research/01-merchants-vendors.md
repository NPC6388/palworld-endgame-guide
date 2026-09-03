# Palworld 1.0 — Vendors, Full Stock Lists, and What You CANNOT Buy

**Research date:** 2026-09-03
**Target audience:** Level-80 endgame player
**Scope:** Every currency-accepting vendor in Palworld 1.0, complete stock, and the definitive "must-farm" list.

---

## 0. Version Context (read this first)

| Fact | Detail | Confidence |
|---|---|---|
| Palworld 1.0 full release | **July 10, 2026** — exited Early Access, +72 new Pals, World Tree region, level cap 80 | **High** — multiple independent outlets ([Game8](https://game8.co/games/Palworld/archives/604495), [gurugamer](https://gurugamer.com/pc-console/palworlds-full-release-version-1-0-arrives-july-10-2026-with-massive-changes-27027), [Green Man Gaming](https://www.greenmangaming.com/blog/palworld-1-0-release-date-new-features-gameplay-trailer-and-more/)) |
| **Current live patch** | **v1.0.3**, released **August 12, 2026** (console build 1.101.283) | **High** — [Game8 1.0.3 notes](https://game8.co/games/Palworld/archives/614998), [MP1st](https://mp1st.com/title-updates-and-patches/palworld-update-1-101-283-for-version-1-0-3-brings-balance-changes), [GameRant](https://gamerant.com/palworld-new-update-patch-notes-august-2026/) |
| Tides of Terraria | Was **v0.6.0, June 25, 2025** (Early Access). It is *not* a 1.0-era update — its content (fishing, Moon Lord raid, small Isles) was folded into 1.0. | **High** — [wiki.gg 0.6.0](https://palworld.wiki.gg/wiki/0.6.0), [Game8 ToT notes](https://game8.co/games/Palworld/archives/532236) |

**Critical caveat on the shop data below:** the item-level tables come from two datamine-driven sites, [palworld.tools](https://www.palworld.tools/merchants) (stamped *"Palworld 1.0, build 24088745, updated July 13, 2026"*) and [palmods.gg](https://www.palmods.gg/guides/items) (*"1,891 normalized 1.0 item records"*). They independently reference the **same internal shop table IDs** (`Wander_Shop_1`, `Desert_Shop_1`, `Volcano_Shop_1`, `Caravan_Shop_1..25`), which is strong mutual corroboration that both are reading real 1.0 game files rather than paraphrasing each other's prose.

**However:** that snapshot is **1.0.0 / 1.0.1-era (mid-July 2026)**. Patches **1.0.2 and 1.0.3** landed after. 1.0.3 explicitly rebalanced World Tree Holy Water sources and Aquatic Construction Kit costs, so **a small number of shop rows may have shifted since**. Nothing in the 1.0.3 notes indicates merchant stock lists were rewritten, but treat exact gold figures as ±1 patch stale.

**1.0 structural changes to vendors** (vs. the Jan-2024 0.1.x guides that dominate search results):
- Pal Merchant and Black Marketeer stock is now **region-matched** to where the vendor spawns ([Game8](https://game8.co/games/Palworld/archives/441112)).
- Fishing bait was **added** to merchant stock in 1.0 ([Game8 bait guide](https://game8.co/games/Palworld/archives/531571)).
- **Accessories are no longer sold as finished items** — 1.0 removed buyable finished accessories; you buy Accessory *Boxes* from the Medal Merchant instead ([pindrop.gg](https://pindrop.gg/palworld/guides/merchants-and-npcs)). **Confidence: Medium** (single source).

---

## 1. The Complete Vendor Roster (1.0)

There are **twelve distinct shop archetypes** across four currencies.

| # | Vendor | Currency | Sells | Stock behaviour | Confidence |
|---|---|---|---|---|---|
| 1 | **Settlement Merchant** (a.k.a. red/green "Wandering Merchant" in settlements) | Gold | Materials, schematics, meds, seeds, precious items | **Fixed**, never rotates | High |
| 2 | **Duneshelter Merchant** (`Desert_Shop_1`) | Gold | ~127 items; desert armor, Musket, HQ Pal Oil, skill fruits | **Fixed** | High |
| 3 | **Fisherman's Point / Volcano Merchant** (`Volcano_Shop_1`) | Gold | ~127 items; fire skill fruits, ammo, Makeshift Handgun | **Fixed** | High |
| 4 | **Wandering Merchant** (`Wander_Shop_1`, roaming/base-visiting) | Gold | 32 items; skill fruits, ammo, **Paldium**, **Ore**, HQ Pal Oil | **Fixed** list | High |
| 5 | **Caravan Merchants** (`Caravan_Shop_1..25`) | Gold | 25 distinct lists, 4–31 items each | **Rotating** — refresh via relog / fast travel / sleep | Medium |
| 6 | **Vagrant / roaming traders** | Gold | Rolls one of 3 lists on spawn | **Randomized** on spawn | Medium |
| 7 | **Dungeon Merchant** | Gold | 33 items; ammo, cooked food, meds | **Fixed**, never rotates | Medium |
| 8 | **Pal Merchant** (blue coat) | Gold | **Live Pals only** | Region-matched pool, rotates | High |
| 9 | **Black Marketeer** | Gold | **Live Pals only** (rare / Sanctuary species) | **Randomized daily** from a fixed pool | High |
| 10 | **Medal Merchant** | **Dog Coin** | Handbooks, elixirs, stat fruit, hats, Accessory Boxes, 2 legendary schematics | **Fixed** | High |
| 11 | **PIDF Bounty Officer** | **Successful Bounty Token** | Implants, stat fruit, manuals, Gold | **Fixed** | High |
| 12 | **Arena Merchant** | **Battle Ticket** | 56 items: skill fruits, implants, weapon/armor schematics | **Fixed** | High |

**There is no expedition reward shop, no player-owned vending machine, and no vendor that accepts Ancient Technology Points.** ATP is spent *only* in the Technology tree ([Game8 ATP guide](https://game8.co/games/Palworld/archives/440197), [xgamingserver](https://xgamingserver.com/blog/palworld-ancient-technology-points-guide/)). **Confidence: High.**
The closest thing to "base vending" is **capturing a merchant NPC and placing them at your base** — they retain their shop, so you can buy/sell without travelling ([Steam discussion](https://steamcommunity.com/app/1623730/discussions/0/4343229179779162988/)). **Confidence: Medium.**

---

## 2. Locations & Coordinates

| Vendor | Location | Coords | Confidence |
|---|---|---|---|
| Settlement Merchant ×4 | Main island settlements | **(-188, -601)**, **(433, -271)**, **(-397, 18)**, **(76, -474)** | High — [palmods](https://www.palmods.gg/guides/items/wool) |
| Small Settlement | Near Plateau of Beginnings | ~**(75, -486)** | Medium — conflicting sign conventions across guides |
| Duneshelter (2 merchants: red + green) | Twilight Dunes desert | **(343, 362)** / **(351, 355)** | High — [palmods](https://www.palmods.gg/guides/items/high-quality-pal-oil) |
| Fisherman's Point (2 merchants: red + green) | S. coast of Mount Obsidian | **(-477, -748)** | High — [palmods](https://www.palmods.gg/guides/items/high-quality-pal-oil) |
| Marsh Island merchant | E. of Marsh Island Church Ruins | **(433, -361)** | Medium |
| Sea Breeze Archipelago | Near church ruins | ~**(-72, -550)** | Medium |
| Isle of Murmurs | — | not published | Low |
| **Medal Merchant** — Desolate Church | Windswept Hills | **(62, -414)** | High — [KeenGamer, 2026-07-21](https://www.keengamer.com/articles/guides/palworld-1-0-all-merchant-locations-guide/) |
| **Medal Merchant** — Forgotten Island Church Ruins | | **(-458, -13)** | High — same |
| **Medal Merchant** — Marsh Island Church Ruins | | **(400, -274)** | High — same |
| **Medal Merchant** — Sea Breeze Archipelago Church Ruins | | **(-62, -535)** | High — same |
| **Arena Merchant** | Arena, southern desert coast island | **(631, 16)** | High — [pindrop](https://pindrop.gg/palworld/npc) |
| **Black Marketeer** ×4 | Desolate Church, Desiccated Dunes, Deep Bamboo Thicket, Eastern Wild Island | see map | High — [pindrop](https://pindrop.gg/palworld/npc), [Game8](https://game8.co/games/Palworld/archives/441112) |
| **PIDF Bounty Officer** | Fisherman's Point, Duneshelter, Small Settlement | — | High — [supercraft.host](https://supercraft.host/wiki/palworld/bounty_tokens/) |

**Total merchant NPC count: 23** across 5 map categories ([pindrop.gg NPC map](https://pindrop.gg/palworld/npc)). **Confidence: Medium.**

---

## 3. Full Stock Lists (Gold vendors)

### 3.1 Settlement Merchant — FIXED (39 items)
Source: [palworld.tools](https://www.palworld.tools/merchants) (build 24088745). **Confidence: High** for the item set, **Medium-High** for exact gold values (1 patch stale).

| Item | Price | | Item | Price |
|---|---|---|---|---|
| Arrow | 10 | | Long-Eared Headband Schematic 1 | 500 |
| Berry Seeds | 10 | | Low Grade Medical Supplies | 780 |
| Wheat Seeds | 20 | | Medical Supplies | 1,820 |
| Red Berries | 50 | | High Grade Medical Supplies | 3,120 |
| Wheat | 70 | | **Precious Pelt** | 5,000 |
| Pal Sphere | 80 | | **Precious Claw** | 7,500 |
| Chikipi Poultry | 100 | | **Precious Plume** | 10,000 |
| Hardwood | 100 | | **Precious Entrails** | 12,500 |
| Lamball Mutton | 120 | | **Precious Dragon Stone** | 15,000 |
| Simple Bait | 160 | | **Ruby** | 20,000 |
| **Bone** | 200 | | **Sapphire** | 30,000 |
| **Egg** | 200 | | **Emerald** | 40,000 |
| **Horn** | 200 | | **Diamond** | 50,000 |
| **Leather** | 200 | | Bowler Hat Schematic 1 | 500 |
| **Milk** | 200 | | Farming Hat Schematic 1 | 500 |
| **Wool** | 200 | | Gumoss Cap Schematic 1 | 500 |
| **Electric Organ** | 300 | | Penking Cap Schematic 1 | 500 |
| **Flame Organ** | 300 | | Ribbuny Headband Schematic 1 | 500 |
| **Venom Gland** | 300 | | Tocotoco Cap Schematic 1 | 500 |
| | | | Witch Hat Schematic 1 | 500 |

### 3.2 Wandering Merchant (`Wander_Shop_1`) — FIXED (32 items)
The **only vendor list containing Paldium Fragment and Ore.**

| Item | Price | | Item | Price |
|---|---|---|---|---|
| Coarse Ammo | 40 | | **Aquatic Pal Fluids** | 300 |
| Handgun Ammo | 40 | | **High Quality Pal Oil** | 300 |
| Red Berries | 50 | | Shotgun Shell | 330 |
| **Paldium Fragment** | **70** | | Low Grade Medical Supplies | 780 |
| Wheat | 70 | | Medical Supplies | 1,820 |
| Assault Rifle Ammo | 90 | | High Grade Medical Supplies | 3,120 |
| **Ore** | **100** (stock 20) | | Electric Skill Fruit: Lock-on Laser | 3,000 |
| Simple Bait | 160 | | Skill Fruit: Implode | 3,000 |
| **Bone / Egg / Horn / Leather / Milk / Wool** | 200 ea | | Water Skill Fruit: Acid Rain | 3,000 |
| Rifle Ammo | 280 | | Precious Pelt → Diamond | 5,000–50,000 |

Sources: [palworld.tools](https://www.palworld.tools/merchants); Paldium 70g and Ore 100g independently confirmed by [palmods Paldium](https://www.palmods.gg/guides/items/paldium-fragment) and [palmods Ore](https://www.palmods.gg/guides/items/ore). **Confidence: High.**

> ⚠️ **Ore is capped at 20 units of stock** per merchant per refresh ([palmods](https://www.palmods.gg/guides/items/ore)); Paldium is listed as *"No cap recorded"* = effectively unlimited. **Confidence: Medium** — the two sites disagree on whether Ore restocks.

### 3.3 Duneshelter (`Desert_Shop_1`) & Fisherman's Point (`Volcano_Shop_1`) — FIXED, ~127 items each
Superset of the Settlement Merchant list, plus:
- **Duneshelter:** heat/cold-resistant armor, **Musket (37,600g)**, hat schematics (500g), HQ Pal Oil (300g), Grass Skill Fruit: Seed Mine (3,000g), Lettuce Seeds (40g)
- **Fisherman's Point:** **Makeshift Handgun (16,600g)** (buyable long before the lv-25 unlock), Mega Sphere (920g), skill fruits 1,000–2,500g, Fire Skill Fruit: Flare Storm / Ignis Breath (3,000g)

Sources: [palworld.tools](https://www.palworld.tools/merchants), [Game8 merchant list](https://game8.co/games/Palworld/archives/440393) (updated 2026-08-28). **Confidence: Medium-High** — item counts and headline prices agree, but no source published the full 127-row tables.

### 3.4 Caravan Merchants — **ROTATING**, 25 stock lists
4–31 items per configuration. Refresh by relog, fast travel, or sleeping. Range from basic supplies to **Beam Launcher (13,660g)**. Known unique offerings:
- **Caravan 14** — the *only* vendor in the game selling **Mushroom (300g)**
- Caravans 1, 22, 23, 24, 25 — Leather/Wool 200g; Caravans 2, 24, 25 — HQ Pal Oil 300g; Caravans 1, 23, 24, 25 — Venom Gland 300g

Sources: [palworld.tools](https://www.palworld.tools/merchants), [palmods Mushroom](https://www.palmods.gg/guides/items/mushroom). **Confidence: Medium.**

### 3.5 Vagrant Traders — **RANDOMIZED on spawn**
| Roll | Chance | Stock |
|---|---|---|
| Basic materials (14 items: wood, stone, ore, hardwood) | 50% | — |
| Bread/seeds list (21 items) | 25% | — |
| Sphere list (33 items: Pal / Mega / Giga Sphere) | 25% | — |

Source: [palworld.tools](https://www.palworld.tools/merchants). **Confidence: Low-Medium** — single source, no corroboration found for the exact percentages.

### 3.6 Dungeon Merchant — FIXED, 33 items
Arrow (10), Coarse Ammo (40), meats and cooked food, Low Quality Recovery Meds (2,820), Suspicious Juice (3,120), Leather/Wool/Venom Gland at standard rates. **"Stock never rotates, so anything here is a guaranteed buy."** **Confidence: Medium** — single source.

### 3.7 Pal Merchant & Black Marketeer — LIVE PALS ONLY
- **Pal Merchant** (6 locations): 10 common starters at 313–1,012g base; full rotation pool of 46 Pals at 358–2,913g. Region-matched.
- **Black Marketeer** (4 locations): rare/Wildlife-Sanctuary species. **Which Pals appear on a given day is random** from a fixed pool. Relaxaurus >20,000g; Daedream cheap.
- **Price multiplier by level: ×1.65 at Lv1 → ×9 at Lv50.**

Sources: [Game8 Black Marketeer](https://game8.co/games/Palworld/archives/441112), [palworld.tools](https://www.palworld.tools/merchants). **Confidence: High** for mechanics, **Medium** for exact base prices.

> **Neither sells items — only Pals.** Do not expect materials here.

---

## 4. Special-Currency Shops

### 4.1 Medal Merchant — **Dog Coin** (dropped by Mimog) — FIXED, 37 items
| Item | Price |
|---|---|
| Cattiva / Cawgnito / Chikipi / Dumud / Gloopie / Jelliette / Lamball / Sibelyx hats, Lyleen Accessory | 25 |
| **Mysterious Accessory Box** | 50 |
| Starfruit ☆1 / ☆2 / ☆3 / ☆4 | 50 / 100 / 200 / 400 |
| Burden, Might, Speed, Stamina, Vital **Elixir** | 200 ea |
| **Life Fruit / Power Fruit / Stout Fruit** | 200 ea |
| **Mystic Accessory Box** | 300 |
| **Applied Handbooks I** (Cooling, Gathering, Generating Electricity, Handiwork, Kindling, Lumbering, Medicine Production, Mining, Planting, Ranching, Transporting, Watering) | 300 ea |
| **Lily's Spear Schematic 4** (Legendary) | 600 |
| **Enhanced Lily's Spear Schematic 4** (Legendary) | 840 |

Source: [palworld.tools](https://www.palworld.tools/merchants). **Confidence: High** (item set), **Medium** (exact costs).

### 4.2 PIDF Bounty Officer — **Successful Bounty Token** — FIXED, 18 items
| Item | Price |
|---|---|
| **Gold Coin** (≈2,000g per token) | 1 |
| Advanced Technical Manual | 5 |
| Croajiro Cap / Herbil Headband / Turtacle Cap | 5 ea |
| **Pal Reverser** | 7 |
| **Implant: Artisan, Burly Body, Motivational Leader, Musclehead, Stronghold Strategist, Vanguard, Wellness Watcher** | **15 ea** |
| Kinship Peach | 15 |
| **Life Fruit / Power Fruit / Stout Fruit** | 25 ea |
| **Ripe Starfruit** | 50 |

Tokens come from killing/capturing wanted-criminal NPCs (1 token early → 5 for Ram at Lv59); targets respawn ~hourly. Sources: [palworld.tools](https://www.palworld.tools/merchants), [supercraft.host](https://supercraft.host/wiki/palworld/bounty_tokens/), [Palpedia bounty guide](https://palpedia.com/guides/bounty-hunting). **Confidence: High.**

> The "1 token → Gold Coin" row and the "2,000 gold per token" figure from Palpedia are the same thing. **This makes Bounty Tokens a gold faucet, not a gold sink.**

### 4.3 Arena Merchant — **Battle Ticket** — FIXED, 56 items
| Category | Items | Price |
|---|---|---|
| **Skill Fruits** | Dark, Dragon, Electric, Fire, Grass, Ground, Ice, Neutral, Water variants | 30–45 |
| **Pal Reverser** | | 35 |
| **Implants (passives)** | Ace Swimmer, Healing Coach, Infinite Stamina, Noble, Reload Master, Runner, Serenity | 50 |
| **Accessory Hats** | Dandilord, Ghangler, Icelyn, Kingpaca, Shroomer, Splatterina, Tarantriss | 80–100 |
| **Stat Fruits** | Life, Power, Stout | 100 |
| **Training Crystal** | | 50 |
| **Legendary Schematics** | Charge Rifle, Core Eject Shotgun, Energy Shotgun, V1/V2 Armor | 600–1,500 |

Source: [palworld.tools](https://www.palworld.tools/merchants). **Confidence: Medium-High** — the 56-row table was summarized, not published verbatim.

---

## 5. ★ KEY DELIVERABLE — Endgame Materials That CANNOT Be Bought From Any Vendor

Every row below was checked against the 1.0 shop tables via [palmods.gg per-item vendor data](https://www.palmods.gg/guides/items), which prints the literal string *"Not recorded — No vendor listing in the current shop tables"* when no shop row exists. **Confidence: High** unless noted.

### 5.1 Hard "must farm" — no vendor at any price

| Material | Why you need it | Actual best source | Confidence |
|---|---|---|---|
| **Ancient Civilization Parts** | Ancient tech crafting, everything late-game | Expeditions (World Tree/Sky/Dark Island: 8–11 ea, guaranteed); Alpha bosses (7–9, 100%) | **High** — [palmods](https://www.palmods.gg/guides/items/ancient-civilization-parts) |
| **Ancient Civilization Core** | Raid-tier gear | **Raid drops** (Bellanoir, Blazamut Ryu, Hartalis, Xenolord; Ultra raids = 10 guaranteed); World Tree chests; Ancient Relic Recycler | **High** — [palmods](https://www.palmods.gg/guides/items/ancient-civilization-core) |
| **Sulfur** | Gunpowder, Polymer, all ammo | Expedition Volcano (20–40 guaranteed); Pierdon (4–5, 100%); volcanic deposits | **High** — [palmods](https://www.palmods.gg/guides/items/sulfur) |
| **Coal** | Refined Ingot, Carbon Fiber chain | Expedition Desert (20–40); Blazamut / Blazamut Ryu (10 ea, 100%) | **High** — [palmods](https://www.palmods.gg/guides/items/coal) |
| **Pure Quartz** | Pal Metal Ingot, Soralite Ingot, circuits | Expedition Snow (20–40); Pierdon Cryst (4–5, 100%); northern cold-region clusters | **High** — [palmods](https://www.palmods.gg/guides/items/pure-quartz) |
| **Chromite** | High-tier alloys | Dark Island Supply (30–40 guaranteed); Expedition Dark Island (30–50); Silvegis (2–3, 100%) | **High** — [palmods](https://www.palmods.gg/guides/items/chromite) |
| **Carbon Fiber** | Advanced weapons/armor | **Craft only** (5 Charcoal + 1 Flame Organ, Tech 35); Shadowbeak drop (2–3, 100%, World Tree Lv80) | **High** — [palmods](https://www.palmods.gg/guides/items/carbon-fiber) |
| **Polymer** | Advanced weapons, Pal gear | **Craft only** (2 HQ Pal Oil + 1 Sulfur, Tech 33); Fire Cult enemies (20%) | **High** — [palmods](https://www.palmods.gg/guides/items/polymer) |
| **Ingot** | 272 recipes | **Craft only** (2 Ore); Bushi / Bushi Noct (2–3, 100%) | **High** — [palmods](https://www.palmods.gg/guides/items/ingot) |
| **Refined Ingot** | Mid-late gear | **Craft only** (2 Ore + 2 Coal) | **High** |
| **Pal Metal Ingot** | Endgame gear | **Craft only** (4 Ore + 1 Pure Quartz + 2 Paldium) — 50,000 work | **High** — [palmods](https://www.palmods.gg/guides/items/pal-metal-ingot) |
| **Soralite** *(1.0 NEW)* | Soralite Ingot | Sky Island mining/expeditions; Jetragon (100%); Pierdon Cryst (100%) | **High** — [palmods](https://www.palmods.gg/guides/items/soralite) |
| **Soralite Ingot** *(1.0 NEW)* | 59 recipes: AI Cores, Ancient Armor, Pal gear | **Craft only** — 2 Soralite + 2 Pure Quartz, Tech 66 (3 ATP), Ancient Furnace, **700,000 work** | **High** — [palmods](https://www.palmods.gg/guides/items/soralite-ingot) |
| **Paloxite** *(1.0 NEW)* | Paloxite Ingot | World Tree mining; Ancient Relic Recycler (World Tree Relics 1–5); World Tree expeditions | **High** — [palmods](https://www.palmods.gg/guides/items/paloxite) |
| **Paloxite Ingot** *(1.0 NEW)* | **Top-tier**: Beam Launcher, Plasma Rifle, Ancient Armor, saddles (22 recipes) | **Craft only** — 1 Soralite + 2 Paloxite + 1 World Tree Holy Water, Tech 74 (4 ATP), **1,000,000 work** | **High** — [palmods](https://www.palmods.gg/guides/items/paloxite-ingot) |
| **World Tree Holy Water** *(1.0 NEW)* | Awakening Crystals, Paloxite Ingot, Ancient Clinic/Farm/Hot Spring, Drone Launcher, Nutrient Tonic (16 recipes) | World Tree fishing (43–71!); Expedition World Tree Hard (32–38); alpha bosses (20–30, 100%) | **High** — [palmods](https://www.palmods.gg/guides/items/world-tree-holy-water) |
| **Cement** | All base building | **Craft only** (20 Stone + 1 Bone + 1 Aquatic Pal Fluids → 10); or salvage junk piles | **High** — [palmods](https://www.palmods.gg/guides/items/cement) |
| **Honey** | Cake (breeding!), cooking | Elizabee (5, 100%); Warsect (3–4); **Beegarde ranch (1–10 by rank)** | **High** — [palmods](https://www.palmods.gg/guides/items/honey) |
| **Ancient Technology Points** | Tech tree gating (Wing Pack 9 ATP @ Lv80, Ancient Hatchery 8, Soralite Quarry 7, Triple Jump Boots 6) | Bosses/towers/consumables. **Each source pays out once.** No shop, no currency exchange. | **High** — [Game8](https://game8.co/games/Palworld/archives/440197) |

### 5.2 Also NOT purchasable (verified or strongly indicated)

| Item | Note | Confidence |
|---|---|---|
| **Most Legendary Schematics (≈115 of 121)** | Drop-only: Alpha Pals, Hard-mode tower fights (World Tree energy weapons), and **Lv60 Oil Rig gold chests** (biggest single pool) | **Medium-High** — [KeenGamer](https://www.keengamer.com/articles/guides/palworld-1-0-legendary-schematics-guide-best-farm-and-drop-rates/), [palmods](https://www.palmods.gg/guides/legendary-schematics) |
| **Successful Bounty Tokens** | Earned only by defeating wanted-criminal NPCs. Currency, not merchandise. | **High** |
| **Dog Coins** | Drop from Mimog only. | **High** |
| **Battle Tickets** | Arena rewards only. | **High** |
| **Raid-only drops** (Bellanoir/Xenolord/Blazamut Ryu materials, Ultra raid cores) | Raid summoning + kill only | **High** |
| **"Genetic Research Module"** | **This item does not appear to exist in 1.0 under that name.** The implant system uses purchasable **Implant: \<passive\>** items (Bounty 15 tokens / Arena 50 tickets) plus the **Pal Reverser**. Verify the in-game name. | **Medium** — exhaustive search found no such item |
| **Mysterious Mushroom** | No such item found in 1.0 data. Only plain **Mushroom** exists (buyable — see below). | **Medium** |

---

## 6. ★ Nuance Cases — Technically Buyable, But…

### 6.1 Buyable but farming is strictly better

| Item | Vendor price | Why buying is bad | Confidence |
|---|---|---|---|
| **Ore — 100g** (Wandering Merchant) | 100g/unit, **stock capped at 20** | A single Digtoise/Anubis mining base out-produces this by orders of magnitude. 20/refresh is a rounding error against Pal Metal Ingot's 4-Ore cost. Buy only to top off a craft. | High |
| **Paldium Fragment — 70g** (Wandering Merchant) | 70g, uncapped | Genuinely useful as a gold sink — but Paldium nodes respawn freely and Pal Sphere costs are trivial at Lv80. Old 0.1.x guides quoting **20g** are **wrong for 1.0**. | High |
| **High Quality Pal Oil — 300g** (6 vendors) | 300g | Mammorest yields 7.5/kill; Dumud/Dumud Gild produce it passively on a ranch; Expedition Desert Hard gives 10–20 guaranteed. 300g each is a poor rate at Polymer scale (2 per Polymer). | High |
| **Venom Gland — 300g** (6 vendors, uncapped) | 300g | Menasting yields 7.5/kill; Caprity Noct / Depresso / Tarantriss ranch it passively. | High |
| **Leather / Wool / Milk / Bone / Horn / Egg — 200g** | 200g each | All ranch-producible on autopilot at Lv80. Buying is a convenience tax. | High |
| **Electric Organ / Flame Organ — 300g** | 300g | Relevant because **Carbon Fiber needs Flame Organ** — but Flame Organ drops in bulk from any fire Pal. | High |
| **Precious Pelt/Claw/Plume/Entrails/Dragon Stone, Ruby→Diamond (5,000–50,000g)** | 5k–50k | **These are SELL-value items, not inputs.** They exist in shop tables mostly as vendor-trash pricing anchors. Buying a 50,000g Diamond is never correct. | Medium-High |
| **Makeshift Handgun 16,600g / Musket 37,600g** | — | Sub-optimal at Lv80; only interesting as an early-game skip. | High |

### 6.2 Buyable ONLY from rotating / random stock

| Item | Where | Risk | Confidence |
|---|---|---|---|
| **Mushroom — 300g** | **Caravan Merchant 14 only** — one of 25 rotating caravan lists | You may need many relog/fast-travel cycles to see it. Effectively unreliable as a supply line. | Medium |
| **HQ Pal Oil / Venom Gland / Leather / Wool via caravans** | Caravans 1, 2, 22–25 | Fine — also available from fixed settlement vendors, so the rotation doesn't matter. | Medium |
| **Vagrant trader Ore/wood/stone** | 50% spawn roll | Not a supply line. Opportunistic only. | Low-Medium |
| **Black Marketeer rare Pals** | Random daily roll from a fixed pool | Save-scummable via relog / fast travel / title-screen return. This is the standard endgame trick for Sanctuary Pals. | High |

### 6.3 Non-gold nuances worth knowing at Lv80

- **Stat fruits (Life/Power/Stout) are triple-sourced**: Medal Merchant 200 Dog Coin, Bounty Officer 25 tokens, Arena 100 tickets. **Bounty tokens are by far the cheapest route** — an early bounty target gives 1 token, so ~25 easy kills = 1 fruit. **Confidence: Medium-High.**
- **Bounty Officer is a gold *faucet***: 1 token → ~2,000 gold. If you're gold-starved for the 50,000g Diamond-tier purchases, bounties beat selling loot.
- **Implants split across two shops**: Bounty Officer sells the *work/base* passives (Artisan, Musclehead, Motivational Leader, Stronghold Strategist, Vanguard, Burly Body, Wellness Watcher) at 15 tokens; Arena sells the *combat/mobility* passives (Infinite Stamina, Runner, Ace Swimmer, Serenity, Noble, Reload Master, Healing Coach) at 50 tickets. **No overlap** — you need both currencies for a full passive toolkit. **Confidence: Medium-High.**
- **Only 6 Legendary schematics are directly buyable**: 3 from Arena (Battle Tickets), 2 from Medal Merchant (Lily's Spear 600 / Enhanced Lily's Spear 840 Dog Coin). A further **22 hat/crown schematics** are sold at *Common* tier by regional Wandering Merchants (500g) and can be walked up to Legendary via the **Drafting Table's 5:1 upgrade, four times** (Common→Uncommon→Rare→Epic→Legendary) = **625 commons per Legendary**. That is a legitimate but brutally expensive gold-to-legendary conversion. **Confidence: Medium** — single source.

---

## 7. The One-Line Answer

> **At Lv80, gold buys you consumables, ammo, meds, bait, ranch commodities, skill fruits, hat schematics and live Pals — and nothing else.** Every ore, every ingot, every alloy, every ancient material, every 1.0 World Tree/Sky Island resource, and every raid drop is farm-only. The three special currencies (Dog Coin, Bounty Token, Battle Ticket) buy stat fruit, implants, elixirs, handbooks and six legendary schematics — but no crafting materials at all.

**Your real endgame bottleneck list is:** Ancient Civilization Parts/Cores → Expeditions + Alphas + Raids · Sulfur/Coal/Pure Quartz → Expeditions (Volcano/Desert/Snow) · Chromite → Dark Island · Soralite → Sky Island · Paloxite + World Tree Holy Water → World Tree. **Expeditions are the single highest-leverage non-combat material faucet in 1.0** — they guarantee bulk quantities of nearly every unbuyable material.

---

## 8. Confidence Ledger & Known Gaps

| Claim class | Confidence | Reason |
|---|---|---|
| Which items have **no vendor row** at all | **High** | Two independent datamine sites reading the same 1.0 shop tables; palmods prints an explicit negative string per item |
| Existence & currency of all 12 vendor archetypes | **High** | Corroborated across palworld.tools, pindrop, KeenGamer, Game8, wiki.gg |
| Exact **gold prices** | **Medium-High** | Snapshot is build 24088745 (1.0.0/1.0.1, July 13 2026). **Patches 1.0.2 + 1.0.3 came after.** |
| Full 127-row Duneshelter / Fisherman's Point tables | **Medium** | Only headline items published anywhere; not fully transcribed |
| Vagrant trader spawn percentages (50/25/25) | **Low-Medium** | Single source, no corroboration |
| Dungeon Merchant details | **Medium** | Single source |
| Caravan refresh mechanics | **Medium** | Described consistently but no source cites the underlying timer |
| Map coordinates | **Medium** | Guides disagree on sign conventions (e.g. Small Settlement quoted as both `-76,488` and `74,-486`) |
| "Genetic Research Module" | **Unresolved** | No item by that name found in 1.0 data — likely a misremembered name |

**Gaps I could not close:**
1. `palworld.fandom.com` returned **HTTP 402** and `palworld.wiki.gg/wiki/Version_History` **404** — the two most "canonical" wikis were unreachable, and wiki.gg's Wandering Merchant page self-reports as covering only **through v0.3.4.0** (Early Access) despite a July 2026 edit date. **Do not trust wiki.gg merchant pages for 1.0.**
2. `old.reddit.com` is blocked from this environment, so no direct player-thread corroboration.
3. `palpedia.com/guides/merchants` 404s; Palpedia's bounty guide was reachable but its merchant coverage was not located.
4. No source published the verbatim 56-row Arena table or the full 25 caravan lists.

**Recommended verification step:** everything price-sensitive should be spot-checked in-game against live 1.0.3, since the best available datamine predates two patches.
