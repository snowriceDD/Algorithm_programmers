const solution = (ms, pa) => ms.map((e, i) => e.slice(pa[i][0], pa[i][1]+1)).join('')