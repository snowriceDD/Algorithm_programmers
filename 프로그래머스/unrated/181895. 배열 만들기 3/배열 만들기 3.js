const solution = (arr, inter) => [...arr.slice(inter[0][0], inter[0][1]+1), ...arr.slice(inter[1][0], inter[1][1]+1)]