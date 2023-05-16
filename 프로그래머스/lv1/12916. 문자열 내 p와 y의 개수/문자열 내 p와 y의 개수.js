function solution(s){
    let resp = 0;
    let resy = 0;
    s.split('').map((e) => {
        if (e.toLowerCase() === "p") {resp += 1}
        if (e.toLowerCase() === "y") {resy += 1}
    })
    return (resp === resy) ? true : false;
}