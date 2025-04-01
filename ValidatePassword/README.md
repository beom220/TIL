# 🔐 validatepassword

비밀번호 유효성을 검사하는 간단하고 유틸리티입니다.

- 영문/숫자/특수문자 포함 여부
- 연속된 문자 또는 숫자 (`abc`, `123`, `aaa` 등)
- 키보드 상의 연속 패턴 (`qwe`, `asd`, `zxc` 등)
## 📦 설치

```bash
npm install @beom220/validatepassword
```

## 🛠️ 사용 방법

1. 사용자의 입력값(예: 비밀번호)을 `validatePassword()` 함수에 전달합니다.

2. 내부적으로 다음과 같은 유효성 검사가 수행됩니다:
  - ✅ **영문/숫자/특수문자** 포함 여부
  - 🚫 **키보드 연속 패턴** 검사 (예: `qwe`, `asd`, `zxc`)
  - 🚫 **문자 또는 숫자의 연속 패턴** 검사 (예: `abc`, `123`)

3. 결과는 아래와 같은 타입으로 반환됩니다:

```ts
 type ValidationResult = {
   isValid: boolean;
   error?: string;
 };
```
4. 사용예제
```ts
import {validatePassword} from '@beom220/validatepassword';

const result = validatePassword('abc123!!');

if (!result.isValid) {
    console.error(result.error);
}
```

## ⚠️ 에러 메시지 유형

`validatePassword()` 함수는 비밀번호가 유효하지 않을 경우 다음 중 하나의 에러 메시지를 반환합니다.

| 유형 | 메시지 |
|------|--------|
| REQUIRED_CHARACTERS | 비밀번호에는 영문자, 숫자, 특수문자가 모두 포함되어야 합니다. |
| KEYBOARD_SEQUENCE   | 비밀번호에 연속된 키보드 패턴이 포함되어 있습니다. |
| CONSECUTIVE_CHARACTERS | 비밀번호에 연속된 문자 또는 숫자가 포함되어 있습니다. |

###  반환 형식 예시:
```ts
{
  isValid: false,
  error: '비밀번호에 연속된 문자 또는 숫자가 포함되어 있습니다.'
}