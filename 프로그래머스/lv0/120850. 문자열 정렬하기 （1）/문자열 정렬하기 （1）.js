const solution = (my_string) => {
    let result = [];
    let ress = my_string.replace(/[^0-9]/g, '');
        for (let a of ress) {
            result.push(Number(a))
        }
    result.sort((a,b)=>a-b);
    return result;
}