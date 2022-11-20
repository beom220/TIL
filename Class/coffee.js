class CoffeeMachine {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
        console.log( `전력량이 ${power}인 커피머신을 만듭니다.` );
    }
    /* 읽기 전용 프로퍼티
    * 왜 ?
    * 설정자(setter)가 없음 */
    get power() {
        return this._power;
    }

    setWaterAmount(val){
        if( val < 0 ) throw new Error('물은 음수가 될 수 없다.');
        console.log(`물을 설정합니다: ${this._waterAmount} => ${val}`)
        this._waterAmount = val;
    }

    getWaterAmount(){
        return this._waterAmount;
    }
}

// 커피 머신 생성
const coffeeMachine = new CoffeeMachine(200);

console.log('P: ', coffeeMachine.power);
console.log('L: ', coffeeMachine.getWaterAmount());

coffeeMachine.setWaterAmount(300);
console.log('L: ', coffeeMachine.getWaterAmount())

console.log('파워를 재설정합니다. ' + coffeeMachine.power + ' =>' + ' 300');
coffeeMachine.power = 300;
console.log('P: ', coffeeMachine.power);
console.log('설정자가 없어서 설정할 수 없다... ');


const coffeeMegaMachine = new CoffeeMachine(5000);
console.log('P: ', coffeeMegaMachine.power);
coffeeMegaMachine.setWaterAmount(30000);
console.log('L: ', coffeeMegaMachine.getWaterAmount());


coffeeMegaMachine.setWaterAmount(100);
console.log('L: ', coffeeMegaMachine.getWaterAmount());