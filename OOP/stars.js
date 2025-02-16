const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 기본 클래스
class Base {
    word = '*';
    /**
     * @param size {number} 도형의 크기
     */
    constructor(size ) {
        this._size = size;
        this.shape = this.createShape();
    }
    get size() {
        return this._size;
    }

    /**
     * @setter
     * @param newSize {number} 새로운 도형의 크기
     * newSize 값으로 shape 재설정
     */
    set size(newSize) {
        this._size = newSize;
        this.shape = this.createShape();
    }

    /**
     * 도형의 모양을 생성하는 함수 (자식 클래스에서 구현 필요)
     * @abstract
     * @returns {string[]} 도형을 문자열 배열 형태로 반환
     * @throws {Error} 자식 클래스에서 구현되지 않은 경우 오류 발생
     */
    createShape() {
        throw new Error('createShape 내용 작성하세요');
    }

    // 출력
    show() {
        console.log(this.shape.join('\n'));
        // console.log(this.shape)
        // this.shape.forEach(row => {
        //     console.log(row);
        // })
    }
}

// 대칭 클래스
class SymmetricBase extends Base {
    createShape() {
        const top = this.draw();
        const bottom = top.length < 2 ? 
            [...top] : [...top.slice(0, -1).reverse()];
        return [...top, ...bottom];
    }

    /**
     * 대칭의 상단을 생성하는 함수 (자식 클래스에서 구현 필요)
     * @abstract
     * @returns {string[]} 도형을 문자열 배열 형태로 반환
     * @throws {Error} 자식 클래스에서 구현되지 않은 경우 오류 발생
     */
    draw() {
        throw new Error('draw 내용 작성하세요');
    }
}


/**
 * 증가 믹스인
 * @type {{draw(): string[]}}
 */
const incrementShape = {
    draw() {
        return Array.from(
            {length: this.size},
            (_, i) => {
                const starCount = i + 1;
                return this.word.repeat(starCount);
            }
        );
    }
}

/**
 * 삼각형 믹스인
 * @type {{draw(): string[]}}
 */
const triangleShape = {
    draw() {
        return Array.from(
            { length: this.size },
            (_, i) => {
                const blankCount = this.size - (i + 1);
                const starCount = i * 2 + 1;
                return ' '.repeat(blankCount) + this.word.repeat(starCount);
            }
        );
    }
}

class Square extends Base {
    createShape() {
        return Array.from(
            {length: this.size},
            () => this.word.repeat(this.size)
        );
    }
}


class Increment extends Base {
    createShape() {
        return incrementShape.draw.call(this);
    }
}

class IncrementAndDecrement extends SymmetricBase {
    draw() {
        return incrementShape.draw.call(this);
    }
}

class Triangle extends Base {
    createShape() {
        return triangleShape.draw.call(this);
    }
}

class Diamond extends SymmetricBase {
    draw() {
        return triangleShape.draw.call(this);
    }
}


const shapeClasses = {
    '1': Square,
    '2': Increment,
    '3': IncrementAndDecrement,
    '4': Triangle,
    '5': Diamond
};

function chooseShape(size) {
    console.log('\n도형 유형을 선택하세요:');
    console.log('1: 정사각형');
    console.log('2: 증가형');
    console.log('3: 증가&감소');
    console.log('4: 삼각형');
    console.log('5: 다이아몬드');
    console.log(';: 이전으로');
    console.log('0: 종료');

    rl.question('선택: ', (choice) => {
        if (choice === ';') return welcome();
        if (choice === '0') {
            console.log('프로그램을 종료합니다.');
            return rl.close();
        }

        const shapeClass = shapeClasses[choice];
        if (!shapeClass) {
            console.log('잘못된 선택입니다. 다시 선택하세요.');
            return chooseShape(size);
        }

        new shapeClass(size).show();
        setTimeout(() => {
            chooseShape(size);
        }, 300)
    });
}


// 숫자 입력을 받는 함수
function welcome() {
    rl.question('숫자를 입력하세요: ', (input) => {
        const sysLength = process.stdout.columns;
        const maxLength = Math.floor(sysLength / 2) - 1;
        const size = parseInt(input);

        if (isNaN(size) || size <= 0) {
            console.log('올바른 숫자를 입력하세요.');
            return welcome();
        }

        if (size > maxLength) {
            console.log(`너무크다요... ${maxLength} 이하의 숫자를 입력해주세요.`);
            return welcome();
        }

        chooseShape(size);
    });
}

// 프로그램 시작
welcome();