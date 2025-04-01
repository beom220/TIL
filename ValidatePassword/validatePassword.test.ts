import {hasRequiredCharacters, isConsecutive, isKeyboardSequence, validatePassword} from "./main";
import {getConsecutiveKeyboardLetters, getErrorMessage} from "./utils";


describe('비밀번호 검증 테스트', () => {
    describe('hasRequiredCharacters', () => {
        it('8자 미만인 비밀번호는 false를 반환해야 합니다', () => {
            expect(hasRequiredCharacters('A1b!')).toBe(false);
        });

        it('특수 문자가 없는 비밀번호는 false를 반환해야 합니다', () => {
            expect(hasRequiredCharacters('Abc12345')).toBe(false);
        });

        it('숫자가 없는 비밀번호는 false를 반환해야 합니다', () => {
            expect(hasRequiredCharacters('qwerasdf!@')).toBe(false);
        });

        it('영어가 없는 비밀번호는 false를 반환해야 합니다', () => {
            expect(hasRequiredCharacters('1234!#$%@#$%')).toBe(false);
        });

        it('숫자, 영어, 특수 문자가 포함된 8자 이상의 유효한 비밀번호는 true를 반환해야 합니다', () => {
            expect(hasRequiredCharacters('qkc12_ek@!')).toBe(true);
        });
    });

    describe('isConsecutive', () => {
        it('연속된 숫자가 있는 비밀번호는 true를 반환해야 합니다', () => {
            expect(isConsecutive('1234')).toBe(true);
        });

        it('연속된 문자가 있는 비밀번호는 true를 반환해야 합니다', () => {
            expect(isConsecutive('abcd')).toBe(true);
        });

        it('중복된 숫자가 연속으로 있는 비밀번호는 true를 반환해야 합니다', () => {
            expect(isConsecutive('typescript1111')).toBe(true);
        });

        it('중복된 문자가 연속으로 있는 비밀번호는 true를 반환해야 합니다', () => {
            expect(isConsecutive('abcddddd')).toBe(true);
        });

        it('연속된 문자가 없는 비밀번호는 false를 반환해야 합니다', () => {
            expect(isConsecutive('qkc12ek@!')).toBe(false);
        });
    });

    describe('getConsecutiveKeyboardLetters', () => {
        it('3개의 연속된 문자 패턴 리스트를 반환해야 합니다', () => {
            const patterns = getConsecutiveKeyboardLetters(3);
            expect(patterns).toContain('qwe');  // qwe 연속된 문자에 포함되어야 함
            expect(patterns).toContain('asd'); // asd 연속된 문자에 포함되어야 함
        });

        it('뒤집힌 문자 패턴 리스트를 반환해야 합니다', () => {
            const patterns = getConsecutiveKeyboardLetters(3);
            expect(patterns).toContain('ewq');
            expect(patterns).toContain('dsa');
        });
    });

    describe('isKeyboardSequence', () => {
        it('키보드에서 연속된 패턴이 있는 비밀번호는 true를 반환해야 합니다', () => {
            expect(isKeyboardSequence('wert', 3)).toBe(true); // 연속된 패턴이 존재
        });

        it('키보드에서 연속된 패턴이 없는 비밀번호는 false를 반환해야 합니다', () => {
            expect(isKeyboardSequence('abcd', 3)).toBe(false);
        });
    });

    describe('validatePassword', () => {
        it('유효한 비밀번호는 성공 객체를 반환해야 합니다', () => {
            expect(validatePassword('Valid@123')).toEqual({ isValid: true });
        });

        it('길이가 8자 미만이면 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('short1!'))
                .toEqual(getErrorMessage('REQUIRED_CHARACTERS'));
        });

        it('특수문자가 없으면 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('NoSpecial123'))
                .toEqual(getErrorMessage('REQUIRED_CHARACTERS'));
        });

        it('연속된 숫자가 포함된 경우 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('typescript1234!'))
                .toEqual(getErrorMessage('CONSECUTIVE_CHARACTERS'));
        });
        it('연속된 문자가 포함된 경우 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('94882abcd!'))
                .toEqual(getErrorMessage('CONSECUTIVE_CHARACTERS'));
        });
        it('같은 숫자를 반복하는 경우 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('typescript11111!'))
                .toEqual(getErrorMessage('CONSECUTIVE_CHARACTERS'));
        });
        it('같은 단어를 반복하는 경우 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('typpppescript1!'))
                .toEqual(getErrorMessage('CONSECUTIVE_CHARACTERS'));
        });
        it('키보드 연속된 패턴이 포함된 경우 오류 메시지를 반환해야 합니다', () => {
            expect(validatePassword('3390qwer!'))
                .toEqual(getErrorMessage('KEYBOARD_SEQUENCE'));
        });
    });
});
