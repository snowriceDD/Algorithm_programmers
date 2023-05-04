const solution = nl => {
    let 짝 = [];
    let 홀 = [];
    nl.map((e) => e % 2 === 0 ? 홀.push(e) : 짝.push(e));
    return parseInt(짝.join('')) + parseInt(홀.join(''))
}