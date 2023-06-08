function solution(arr) {
    let front = [...arr].findIndex((e)=>e===2);
    let rear = arr.length - ([...arr].reverse().findIndex((e) => e === 2));
    
    if (front === -1) {return [-1]}
    return arr.slice(front, rear)
}