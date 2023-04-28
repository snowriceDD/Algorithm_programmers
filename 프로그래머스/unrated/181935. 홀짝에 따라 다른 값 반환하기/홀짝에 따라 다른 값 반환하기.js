function solution(n) {
    if (n%2 !== 0) {
        let arr1 = [1];
        if (n > 2) {
            for (let i = 3; i <= n; i+=1) {
                i % 2 !== 0 ? arr1.push(i) : null;
            }}
        return arr1.reduce((a, c) => a + c)
    }
    if (n%2 === 0) {
        let arr2 = [4];
        if (n > 3) {
            for (let j = 4; j <= n; j+=1) {
                j % 2 === 0 ? arr2.push(j) : null;
        }}
        console.log(arr2)
        return arr2.reduce((a, c) => a + c**2)
    }
    
}