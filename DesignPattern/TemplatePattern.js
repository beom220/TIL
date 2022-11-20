class TemplatePattern {
    shape;
    moveTo;

    init(){
        console.log('새로운 도형을 만듭니다.')
        this.shape();
        this.moveTo();
    }
}

class Square extends TemplatePattern {
    constructor(size, move) {
        super();
        this._size = size;
        this._move = move;
    }

    shape = () => console.log(`가로 : ${this._size} 세로 : ${this._size}`);
    moveTo = () => console.log(`앞으로 ${this._move} 만큼 이동`);
}

class Rectangle extends TemplatePattern {
    constructor(size, move) {
        super();
        this._size = size;
        this._move = move;
    }

    shape = () => console.log(`가로 : ${this._size.width} 세로 : ${this._size.height}`);
    moveTo = () => console.log(`${this._move.pointTo} ${this._move.size} 만큼 이동`)
}



















const createSquare = (size, move) => {
    const square = new Square(size.width, move.size / 2);
    const rectangle = new Rectangle(size, move);
    square.init();
    rectangle.init();
}

createSquare({width:20, height:30}, {pointTo:'옆으로', size: 200});