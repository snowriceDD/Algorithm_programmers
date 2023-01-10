function solution(people, limit) {
    var answer = 0;
    let boat = [];

    people.sort((a, b) => a - b);
    while(people.length !== 0) {

        if ((people[0] + people[people.length-1]) > limit) {
            boat.push(people[people.length-1]);
            people.pop();

        } else {
            boat.push(people[0], people[people.length-1]);
            people.shift();
            people.pop();
        }
        answer += 1;
        boat = [];
    }
    return answer;
}