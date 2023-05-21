const solution = (arr, que) => {
    for (let query of que) {
        arr = arr.map((v, i) => (query[0] <= i) && (i <= query[1]) ? v += 1 : v)
    }
    return arr
}