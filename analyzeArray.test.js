const analyzeArray = require('./analyzeArray');

test('the function should output the average, min, max, and length', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toBe(19);
});