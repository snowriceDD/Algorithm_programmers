const solution = (rank, attend) => {
    attend.map((v, i) => v ? rank[i] : rank[i] = 105);
    let sortrank = [...rank].sort((a, b) => a - b)
    return (rank.findIndex(v => v === sortrank[0]) * 10000) + (rank.findIndex(v => v === sortrank[1]) * 100) + rank.findIndex(v => v === sortrank[2]) 
}