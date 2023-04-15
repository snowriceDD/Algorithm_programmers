const solution = (num_list) => {
    let z = [];
    let h = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i]%2 === 0) {
            z.push(num_list[i])
        } else h.push(num_list[i]);
    }
    return ([z.length, h.length]);
}