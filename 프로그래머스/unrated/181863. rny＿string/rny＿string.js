const solution = rn => {
    return rn.split('').map((e)=>e==='m' ? e = 'rn' : e).join('')
}