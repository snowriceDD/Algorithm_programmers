function solution(numlist, n) {
    let arr = [];
    let res = [];
    
    numlist.map((e) => {
        if(n-e > 0) { 
            arr.push([n-e, e]);
        } else {
            arr.push([(n-e)*-1, e]);
        }
    })
    arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]).map((e) => res.push(e[1]))
    return res;
}