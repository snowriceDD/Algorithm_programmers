function solution(my_string) {
    let splitArr = my_string.split(/[a-z|A-Z]/);
    return splitArr.reduce((a, c) => Number(a) + Number(c), 0);
}