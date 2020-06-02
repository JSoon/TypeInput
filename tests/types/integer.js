import integer from 'src/types/integer';

const {
  assert,
} = chai;

describe('整数输入', () => {
  it('应该输出整数', () => {
    assert.equal(integer('1'), '1');
    assert.equal(integer('12'), '12');
    assert.equal(integer('12 '), '12');
    assert.equal(integer('122837612798127848923479'), '12283761279812784892');
    assert.equal(integer('-123', {
      negative: true,
    }), '-123');
    assert.equal(integer('88ba '), '88');
    assert.equal(integer('-3-5', {
      negative: true,
    }), '-3');
    assert.equal(integer('-23b-', {
      negative: true,
    }), '-23');
  });
  it('应该输出空串', () => {
    assert.equal(integer('abc'), '');
    assert.equal(integer('.*_'), '');
    assert.equal(integer(' '), '');
    assert.equal(integer('-', true), '');
    assert.equal(integer('-=abs-sdb-', true), '');
  });
});
