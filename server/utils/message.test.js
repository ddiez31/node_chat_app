let expect = require('expect');

let {generateMessage} = require('./message');

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
})
