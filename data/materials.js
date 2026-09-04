/* Palworld 1.0 (patch 1.0.3) — Endgame material ledger
 *
 * buy.status:   no     = no vendor row exists in any 1.0 shop table
 *               poor   = purchasable, but farming is strictly better
 *               rotate = only from rotating/random stock — not a supply line
 *               yes    = genuinely worth buying
 *
 * base.status:  yes     = fully automatable at base (ranch / node / craft chain)
 *               partial = base gives a trickle; world farming is much faster
 *               no      = you must leave the base
 */
const MATERIALS = [

  /* ---------- ANCIENT / RAID TIER ---------- */
  {
    name: "Ancient Civilization Parts",
    tags: ["ancient", "cannot-buy", "must-leave"],
    buy: { status: "no", detail: "No vendor row, any currency." },
    base: { status: "yes", detail: "Expedition Station. <strong>One station per base, but multiple bases run simultaneously</strong> — that is how you scale it into a real production line." },
    world: "Expeditions (World Tree / Sky / Dark Island: 8–11 guaranteed). Alpha bosses: 7–9, 100% drop.",
    party: "Not a field-party material. Optimise the <em>Expedition Station</em> instead: send 10&times; the listed firepower. If you run expeditions continuously across several bases this stops being a constraint entirely.",
    conf: "High"
  },
  {
    name: "Ancient Civilization Core",
    tags: ["ancient", "cannot-buy", "must-leave", "raid"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "Expedition Station — <strong>one per base, multiple bases stack</strong>. The Ancient Relic Recycler converts World Tree Relics 1–5." },
    world: "Raid drops (Ultra raids = 10 guaranteed). Expeditions: Astral Frost 1, Sunreach Isle 3–4, Forbidden Area 6–9. World Tree chests.",
    party: "<strong>If you run expeditions constantly, this is not a bottleneck</strong> — Sunreach Isle alone is ~3.5 cores/hour per station, and stations stack across bases. Raid only for the cosmetics and eggs.",
    conf: "High"
  },
  {
    name: "Ancient Technology Points (ATP)",
    tags: ["ancient", "cannot-buy", "currency", "finite"],
    buy: { status: "no", detail: "<strong>No vendor accepts or sells ATP.</strong> Spent only in the Technology tree." },
    base: { status: "no", detail: "Not producible." },
    world: "Tower bosses, Alpha bosses, and one-time consumables. <strong>Each source pays out once.</strong>",
    party: "N/A — a checklist, not a farm. Gates Wing Pack (9), Ancient Hatchery (8), Soralite Quarry (7), Triple Jump Boots (6).",
    conf: "High"
  },

  /* ---------- 1.0 NEW ORES ---------- */
  {
    name: "Soralite <span class=\"new\">1.0</span>",
    tags: ["ore", "cannot-buy", "must-leave", "new-10"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "partial", detail: "Soralite Quarry structure (Tech, 7 ATP). Throughput is slow — verify against your own numbers." },
    world: "<strong>Sunreach Islands only.</strong> The 5-stop loop yields <strong>1,200–1,600 raw ore in 10–12 minutes</strong> (~40 per node), and nodes respawn on a <strong>30-minute timer</strong>. See the <a href=\"world-farming.html\">full route</a>. Jetragon 100%. Pierdon Cryst 100%.",
    party: "Requires the <strong>Plasma Multicutter</strong> (Tech 54) to mine at all. <strong>Not a bottleneck</strong> — one loop covers several endgame crafts. Travel efficiency matters more than mining speed.",
    conf: "High"
  },
  {
    name: "Paloxite <span class=\"new\">1.0</span>",
    tags: ["ore", "cannot-buy", "must-leave", "new-10"],
    buy: { status: "no", detail: "No vendor row. The rarest mining resource in 1.0." },
    base: { status: "no", detail: "Cannot be node-farmed at a base — World Tree region only." },
    world: "<strong>World Tree region exclusively.</strong> Three clusters: <code>-1560, 1510</code> Dusty Ravine (3 tight nodes by the FT point — best single stop) &middot; <code>-1710, 1535</code> Remnant Riverside (3 + scattered extras on the exit paths) &middot; <code>-1800, 1465</code> Gilded City Ruins (<strong>6</strong>, two trios close enough to run as one route).",
    party: "<strong>Crystals despawn on proximity without the Holy Water buff — and your <em>Pal’s</em> proximity triggers it too</strong>, so a Pal running ahead can wipe the node. Window is <strong>30–60s</strong>. Better: a Pal with a <strong>World Tree passive (Dimensional Leap or Hermit Sage)</strong> gives <strong>permanent</strong> protection instead. Plasma Multicutter mandatory (and doubles yield). Bring <strong>Dandilord</strong> for toxic gas and <strong>Lunaris</strong> for weight.",
    conf: "High"
  },
  {
    name: "World Tree Holy Water <span class=\"new\">1.0</span>",
    tags: ["cannot-buy", "new-10", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Large Fishing Pond</strong> (Tech 69) passively yields it between sessions — added/buffed in patch 1.0.3." },
    world: "<strong>Alluvion Lakefront kill-loop</strong> <code>-1638, 1340</code> — reported <strong>500+ in 10–15 min</strong>. World Tree Pals Lv70+ drop 1–3 at 50% (Starryon Primo, Shaolong, Orserk, Snock Lux); Teafant Springs give 5–10 guaranteed and recharge. Also fishing 43–71/catch; Expedition World Tree (Hard) 32–38; alpha bosses 20–30 at 100%.",
    party: "<strong>The one route where a drop-boosting party is the whole point.</strong> Match the booster to the species: Katress/Blazehowl Noct for Starryon Primo, Fenglope Lux for Shaolong, Menasting for Orserk and Snock Lux. See <a href=\"world-farming.html\">Template E</a>.",
    conf: "High"
  },
  {
    name: "Chromite",
    tags: ["ore", "cannot-buy", "must-leave"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "no", detail: "Buried deposits — base Pals will not mine them." },
    world: "Feybreak Island. Best spot: the cave at <code>-912, -1318</code> — 4 deposits and <strong>no Alpha kill required</strong>. Dark Island Supply 30–40. Expedition Dark Island 30–50. Silvegis 2–3, 100%.",
    party: "<strong>Bring Smokie</strong> — its partner skill reveals buried deposits, replacing the Metal Detector and freeing your accessory slot.",
    conf: "High"
  },

  /* ---------- CLASSIC ORES / NODES ---------- */
  {
    name: "Ore",
    tags: ["ore", "base-ok"],
    buy: { status: "poor", detail: "Wandering Merchant 100g — <strong>stock capped at 20</strong>. A rounding error at Pal Metal Ingot scale (4 Ore each)." },
    base: { status: "yes", detail: "Dedicated mining base. Best miner: <strong>Aegidron</strong> (Mining Lv8, World Tree ~Lv79). Add an Ore Mining Site II plus the <em>Pickaxe and Helmet</em> structure (Tech 30)." },
    world: "Ore+Coal base spot <code>188, -37</code> / <code>189, -38</code> (Verdant Brook). Ore+Sulfur field <code>-345, -205</code> (Bamboo Groves).",
    party: "<strong>Digtoise</strong> — the Drill Crusher partner skill raises ore mining efficiency by <strong>800–2000%</strong> (skill Lv1&rarr;5). Nothing else is close for hand-mining.",
    conf: "High"
  },
  {
    name: "Coal",
    tags: ["ore", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "Node base. <code>188, -37</code> (ore+coal, raid-defensible) or <code>-36, -379</code> (coal+sulfur, next to a fast-travel point)." },
    world: "Expedition Desert: 20–40 guaranteed. Blazamut / Blazamut Ryu: 10 each, 100%.",
    party: "Digtoise for hand-mining. Otherwise let the base do it — coal is a pure automation material.",
    conf: "High"
  },
  {
    name: "Sulfur",
    tags: ["ore", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row. Gates all gunpowder, all ammo, and Polymer." },
    base: { status: "yes", detail: "Sulfur node base: the volcano peak behind the Tower of the Brothers of the Eternal Pyre <code>-594, -525</code> (fast-travel point nearby), or <code>-36, -379</code>, or <code>-252, -462</code>." },
    world: "Expedition Volcano: 20–40 guaranteed. Pierdon: 4–5, 100%.",
    party: "Base-automate it. If hand-mining, Digtoise plus heat-resistant armour for the volcano routes.",
    conf: "High"
  },
  {
    name: "Pure Quartz",
    tags: ["ore", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "Astral Mountain <code>-212, 249</code> — 9+ nodes inside one base radius. The best quartz base in the game." },
    world: "Expedition Snow: 20–40. Pierdon Cryst: 4–5, 100%.",
    party: "Digtoise plus cold-resistant armour. It feeds Pal Metal Ingot and Soralite Ingot, so build the base rather than hand-farming.",
    conf: "High"
  },
  {
    name: "Paldium Fragment",
    tags: ["base-ok"],
    buy: { status: "yes", detail: "Wandering Merchant <strong>70g, uncapped</strong> — a legitimate gold sink at Lv80. Old 0.1.x guides quoting 20g are wrong for 1.0." },
    base: { status: "yes", detail: "Blue nodes at most base sites; also via the Crusher." },
    world: "Freely respawning nodes everywhere. Rarely the bottleneck.",
    party: "None needed. Buy it if you are gold-rich and time-poor.",
    conf: "High"
  },

  /* ---------- CRAFT-ONLY, BASE AUTOMATABLE ---------- */
  {
    name: "Ingot",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row. Feeds 272 recipes." },
    base: { status: "yes", detail: "<strong>Craft only: 2 Ore.</strong> Furnace plus a Kindling Pal. Fully automatable." },
    world: "Bushi / Bushi Noct drop 2–3 at 100% — irrelevant next to a furnace line.",
    party: "None. This is a base problem, not a field problem.",
    conf: "High"
  },
  {
    name: "Refined Ingot",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft only: 2 Ore + 2 Coal.</strong> Build the ore+coal base at <code>188, -37</code> and this line never stops." },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Pal Metal Ingot",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft only: 4 Ore + 1 Pure Quartz + 2 Paldium.</strong> 50,000 work — needs a serious Kindling and Handiwork roster." },
    world: "—",
    party: "None. Kindling: Renjishi (Lv8) or Jormuntide Ignis (Lv7).",
    conf: "High"
  },
  {
    name: "Soralite Ingot <span class=\"new\">1.0</span>",
    tags: ["craft", "cannot-buy", "base-ok", "new-10"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft only: 2 Soralite + 2 Pure Quartz.</strong> Ancient Furnace, Tech 66 (3 ATP). Feeds 59 recipes including AI Cores and Ancient Armor — an AI Core alone eats <strong>10</strong>." },
    world: "—",
    party: "None at base — but the Soralite input is a Sunreach Isles field trip. See the Soralite row.",
    conf: "High"
  },
  {
    name: "Paloxite Ingot <span class=\"new\">1.0</span>",
    tags: ["craft", "cannot-buy", "base-ok", "new-10"],
    buy: { status: "no", detail: "No vendor row. The top-tier alloy." },
    base: { status: "yes", detail: "<strong>Craft only: 1 Soralite + 2 Paloxite + 1 World Tree Holy Water.</strong> Ancient Furnace, Tech 74 (4 ATP). The top-tier alloy — 22 recipes: Beam Launcher, Plasma Rifle, Ancient Armor, saddles." },
    world: "—",
    party: "None at base — but every input is a World Tree or Sunreach field trip.",
    conf: "High"
  },
  {
    name: "Carbon Fiber",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft only: 5 Charcoal + 1 Flame Organ</strong> (Tech 35). Charcoal from wood; Flame Organ from a Flambelle / Rooby / Kelpsea Ignis ranch. <strong>100% automatable.</strong>" },
    world: "Shadowbeak drops 2–3 at 100% (World Tree, Lv80).",
    party: "None. Build the ranch instead.",
    conf: "High"
  },
  {
    name: "Polymer",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft only: 2 HQ Pal Oil + 1 Sulfur</strong> (Tech 33). A Dumud ranch plus a sulfur base makes this <strong>fully automatable</strong>." },
    world: "Fire Cult enemies drop it at roughly 20%.",
    party: "None. This is the classic material people farm by hand for no reason.",
    conf: "High"
  },
  {
    name: "Cement",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft: 20 Stone + 1 Bone + 1 Aquatic Pal Fluids &rarr; 10 Cement.</strong> Bone from a Cawgnito/Sootseer ranch, Fluids from a Kelpsea ranch. A closed loop." },
    world: "Salvage from junk piles.",
    party: "None.",
    conf: "High"
  },

  /* ---------- RANCH MATERIALS ---------- */
  {
    name: "Honey",
    tags: ["ranch", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "<strong>No vendor row</strong> — and Honey gates every Cake recipe, so it gates breeding." },
    base: { status: "yes", detail: "<strong>Beegarde ranch</strong> — 1 at rank 1, 1–5 at rank 5. Effectively mandatory for a breeding base." },
    world: "Elizabee 5 (100%). Warsect 3–4.",
    party: "None. Put four condensed Beegarde on a ranch and forget about it.",
    conf: "High"
  },
  {
    name: "High Quality Pal Oil",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "300g at six vendors — poor value when Polymer eats 2 per craft." },
    base: { status: "yes", detail: "<strong>Dumud ranch.</strong> Dumud Gild rolls 80% HQ Pal Oil / 20% Gold Coin — a dual-purpose ranch slot." },
    world: "Mammorest ~7.5 per kill. Expedition Desert (Hard) 10–20 guaranteed.",
    party: "If you are killing Mammorest, bring <strong>Blazehowl</strong> — Grass Pals drop 40–80% more items.",
    conf: "High"
  },
  {
    name: "Venom Gland",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "300g, uncapped, six vendors." },
    base: { status: "yes", detail: "<strong>Caprity Noct</strong> or <strong>Depresso</strong> ranch, 1–5 at rank 5." },
    world: "Menasting ~7.5 per kill.",
    party: "Ranch it. If you insist on farming Menasting, stack the matching-element drop booster.",
    conf: "High"
  },
  {
    name: "Leather",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "200g at settlement vendors — a convenience tax at Lv80." },
    base: { status: "yes", detail: "<strong>Surfent ranch.</strong>" },
    world: "Common drop from most beast Pals.",
    party: "None.",
    conf: "High"
  },
  {
    name: "Wool",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "200g." },
    base: { status: "yes", detail: "<strong>Cremis</strong> or <strong>Melpaca</strong> (2 &rarr; 2–6, the best rate) beats Lamball (1 &rarr; 1–5)." },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "High Quality Cloth",
    tags: ["ranch", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Sibelyx Primo</strong> (1–2 &rarr; 1–6) or Sibelyx (1 &rarr; 1–5). <strong>Drops finished cloth — skips the 10-Wool conversion entirely.</strong>" },
    world: "—",
    party: "None. One of the highest-value ranch slots in the game.",
    conf: "High"
  },
  {
    name: "Milk",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "200g." },
    base: { status: "yes", detail: "<strong>Mozzarina ranch</strong> (1–2 &rarr; 2–6). A Cake input." },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Egg",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "200g." },
    base: { status: "yes", detail: "<strong>Chikipi ranch</strong> (1–2 &rarr; 2–6). A Cake input." },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Bone",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "200g." },
    base: { status: "yes", detail: "<strong>Cawgnito</strong> or <strong>Sootseer</strong> ranch. Needed for Cement." },
    world: "Skeletal Pals and dungeon drops.",
    party: "None.",
    conf: "High"
  },
  {
    name: "Flame / Electric / Ice Organ",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "300g each. Relevant because Carbon Fiber needs Flame Organ." },
    base: { status: "yes", detail: "<strong>Flame:</strong> Flambelle, Rooby, Kelpsea Ignis. <strong>Electric:</strong> Sparkit. <strong>Ice:</strong> Foxcicle, Mau Cryst." },
    world: "Bulk drops from any Pal of the matching element.",
    party: "The matching-element drop booster if you are killing (e.g. Menasting for Electric).",
    conf: "High"
  },
  {
    name: "Aquatic Pal Fluids",
    tags: ["ranch", "base-ok"],
    buy: { status: "poor", detail: "300g at the Wandering Merchant." },
    base: { status: "yes", detail: "<strong>Kelpsea ranch.</strong> A Cement input." },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Mushroom / Cavern Mushroom",
    tags: ["ranch", "base-ok"],
    buy: { status: "rotate", detail: "Mushroom 300g from <strong>Caravan Merchant 14 only</strong> — one of 25 rotating lists. Not a supply line." },
    base: { status: "yes", detail: "<strong>Shroomer ranch</strong> — 66.7% Mushroom / 33.3% Cavern Mushroom. The only reliable source." },
    world: "Cave gathering.",
    party: "None.",
    conf: "Medium"
  },
  {
    name: "Gold Coin",
    tags: ["ranch", "currency", "base-ok"],
    buy: { status: "no", detail: "It <em>is</em> the currency." },
    base: { status: "yes", detail: "<strong>Mau ranch</strong> (10 &rarr; 10–50). Dumud Gild rolls 20% Gold Coin (100 &rarr; 100–500)." },
    world: "<strong>The Bounty Officer converts 1 Successful Bounty Token into ~2,000 gold.</strong> Bounties are a gold <em>faucet</em>, not a sink.",
    party: "Bounty hunting beats selling loot if you are gold-starved.",
    conf: "High"
  },
  {
    name: "Seeds (Wheat / Tomato / Lettuce / Carrot / Onion / Potato)",
    tags: ["ranch", "base-ok"],
    buy: { status: "yes", detail: "Berry 10g, Wheat 20g, Lettuce 40g at settlement vendors. Cheap — just buy the starter stock." },
    base: { status: "yes", detail: "<strong>Vaelet ranch</strong> rolls all six seed types (weighted random). Plantations are self-sustaining once seeded." },
    world: "Drop from the matching Grass Pals.",
    party: "None. A plantation needs Planting &rarr; Watering &rarr; Gathering &rarr; Transporting Pals in rotation.",
    conf: "High"
  },

  /* ---------- DROP-ONLY / CURRENCY ---------- */
  {
    name: "Legendary Schematics",
    tags: ["cannot-buy", "must-leave", "finite"],
    buy: { status: "poor", detail: "<strong>Only 6 of ~121 are buyable:</strong> 3 from the Arena (Battle Tickets, 600–1,500) and 2 from the Medal Merchant (Lily's Spear 600 / Enhanced 840 Dog Coin). The rest are drop-only." },
    base: { status: "no", detail: "Not producible — but the <strong>Drafting Table merges 5 lower-tier schematics into 1 of the next tier</strong>." },
    world: "<strong>Lv60 Oil Rig near Fabre Island</strong> — treat it as a <em>chest</em> farm, not a boss kill. The Greater Chest holds the Legendary Flamethrower, Grenade Launcher, Guided Missile Launcher, Gatling Gun and SMG. ~1% per chest is roughly 80 runs for a specific blueprint; the 5:1 merge cuts that to about 32.",
    party: "<strong>Oil rigs do not drop legendary armour.</strong> Armour comes from Sakurajima-style dungeons at ~0.057% and from Alpha bosses.",
    conf: "Medium-High"
  },
  {
    name: "Successful Bounty Token",
    tags: ["cannot-buy", "must-leave", "currency"],
    buy: { status: "no", detail: "A currency, not merchandise." },
    base: { status: "no", detail: "Not producible." },
    world: "Defeat or capture wanted-criminal NPCs. Targets respawn roughly hourly. 1 token early, up to 5 for Ram at Lv59.",
    party: "Buys the <strong>work and base implants</strong> (Artisan, Musclehead, Motivational Leader, Stronghold Strategist, Vanguard, Burly Body, Wellness Watcher) at 15 each, and stat fruit at 25 — the cheapest stat-fruit route in the game.",
    conf: "High"
  },
  {
    name: "Dog Coin",
    tags: ["cannot-buy", "must-leave", "currency"],
    buy: { status: "no", detail: "A currency." },
    base: { status: "partial", detail: "Foot of the World Tree expeditions return Dog Coin." },
    world: "Drops from <strong>Mimog</strong>.",
    party: "Buys all 12 <strong>Applied Handbooks</strong> (300 each, a permanent +1 work suitability), plus Accessory Boxes, elixirs and stat fruit.",
    conf: "High"
  },
  {
    name: "Battle Ticket",
    tags: ["cannot-buy", "must-leave", "currency"],
    buy: { status: "no", detail: "A currency." },
    base: { status: "no", detail: "Not producible." },
    world: "Arena rewards only. The Arena sits at <code>631, 16</code>.",
    party: "Buys the <strong>combat and mobility implants</strong> (Infinite Stamina, Runner, Ace Swimmer, Serenity, Noble, Reload Master, Healing Coach) at 50 each. <strong>No overlap with the Bounty Officer list</strong> — you need both currencies for a full passive toolkit.",
    conf: "Medium-High"
  },
  {
    name: "Pal Souls / Giant Pal Souls",
    tags: ["cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "Expedition Station — Foot of the World Tree routes return Giant Pal Souls. The Pal Condenser converts duplicates." },
    world: "Dungeon chests and Alpha drops.",
    party: "<strong>Nitemary</strong> has a partner skill that specifically boosts Pal Soul drops.",
    conf: "Medium"
  },

  /* ---------- THE AI CORE CHAIN (the real endgame bottleneck) ---------- */
  {
    name: "Hexolite Quartz",
    tags: ["ore", "cannot-buy", "must-leave"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "no", detail: "Feybreak Island only — not a base-node resource." },
    world: "<strong>Feybreak Island, south-west of Mount Obsidian.</strong> Densest cluster at <code>-1062, -1426</code> — three large clusters together, with an NPC standing between them as a landmark. Rainbow-coloured jagged nodes on beaches and grassland.",
    party: "Template B (mining). Same island as Chromite — <strong>run both on one trip</strong> and bring Smokie for the buried Chromite.",
    conf: "High"
  },
  {
    name: "Cryogenic Coolant",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft: 1 Aquatic Pal Fluids + 1 Ice Organ</strong> (Tech 31). Kelpsea ranch + Foxcicle/Mau Cryst ranch. <strong>Both inputs are ranch items — fully automatable.</strong>" },
    world: "—",
    party: "None. Two ranch slots solve this permanently.",
    conf: "High"
  },
  {
    name: "Corrosive Solvent",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft: 1 Venom Gland + 1 Sulfur</strong> (Tech 37, any workbench). Caprity Noct ranch + sulfur node base. <strong>Fully automatable.</strong>" },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Bio Battery",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row. Consumed 50 at a time by endgame weapons and 1 per ammo craft." },
    base: { status: "yes", detail: "<strong>Craft: 1 Electric Organ + 1 Refined Ingot + 1 Carbon Fiber</strong> (Tech 44, Production Assembly Line). Sparkit ranch + ore/coal base + Flambelle ranch. <strong>Fully automatable — build this line early.</strong>" },
    world: "—",
    party: "None.",
    conf: "High"
  },
  {
    name: "Thermal Core",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "partial", detail: "<strong>Craft: 4 Flame Organ + 8 Coal + 2 Corrosive Solvent + 2 Hexolite</strong> (Tech 59). Everything automates except Hexolite, which is a Feybreak field trip." },
    world: "<strong>Aegidron drops 1–2 at 100% per kill</strong> — and Aegidron is also the best Mining Pal in the game, so you are farming it anyway.",
    party: "Kill Aegidron in the World Tree region while you are there for Paloxite. Two birds.",
    conf: "High"
  },
  {
    name: "Gunpowder",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row (though finished ammo <em>is</em> buyable, 40&ndash;330g)." },
    base: { status: "yes", detail: "<strong>Craft: 2 Charcoal + 1 Sulfur &rarr; 1</strong> (Tech 21, High Quality Workbench). Charcoal from wood, Sulfur from a node base &mdash; <strong>fully automatable</strong>, and it is what makes Tech 68&ndash;72 ammo effectively free." },
    world: "&mdash;",
    party: "None. Every gunpowder-based round costs you nothing scarce.",
    conf: "High"
  },
  {
    name: "Circuit Board",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft: 2 Pure Quartz + 1 Polymer</strong> (Tech 35, Production Assembly Line). Quartz base at <code>-212, 249</code> plus the Polymer loop &mdash; <strong>fully automatable</strong>." },
    world: "&mdash;",
    party: "None. Feeds Computers and the Electric Furnace.",
    conf: "High"
  },
  {
    name: "Crude Oil",
    tags: ["cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Oil Extractor</strong> on an oil field. The Sakurajima plateau <code>-646, 270</code> has two, plus coal and sulfur nearby. 1.0.3 cut extractor build costs and raised extraction speed." },
    world: "Oil rigs.",
    party: "None. Set the extractors and forget them.",
    conf: "High"
  },
  {
    name: "Plasteel",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row." },
    base: { status: "yes", detail: "<strong>Craft: 5 Crude Oil + 5 Paldium Fragment + 10 Ore</strong> (Tech 50). Needs an <strong>Electric Furnace</strong> or Gigantic Furnace &mdash; a standard furnace will not do it. <strong>Ore-hungry: 10 per unit.</strong>" },
    world: "&mdash;",
    party: "None &mdash; but this is the recipe that keeps a serious ore base worth running at Lv80.",
    conf: "High"
  },
  {
    name: "Computer",
    tags: ["craft", "cannot-buy", "base-ok"],
    buy: { status: "no", detail: "No vendor row. Five needed per AI Core." },
    base: { status: "yes", detail: "<strong>Craft: 2 Circuit Board + 3 Plasteel + 2 Bio Battery + 2 Carbon Fiber</strong> (Tech 50). <strong>Workload 2,500.</strong> Every input is automatable, so this whole tier runs itself once the lines exist. <span class=\"conf\">Confirmed in-game.</span>" },
    world: "&mdash;",
    party: "None.",
    conf: "High"
  },
  {
    name: "AI Core",
    tags: ["craft", "cannot-buy", "ancient"],
    buy: { status: "no", detail: "No vendor row. <strong>The real endgame bottleneck</strong> — every Lv67+ weapon needs 3–10." },
    base: { status: "partial", detail: "<strong>Craft: 5 Computer + 10 Soralite Ingot + 2 Thermal Core + 1 Ancient Civilization Core</strong> (Tech 67, Advanced Workshop). <strong>Workload 50,000.</strong> <span class=\"conf\">Confirmed in-game.</span>" },
    world: "You are not just paying this recipe — you are paying the whole chain beneath it. Ancient Civilization Cores come from raids and expeditions; Soralite from Sunreach; Hexolite from Feybreak.",
    party: "See the <a href=\"endgame-demand.html\">worked example</a> — 10 AI Cores for one Beam Launcher costs 40 Hexolite, 160 Coal and 10 Ancient Civilization Cores before you touch the weapon recipe itself.",
    conf: "High"
  }
];
