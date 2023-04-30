function solution(numbers, n) {
    let ans = 0;
    let i = 0;
    while(true) {
        ans+=numbers[i];
        i+=1;
        if (ans > n) {
            return ans;
            break;
        }
    }
}