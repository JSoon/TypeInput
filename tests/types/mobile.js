import mobile from 'src/types/mobile';

const {
  assert,
} = chai;

describe('手机号输入', () => {
  it('应该输出手机号', () => {
    assert.equal(mobile('18586654428'), '18586654428');
    assert.equal(mobile('13602141236'), '13602141236');
    assert.equal(mobile('13987261029'), '13987261029');
  });
  it('应该输出空串', () => {
    assert.equal(mobile('.*_'), '');
    assert.equal(mobile('1858-654428'), '');
    assert.equal(mobile('-'), '');
    assert.equal(mobile('-'), '');
  });
});
