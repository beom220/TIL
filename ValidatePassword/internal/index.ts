import {getConsecutiveKeyboardLetters, isNumeric, isSequentialChar, isSequentialNumber} from "../utils";


/**
 * 연속된 숫자나 문자가 있는지 확인
 * @param password 비밀번호
 * @param range 중복허용 범위
 */
function isConsecutive(password: string, range: number = 2): boolean {
    if (range < 2) {
        throw new Error('range 값은 2 이상이어야 합니다.');
    }
    for (let i = 0; i < password.length - 1; i++) {
        // 숫자 연속성 검사
        if (isNumeric(password[i]) && isNumeric(password[i + 1])) {
            if (isSequentialNumber(password[i], password[i + 1])) {
                let sequenceCount = 1;
                for (let j = i + 1; j < password.length - 1; j++) {
                    if (isSequentialNumber(password[j], password[j + 1])) {
                        sequenceCount++;
                    } else {
                        break;
                    }
                }
                if (sequenceCount >= range) return true
            }
        }

        // 문자 연속성 검사
        if (!isNumeric(password[i]) && !isNumeric(password[i + 1])) {
            if (isSequentialChar(password[i], password[i + 1])) {
                let sequenceCount = 1;
                for (let j = i + 1; j < password.length - 1; j++) {
                    if (isSequentialChar(password[j], password[j + 1])) {
                        sequenceCount++;
                    } else {
                        break;
                    }
                }
                if (sequenceCount >= range) return true;
            }
        }
    }
    return false;
}


// 비밀번호가 키보드 연속 패턴에 포함되어 있는지 확인
function isKeyboardSequence(password: string, range: number): boolean {
    const consecutivePatterns = getConsecutiveKeyboardLetters(range);
    for (let pattern of consecutivePatterns) {
        if (password.toLowerCase().indexOf(pattern) !== -1) {
            return true; // 연속된 패턴 발견
        }
    }
    return false; // 연속된 패턴 없음
}


// 필수 문자 포함 및 길이 체크
function hasRequiredCharacters(password: string): boolean {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
    return reg.test(password);
}

export { isConsecutive, isKeyboardSequence, hasRequiredCharacters }