function solution(a, b) {
    let Splus = Number(String(a) + String(b));
    let double = 2 * a * b
    return Splus >= double ? Splus : double
}