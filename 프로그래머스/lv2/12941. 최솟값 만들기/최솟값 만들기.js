function solution(A,B){
    let i = 0;
    let ans = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    while(i < A.length) {
        ans += A[i]*B[i];
        i++;
    }
    return ans;
}