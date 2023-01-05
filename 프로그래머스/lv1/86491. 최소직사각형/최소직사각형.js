function solution(sizes) {
let arr = [];
let arr2 = [];
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b)=>b-a);
        arr.push(sizes[i][0]);
        arr2.push(sizes[i][1]);
    }
    return Math.max(...arr) * Math.max(...arr2);
}