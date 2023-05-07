const solution = nl => {
    let zzak = 0;
    zzak += [...nl].reduce((a, c, i) => (i+1) % 2 === 0 ? a + c : a) + nl[0]
    let hole = 0;
    hole += ([...nl].reduce((a, c, i) => (i) % 2 !== 0 ? a + c : a) - (nl[0]))
    console.log(zzak, hole)
    return zzak >= hole ? zzak : hole
}