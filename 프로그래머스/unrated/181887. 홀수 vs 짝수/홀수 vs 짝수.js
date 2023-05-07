const solution = nl => {
    let zzak = [];
    let hole = [];
    nl.map((e, i) => i % 2 === 0 ? zzak.push(e) : hole.push(e));
    let zr = zzak.reduce((a, c) => a + c)
    let hr = hole.reduce((a, c) => a + c)
    return zr > hr ? zr : hr
}