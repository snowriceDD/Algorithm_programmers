function solution(my_string, index_list) {
    let ans = [];
    index_list.map((e) => {
        ans.push(my_string.split('')[e])
    }) 
    return ans.join('')
}