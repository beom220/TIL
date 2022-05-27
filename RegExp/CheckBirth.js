/*
 Note
    주민번호 앞자리
    month 앞에 1이 온다면 뒤에는 0~2까지 허용한다 === 10|11|12. 앞에 0이 온다면 뒤에는 1~9 까지 허용된다 === 01|02|03...09;
    date 0~2뒤는 10진수 모든 수 허용한다. 앞에 3이 온다면 뒤는 0~4 까지 허용한다.
    뒷자리의 첫글자는 1~4만 올수있다.
*/
function personNum(num1,num2){
    const firstNumReg = /^\d{2}(0[1-9]|1[0-2])([0-2]\d|3[01])$/;
    const lastNumReg = /^[1-4]\d{6}$/;

    if(!firstNumReg.test(num1)) return console.log('앞자리 틀렸음');
    if(!lastNumReg.test(num2)) return console.log('뒷자리 틀렸음');
    return console.log(`올바른 주민번호 : ${num1}-${num2}`)
}

function birth(pullYear){
    const yearReg = /^[12]\d{3}[-_,./]?(0[1-9]|1[0-2])[-_,./]?([0-2]\d|3[0-4])$/;

    if(!yearReg.test(pullYear)) return console.log('생년월일 틀림');
    return console.log(pullYear);
}

personNum('001225','1023457');
birth('20001225');
birth('2000.12.25');