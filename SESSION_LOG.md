# Session Log

Running handoff notes for resuming work. Newest session at the top.

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
