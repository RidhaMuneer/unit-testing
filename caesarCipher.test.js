const caesarCipher = require('./caesarCipher');

test('abcd will be outputed as bcde', () => {
    expect(caesarCipher('abcd')).toBe('bcde');
});