module.exports = {
    preset: 'ts-jest', // ts-jest를 사용하여 TypeScript 파일을 처리
    testEnvironment: 'node', // 테스트 환경을 Node.js로 설정
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // .ts, .tsx 파일을 ts-jest로 변환
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'], // 모듈 확장자 설정
    testPathIgnorePatterns: ['/node_modules/'], // node_modules 폴더 무시
    transformIgnorePatterns: ['<rootDir>/node_modules/'], // transform하지 않을 파일 패턴
};
