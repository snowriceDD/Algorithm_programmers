function solution(chicken) {
    var answer = 0;
    let chic = chicken;
    let coupon = chicken;
    while(chic/10 >= 1) {
        chic = chic/10;
        coupon -= chic;
        answer += chic;
        console.log(chic, coupon, answer)
    }
    
    return Math.round(answer);
}