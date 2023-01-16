function solution(n) {
    let one = 0;
    let two = 0;
    let a = n.toString(2).split('').map((e) => e == '1'? one+=1 : null);
    let vl = false;
    let i = 1;
    while (!vl) {
        two = 0;
        (n+i).toString(2).split('').map((e) => e == '1' ? two+=1 : null);
        one == two ? vl = true : i++;
    }
return n+i;
}