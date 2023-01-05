const solution = (s) => {let res = s.split(' ').sort((a, b) => a - b);
                         return [res[0], res[res.length-1]].join(' ')}