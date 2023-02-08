function solution(arr) {
    arr.sort((a, b) => b - a);
    let maxNum = arr[0];
    let bln = false;
    let ansArr = [];
    
    while(maxNum < 999999999999999999) {
        for (let i = 0; i < arr.length; i++) {
            if (maxNum % arr[i] === 0) {
                ansArr.push(arr[i]);
            }
        }   
        if (ansArr.length === arr.length) {
            return maxNum;
            break;
        } else {
            ansArr = [];
            maxNum += 1;
        }
        
    } 
}