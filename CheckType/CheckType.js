const type = {
    // test: 'power-ade',
    // test0: '',
    // test1: ' ',

    // test2: 0,
    // test3: 123,

    test4: undefined,
    test5: null,
    test6: true,
    test7: false,

    test8: () => null,
    test9: () => undefined,
    test10: () => 0,
    test11: () => 1234,
    test12: () => '',
    test13: () => ' ',
    test14: () => '1234',
    test15: () => {
        return {}
    },
    test16: () => {
        return {name: 'yo'}
    },

    test17: {},
    test18: {name: 'test10'},
    test19: {name: ''},
    test20: {name: ' '},

    test21(){return '1234'},

    test22: new Date(),
    test23: '2022-11-20T06:21:16.683Z',
    test24: '2022-11-20',
    test25: new Date('2022-11-20T06:21:16.683Z'),
    test26: new Date('11-21,'),
    test27: new Date(undefined),
    test28: new Date('2022-11-20T06:21:16.683Z').toString(),
    test29: new Date('11-21,').toString(),
    test30: new Date('2022-11-20T06:21:16.683Z').toDateString(),
    test31: new Date('2022-11-20T06:21:16.683Z').toISOString(),
    // test32: new Date('2022-11-20T06:21:16.683Z').toLocaleString(),
    // test33: new Date('2022-11-20T06:21:16.683Z').toLocaleDateString(),
    // test32: new Date('2022-11-20T06:21:16.683Z').toLocaleString('ko-KR'),

}

function checking(val, i) {
    return {
        num : i,
        value: val,
        type: typeof val,
        falsy: !val,
        falsyType : typeof !val,
        truly: !!val,
        trulyType : typeof !!val,
    }
}
Object.values(type).forEach((v, i) => console.log(checking(v, i)));

