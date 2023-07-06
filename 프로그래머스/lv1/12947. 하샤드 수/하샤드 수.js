function solution(x) {
    let reduceNum = String(x).split('').reduce((a, c) => Number(a) + Number(c))
    return x%reduceNum === 0 ? true:false
}