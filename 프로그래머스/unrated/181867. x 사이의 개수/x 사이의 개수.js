function solution(myString) {
    let ans = [];
    let i = 0;
    myString.split('').map((v)=>{
        if (v === 'x') {
            ans.push(i);
            i = 0;
        } else {i+=1}
    })
    ans.push(i)
    return ans
}