QUnit.module('MAIN MODULE', {})
QUnit.test('TEST mul', assert => {
    assert.equal(mul(3, 6), 18, 'Positive integers')
    assert.equal(mul(1, 1), 1, 'Positive integers')
    assert.equal(mul(10, 10), 100, 'Positive integers')
  })