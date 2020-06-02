import text from 'src/types/text';

const {
  assert,
} = chai;

describe('文本输入', () => {
  it('应该输出文本', () => {
    assert.equal(text('1.2'), '1');
    assert.equal(text('1a.b2-'), '1a');
    assert.equal(text('hello-world'), 'hello');
    assert.equal(text('helloMyWor%$ld'), 'helloMyWor');
    assert.equal(text('hello world!'), 'hello world');
    assert.equal(text('helloWorldhelloWorldhelloWorld', {
      length: 15,
    }), 'helloWorldhello');
    assert.equal(text('-', {
      symbol: true,
    }), '-');
    assert.equal(text('-=abs-sdb-', {
      symbol: true,
    }), '-=abs-sdb-');
  });
  it('应该输出空串', () => {
    assert.equal(text('.*_'), '');
    assert.equal(text('-'), '');
  });
});
