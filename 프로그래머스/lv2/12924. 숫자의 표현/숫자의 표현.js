function solution(n) {
    let count = 1;
        let k = 0;
        let l = 0;
    for (let i = 1; i < n/2+1; i++) {
        for (let j = 1; j < n/2+1; j++){
            if (k < n) {
                k += j+l;
            } else if (k == n) {
                count+=1;
                k = 0;
                l = i;
                break;
            } else if (k > n) {
                k = 0;
                l = i;
                break;
            }
        }
    }
    return (count)    
}