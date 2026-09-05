# Paloxite route derivation

Node positions were detected from `assets/paloxite-map.png` by colour, then a farming
circuit was computed over them.

| Step | Script | Output |
|---|---|---|
| Detect the red pickaxe markers, splitting overlapping icons by area | `detect.py` | `nodes-detected.txt` (76 points) |
| Nearest-neighbour tour, 2-opt, then drop highest-detour nodes to 80% | `route.py` | `route.json` |
| Emit the SVG overlay (Catmull-Rom smoothed, evenly spaced arrows) | `render_overlay.py` | inline SVG in `world-tree-team.html` |

**Result:** 61 of 76 nodes (80%) for 71% of the full-sweep distance.

**Caveats.** Detection is colour-based, not game data — a few markers in the dense volcano
cluster were overlapping icons split by area, so the count may be off by two or three. The
route is a straight-line flight path and ignores terrain.

The dropped nodes are isolated rather than clustered: median nearest-neighbour distance 46px
against 22px for nodes kept on the circuit.
