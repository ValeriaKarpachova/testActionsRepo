const { sum, multiply } = require('../sum');

test('2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('5 * 2 = 10', () => {
  expect(multiply(5, 2)).toBe(10);
});

test('10 * 3 = 30', () => {
  expect(multiply(10, 3)).toBe(30);
});
