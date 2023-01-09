function solution(s) {
    let sS = s.split('');
    let sleng = sS.length;
    let twoCount = 0;
    let zeroCount = 0;
    let whileControler = 0;
    const zeroRemover = (e) => {
        e = '0';
        zeroCount++;
    }
    const changer = (props) => {
        twoCount++;
        sS = props.length.toString(2).split('');
    }
    
    while(whileControler !==1){
        let a  = sS.map((e)=> e == '0' ? zeroRemover(e) : '1').join('');
        a !== 1 ? changer(a) : null
        whileControler = a.length;
    }
    return [twoCount, zeroCount];
}