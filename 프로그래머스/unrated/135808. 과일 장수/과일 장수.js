function solution(k, m, score) {
    let result = 0;
    let arr = [];
    let arrL = arr.length;
    let box = Math.floor(score.length/m);
    let sortScore = score.sort((a, b) => b - a);
    for (let i = m-1 ; i < score.length ; i += m) {
        result += sortScore[i]*m
    }
    return result;  
}