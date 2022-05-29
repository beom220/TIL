/*
    인자 = 주소
    통과할 숫자의 형식 [ 123 | 123-12 ...]
 */
function simpleAdr(adr){
    const pattern = /(\d+(-\d+)?)$/;
    if(!adr.match(pattern)) return console.log('주소 형식이 맞지 않음');

    const changeStr = adr.replace(pattern, '');
    console.log(changeStr);
    return changeStr;
}

let adr = "서울시 구로구 항동로 431-82"
let adr2 = "서울시 금천구 가산 12"
let errAdr = '서울시 여의도동 13호'

simpleAdr(adr); // "서울시 구로구 항동로 431-82" => "서울시 구로구 항동로"
simpleAdr(adr2); // "서울시 금천구 가산 12" => "서울시 금천구 가산"
simpleAdr(errAdr); // '서울시 여의도동 13호' => error Why? 숫자로 끝나지않아서
simpleAdr('서울시 여의도동 여의도로 13-7 세종빌딩');
simpleAdr('수원시 팔달구 영통로 23');
