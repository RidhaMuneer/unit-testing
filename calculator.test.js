const calculator = require('./calculator');

test('1 + 2 adds to 3', ()=> {
    expect(calculator.add(1, 2)).toBe(3);
});

test('2 - 1 equals to 1', ()=> {
    expect(calculator.sub(2, 1)).toBe(1);
});

test('3 multiply 3 equals to 9', ()=> {
    expect(calculator.multiply(3, 3)).toBe(9);
});

test('4 divided by 2 equals to 2', ()=> {
    expect(calculator.divide(4, 2)).toBe(2);
});