function solution(n, control) {
    let cs = control.split('');
    cs.forEach((e)=>{
        if (e === "w") {n+=1}
        if (e === "s") {n-=1}
        if (e === "d") {n+=10}
        if (e === "a") {n-=10}
    })
    return n
}