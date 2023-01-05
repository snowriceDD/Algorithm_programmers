function solution(number, limit, power) {
    let res = 0;
    for (let i = 1; i <= number; i++) {
        let res2 = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            i%j === 0 ? res2 += (1) : null;
        }
        Math.sqrt(i) % 1 !== 0 ? res2+=res2 : res2+=res2-1
        res2 > limit ? res += (power) : res += (res2);
    }
    return res;
}