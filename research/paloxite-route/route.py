# -*- coding: utf-8 -*-
"""Build a farming circuit that hits ~80% of the Paloxite nodes for minimum travel."""
import os, math, json
import numpy as np

SP = r"C:\Users\matth\AppData\Local\Temp\claude\C--Users-matth-Desktop-AI-Palworld\b3bf64b6-31f0-4cd5-b75e-4f43310045cf\scratchpad"
pts = [tuple(map(float, l.split('\t')[:2])) for l in open(os.path.join(SP, 'nodes.txt'))]
P = np.array(pts)
N = len(P)
D = np.sqrt(((P[:, None, :] - P[None, :, :]) ** 2).sum(axis=2))

def tour_len(t):
    return sum(D[t[i], t[(i + 1) % len(t)]] for i in range(len(t)))

def nearest_neighbour(start, idx):
    idx = list(idx)
    cur = start
    out = [cur]
    rem = set(idx) - {cur}
    while rem:
        nxt = min(rem, key=lambda j: D[cur, j])
        out.append(nxt); rem.discard(nxt); cur = nxt
    return out

def two_opt(t, rounds=60):
    t = t[:]
    n = len(t)
    improved = True
    it = 0
    while improved and it < rounds:
        improved = False; it += 1
        for i in range(n - 1):
            for k in range(i + 2, n):
                if i == 0 and k == n - 1:
                    continue
                a, b = t[i], t[i + 1]
                c, d = t[k], t[(k + 1) % n]
                delta = (D[a, c] + D[b, d]) - (D[a, b] + D[c, d])
                if delta < -1e-9:
                    t[i + 1:k + 1] = reversed(t[i + 1:k + 1])
                    improved = True
    return t

# full tour over everything, best of several starts
best = None
for s in range(0, N, max(1, N // 12)):
    t = two_opt(nearest_neighbour(s, range(N)))
    L = tour_len(t)
    if best is None or L < best[0]:
        best = (L, t)
full_len, full_tour = best
print(f"full tour over {N} nodes: {full_len:.0f} px")

# greedily drop the nodes that cost the most detour, until ~80% remain
target = int(round(N * 0.80))
tour = full_tour[:]
dropped = []
while len(tour) > target:
    n = len(tour)
    best_gain, best_i = None, None
    for i in range(n):
        prev, cur, nxt = tour[i - 1], tour[i], tour[(i + 1) % n]
        gain = D[prev, cur] + D[cur, nxt] - D[prev, nxt]
        if best_gain is None or gain > best_gain:
            best_gain, best_i = gain, i
    dropped.append(tour[best_i])
    tour.pop(best_i)
    if len(tour) % 5 == 0:
        tour = two_opt(tour, rounds=12)

tour = two_opt(tour, rounds=60)
kept_len = tour_len(tour)
print(f"kept {len(tour)}/{N} nodes ({len(tour)/N:.0%})  route {kept_len:.0f} px "
      f"({kept_len/full_len:.0%} of full-tour distance)")
print(f"efficiency: full = {full_len/N:.1f} px per node,  route = {kept_len/len(tour):.1f} px per node")

# rotate so the circuit starts at the north-west-most kept node (natural fast-travel entry)
start_i = min(range(len(tour)), key=lambda i: P[tour[i]][0] + P[tour[i]][1])
tour = tour[start_i:] + tour[:start_i]

# direction: run it clockwise for consistency
def signed_area(t):
    s = 0.0
    for i in range(len(t)):
        x1, y1 = P[t[i]]; x2, y2 = P[t[(i + 1) % len(t)]]
        s += x1 * y2 - x2 * y1
    return s / 2
if signed_area(tour) < 0:
    tour = [tour[0]] + tour[1:][::-1]

out = {
    "size": [846, 721],
    "total_nodes": N,
    "kept": [[round(float(P[i][0]), 1), round(float(P[i][1]), 1)] for i in tour],
    "skipped": [[round(float(P[i][0]), 1), round(float(P[i][1]), 1)] for i in dropped],
    "full_len": round(full_len), "route_len": round(kept_len),
}
json.dump(out, open(os.path.join(SP, 'route.json'), 'w'), indent=1)
print("\nwrote route.json  |  kept", len(out["kept"]), " skipped", len(out["skipped"]))
