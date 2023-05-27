function solution(citations) {
    let sortCita = citations.sort((a,b)=>b-a); 
    if (sortCita.at(-1) >= sortCita.length) {return sortCita.length} else {
    for (let h = 0; h < sortCita.length; h++) {
        if (sortCita[h] <= h) {
            return h
        }
    }}
}