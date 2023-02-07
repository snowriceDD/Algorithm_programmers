function solution(brown, yellow) {
    let arr = [];
    // let ans = [(arr[arr.length/2]+2), (arr[arr.length/2-1]+2)].sort((a, b) => b - a);
    let ans = [];
    for (let i = 1; i <= yellow; i++) {
        yellow%i === 0 ? arr.push(i) : null;
    }
    if (arr.length === 1) {return [3, 3]};
    
    for (let j = 0; j < arr.length/2; j++) {
        if (brown === (arr[j] + 2) * (arr[(arr.length-1)-j] + 2) - yellow) {
            ans.push(arr[(arr.length-1)-j] + 2);
            ans.push(arr[j] + 2);
        }     
    } 
    return ans;
}