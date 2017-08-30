const expect = require('expect');
const {isRealString} = require('./validation');


describe('Testing isRealString validation function', () => {
  it('should reject non-string values', () => {
    expect(isRealString(3)).toBe(false);
  });
  it('should reject string values containing only spaces', () => {
    expect(isRealString('      ')).toBe(false);
  });
  it('should allow a string with non-space characters', () => {
    expect(isRealString('hoho')).toBe(true);
  });
});
