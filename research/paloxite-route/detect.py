# -*- coding: utf-8 -*-
"""Detect Paloxite markers (red) and fast-travel points (white) with blob splitting."""
import os, numpy as np
from PIL import Image

SP = r"C:\Users\matth\AppData\Local\Temp\claude\C--Users-matth-Desktop-AI-Palworld\b3bf64b6-31f0-4cd5-b75e-4f43310045cf\scratchpad"
im = Image.open(os.path.join(SP, 'paloxite_map.png')).convert('RGB')
a = np.asarray(im).astype(int)
H, W, _ = a.shape
R, G, B = a[:, :, 0], a[:, :, 1], a[:, :, 2]
mx = a.max(axis=2); mn = a.min(axis=2)

red   = (R > 150) & (G < 120) & (B < 110) & (R - G > 70) & (R - B > 60)
white = (mn > 175) & ((mx - mn) < 45)

def components(mask, min_px=20):
    seen = np.zeros_like(mask, dtype=bool)
    out = []
    ys, xs = np.nonzero(mask)
    for y0, x0 in zip(ys, xs):
        if seen[y0, x0]:
            continue
        stack = [(y0, x0)]; seen[y0, x0] = True; pix = []
        while stack:
            y, x = stack.pop(); pix.append((y, x))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < H and 0 <= nx < W and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True; stack.append((ny, nx))
        if len(pix) >= min_px:
            out.append(np.array(pix))
    return out

def kmeans(pts, k, iters=40):
    """pts: Nx2 array of (y,x). Returns k centres."""
    rng = np.random.default_rng(7)
    c = pts[rng.choice(len(pts), k, replace=False)].astype(float)
    for _ in range(iters):
        d = ((pts[:, None, :] - c[None, :, :]) ** 2).sum(axis=2)
        lab = d.argmin(axis=1)
        for j in range(k):
            m = lab == j
            if m.any():
                c[j] = pts[m].mean(axis=0)
    return c

comps = components(red)
areas = sorted(len(c) for c in comps)
unit = float(np.median([len(c) for c in comps if len(c) >= 60]))
print("red components:", len(comps), "| median single-icon area:", unit)

nodes = []
for c in comps:
    k = max(1, int(round(len(c) / unit)))
    if k == 1 or len(c) < 2 * 0.7 * unit:
        nodes.append((c[:, 1].mean(), c[:, 0].mean()))
    else:
        for cy, cx in kmeans(c.astype(float), k):
            nodes.append((cx, cy))

print("paloxite nodes after splitting:", len(nodes))

wcomps = components(white, min_px=60)
ft = [(c[:, 1].mean(), c[:, 0].mean(), len(c)) for c in wcomps]
ft = [f for f in ft if f[2] >= 80]
print("white markers (fast travel / POI):", len(ft))

with open(os.path.join(SP, 'nodes.txt'), 'w') as f:
    for x, y in sorted(nodes, key=lambda p: (p[1], p[0])):
        f.write(f"{x:.1f}\t{y:.1f}\n")
with open(os.path.join(SP, 'ft.txt'), 'w') as f:
    for x, y, n in sorted(ft, key=lambda p: (p[1], p[0])):
        f.write(f"{x:.1f}\t{y:.1f}\t{n}\n")

print("\nfast-travel-ish markers:")
for x, y, n in sorted(ft, key=lambda p: (p[1], p[0])):
    print(f"   x={x:6.1f} y={y:6.1f} px={n}")
