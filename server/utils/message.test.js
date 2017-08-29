let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generate message', () => {
  it('should generate the correct message object', () => {
    let from = 'Bob';
    let text = 'Testing';

    let res = generateMessage(from, text);

    expect(res).toInclude({
      from,
      text
    });
    expect(res.createdAt).toBeA('number');
  });
});

describe('generate location message', () => {
  it('should generate correct location object', () => {
    let from = 'User Test';
    let latitude = 1;
    let longitude = 1;

    let loc = generateLocationMessage(from, latitude, longitude);
    expect(loc).toInclude({
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`
    });
    expect(loc.createdAt).toBeA('number');
  });
});
