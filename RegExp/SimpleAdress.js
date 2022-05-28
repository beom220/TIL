function simpleAdr(adr){
    /**
     *  @param String
     */
    const pattern = /(\d+(-\d+)?)$/; // 통과할 텍스트 패턴  [ 123 | 123-12 ...]

    if(!adr.match(pattern)) return console.log('주소 형식이 맞지 않음');
    const result = adr.replace(pattern, '');

    console.log(result);
    return result;
}

let adr = "서울시 구로구 항동로 431-82"
let adr2 = "서울시 금천구 가산 12"
let errAdr = '서울시 여의도동 13호'

simpleAdr(adr); // "서울시 구로구 항동로 431-82" => "서울시 구로구 항동로"
simpleAdr(adr2); // "서울시 금천구 가산 12" => "서울시 금천구 가산"
simpleAdr(errAdr); // '서울시 여의도동 13호' => error Why? 숫자로 끝나지않아서
simpleAdr('서울시 여의도동 여의도로 13-7 세종빌딩'); // err
simpleAdr('수원시 팔달구 영통로 23'); // => '수원시 팔달구 영통로'

