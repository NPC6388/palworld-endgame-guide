# -*- coding: utf-8 -*-
"""Emit the SVG overlay markup for the Paloxite farming circuit."""
import os, json, math

SP = r"C:\Users\matth\AppData\Local\Temp\claude\C--Users-matth-Desktop-AI-Palworld\b3bf64b6-31f0-4cd5-b75e-4f43310045cf\scratchpad"
r = json.load(open(os.path.join(SP, 'route.json')))
W, H = r["size"]
kept, skipped = r["kept"], r["skipped"]

def catmull(points, closed=True, samples=14):
    """Smooth the polyline a little so the flight path reads as a path, not a zigzag."""
    pts = points[:]
    n = len(pts)
    out = []
    rng = range(n) if closed else range(n - 1)
    for i in rng:
        p0 = pts[(i - 1) % n]; p1 = pts[i]; p2 = pts[(i + 1) % n]; p3 = pts[(i + 2) % n]
        for s in range(samples):
            t = s / samples
            t2, t3 = t * t, t * t * t
            x = 0.5 * ((2*p1[0]) + (-p0[0]+p2[0])*t + (2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2 + (-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3)
            y = 0.5 * ((2*p1[1]) + (-p0[1]+p2[1])*t + (2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2 + (-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)
            out.append((x, y))
    out.append(out[0])
    return out

curve = catmull(kept)
d = "M " + " L ".join(f"{x:.1f} {y:.1f}" for x, y in curve) + " Z"

# direction arrows spaced evenly along the smoothed path
def arrows(curve, count=16, size=7.0):
    seg = []
    total = 0.0
    for i in range(len(curve) - 1):
        (x1, y1), (x2, y2) = curve[i], curve[i + 1]
        L = math.hypot(x2 - x1, y2 - y1)
        seg.append((total, total + L, x1, y1, x2, y2))
        total += L
    marks = []
    for k in range(count):
        target = total * (k + 0.5) / count
        for s0, s1, x1, y1, x2, y2 in seg:
            if s0 <= target <= s1 and s1 > s0:
                f = (target - s0) / (s1 - s0)
                px, py = x1 + (x2 - x1) * f, y1 + (y2 - y1) * f
                ang = math.degrees(math.atan2(y2 - y1, x2 - x1))
                marks.append((px, py, ang))
                break
    return marks

parts = []
parts.append(f'      <path class="pm-route" d="{d}"/>')
for px, py, ang in arrows(curve):
    parts.append(
        f'      <polygon class="pm-arrow" points="0,-5 11,0 0,5" '
        f'transform="translate({px:.1f},{py:.1f}) rotate({ang:.1f})"/>')

for x, y in skipped:
    parts.append(f'      <circle class="pm-skip" cx="{x:.1f}" cy="{y:.1f}" r="7"/>')
for x, y in kept:
    parts.append(f'      <circle class="pm-node" cx="{x:.1f}" cy="{y:.1f}" r="5.5"/>')

sx, sy = kept[0]
parts.append(f'      <circle class="pm-start" cx="{sx:.1f}" cy="{sy:.1f}" r="11"/>')
parts.append(f'      <text class="pm-startlabel" x="{sx:.1f}" y="{sy - 17:.1f}">START</text>')

svg = (f'    <svg class="pm-overlay" viewBox="0 0 {W} {H}" role="img" '
       f'aria-label="Paloxite farming circuit overlaid on the World Tree map: a single closed loop '
       f'visiting {len(kept)} of {len(kept)+len(skipped)} nodes, with {len(skipped)} outlying nodes '
       f'marked as skipped.">\n' + "\n".join(parts) + '\n    </svg>')

open(os.path.join(SP, 'overlay.svg.txt'), 'w', encoding='utf-8').write(svg)
print("overlay written:", len(svg), "chars |", len(kept), "kept,", len(skipped), "skipped")
