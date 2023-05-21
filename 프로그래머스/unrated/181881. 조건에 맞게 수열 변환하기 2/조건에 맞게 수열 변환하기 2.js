const solution = (arr) => {
    let ans = 0;
    let reArr = [...arr];
    let compariArr = [...arr];
    while (true) {
        reArr = reArr.map((v) => {
            if ((v >= 50) && (v%2 === 0)) {
                return v / 2;
            } else if ((v < 50) && (v % 2 !== 0)) {
                return v * 2 + 1
            } else {
                return v
            }
        })
        if (JSON.stringify(reArr) === JSON.stringify(compariArr)) {
            break;
        }
        compariArr = reArr;
        ans += 1;
    }
    return ans;
}