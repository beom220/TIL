import ERROR_MESSAGES from "../constants/ErrorMessage";

// 숫자 체크

function isNumeric(char: string): boolean {
    return !isNaN(Number(char));
}

// 연속된 숫자 판별
function isSequentialNumber(a: string, b: string): boolean {
    const numA = Number(a);
    const numB = Number(b);
    return numA + 1 === numB || numA - 1 === numB || numA === numB;
}

// 연속된 문자 판별
function isSequentialChar(a: string, b: string): boolean {
    const charA = a.charCodeAt(0);
    const charB = b.charCodeAt(0);
    return charA + 1 === charB || charA - 1 === charB || charA === charB;
}

// 키보드 레이아웃에서 연속된 문자를 추출 (뒤집힌 문자열 포함)
function getConsecutiveKeyboardLetters(range: number = 2): string[] {
    if (range <= 1) throw new Error('range 값은 2 이상이어야 합니다.');

    const KEYBOARD_ROWS = [
        'qwertyuiop',  // 1행
        'asdfghjkl',   // 2행
        'zxcvbnm',      // 3행
    ];

    let consecutivePatterns: string[] = [];

    KEYBOARD_ROWS.forEach(row => {
        for (let i = 0; i <= row.length - range; i++) {
            consecutivePatterns.push(row.slice(i, i + range)); // 연속된 문자 패턴
            consecutivePatterns.push(row.slice(i, i + range).split('').reverse().join('')); // 뒤집힌 패턴
        }
    });

    return consecutivePatterns;
}

function getErrorMessage(errorType: keyof typeof ERROR_MESSAGES):
    { isValid: false; error: string } {
    return {
        isValid: false,
        error: ERROR_MESSAGES[errorType]
    };
}

export {
    isNumeric,
    isSequentialChar,
    isSequentialNumber,
    getConsecutiveKeyboardLetters,
    getErrorMessage
}