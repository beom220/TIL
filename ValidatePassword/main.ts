import {hasRequiredCharacters, isConsecutive, isKeyboardSequence} from "./internal";
import {getErrorMessage} from "./utils";

export type ValidationResult = {
    isValid: boolean;
    error?: string;
};

const MAXIMUM_RANGE = 3;

// 비밀번호 검증 함수
export function validatePassword(password: string): ValidationResult {
    if (!hasRequiredCharacters(password)) {
        return getErrorMessage("REQUIRED_CHARACTERS");
    }

    if (isKeyboardSequence(password, MAXIMUM_RANGE)) {
        return getErrorMessage("KEYBOARD_SEQUENCE");
    }

    if (isConsecutive(password, MAXIMUM_RANGE)) {
        return getErrorMessage("CONSECUTIVE_CHARACTERS");
    }

    return { isValid: true };
}

