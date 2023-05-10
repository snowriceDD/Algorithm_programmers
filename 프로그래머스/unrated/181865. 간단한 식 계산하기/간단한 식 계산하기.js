const solution = bi => {
    let bis = bi.split(' ');
    if (bis[1] === "+") {
        return Number(bis[0]) + Number(bis[2])
    } else if (bis[1] === "-") {
        return Number(bis[0]) - Number(bis[2])
    } else {
        return Number(bis[0]) * Number(bis[2])
    }  
}