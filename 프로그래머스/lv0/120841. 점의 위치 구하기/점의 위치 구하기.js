const solution = (dot) => {
    let a = dot[0];
    let b = dot[1];
    
 if((a > 0) && (b > 0)) {return 1}
if((a < 0) && (b > 0)) {return 2}
  if((a < 0) && (b < 0)) {return 3}
  if((a > 0) && (b < 0)) {return 4}
    
}