import decimal from 'src/types/decimal';

const {
  assert,
} = chai;

describe('浮点数输入', () => {
  it('应该输出浮点数', () => {
    assert.equal(decimal('1.2'), '1.2');
    assert.equal(decimal('1a.b2-'), '1');
    assert.equal(decimal('1a.b2.-'), '1');
    assert.equal(decimal('-1a.b2.-', {
      negative: true,
    }), '-1');
    assert.equal(decimal('--2', {
      negative: true,
    }), '');
    assert.equal(decimal('1.59493'), '1.594');
  });
  it('应该输出空串', () => {
    assert.equal(decimal('abc'), '');
    assert.equal(decimal('.*_'), '');
    assert.equal(decimal(' '), '');
    assert.equal(decimal('-', {
      negative: true,
    }), '');
    assert.equal(decimal('-=abs-sdb-', {
      negative: true,
    }), '');
  });
});
