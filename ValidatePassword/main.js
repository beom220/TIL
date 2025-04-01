"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = validatePassword;
exports.hasRequiredCharacters = hasRequiredCharacters;
exports.isConsecutive = isConsecutive;
exports.isKeyboardSequence = isKeyboardSequence;
var utils_1 = require("./utils");
var MAXIMUM_RANGE = 3;
/**
 * 연속된 숫자나 문자가 있는지 확인
 * @param password 비밀번호
 * @param range 중복허용 범위
 */
function isConsecutive(password, range) {
    if (range === void 0) { range = 2; }
    if (range < 2) {
        throw new Error('range 값은 2 이상이어야 합니다.');
    }
    for (var i = 0; i < password.length - 1; i++) {
        // 숫자 연속성 검사
        if ((0, utils_1.isNumeric)(password[i]) && (0, utils_1.isNumeric)(password[i + 1])) {
            if ((0, utils_1.isSequentialNumber)(password[i], password[i + 1])) {
                var sequenceCount = 1;
                for (var j = i + 1; j < password.length - 1; j++) {
                    if ((0, utils_1.isSequentialNumber)(password[j], password[j + 1])) {
                        sequenceCount++;
                    }
                    else {
                        break;
                    }
                }
                if (sequenceCount >= range)
                    return true;
            }
        }
        // 문자 연속성 검사
        if (!(0, utils_1.isNumeric)(password[i]) && !(0, utils_1.isNumeric)(password[i + 1])) {
            if ((0, utils_1.isSequentialChar)(password[i], password[i + 1])) {
                var sequenceCount = 1;
                for (var j = i + 1; j < password.length - 1; j++) {
                    if ((0, utils_1.isSequentialChar)(password[j], password[j + 1])) {
                        sequenceCount++;
                    }
                    else {
                        break;
                    }
                }
                if (sequenceCount >= range)
                    return true;
            }
        }
    }
    return false;
}
// 비밀번호가 키보드 연속 패턴에 포함되어 있는지 확인
function isKeyboardSequence(password, range) {
    var consecutivePatterns = (0, utils_1.getConsecutiveKeyboardLetters)(range);
    for (var _i = 0, consecutivePatterns_1 = consecutivePatterns; _i < consecutivePatterns_1.length; _i++) {
        var pattern = consecutivePatterns_1[_i];
        if (password.toLowerCase().indexOf(pattern) !== -1) {
            return true; // 연속된 패턴 발견
        }
    }
    return false; // 연속된 패턴 없음
}
// 필수 문자 포함 및 길이 체크
function hasRequiredCharacters(password) {
    var reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
    return reg.test(password);
}
// 비밀번호 검증 함수
function validatePassword(password) {
    if (!hasRequiredCharacters(password)) {
        return (0, utils_1.getErrorMessage)("REQUIRED_CHARACTERS");
    }
    if (isKeyboardSequence(password, MAXIMUM_RANGE)) {
        return (0, utils_1.getErrorMessage)("KEYBOARD_SEQUENCE");
    }
    if (isConsecutive(password, MAXIMUM_RANGE)) {
        return (0, utils_1.getErrorMessage)("CONSECUTIVE_CHARACTERS");
    }
    return { isValid: true };
}
