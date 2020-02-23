import { curry } from './curry';

describe('curry', () => {
  it('Curries a function', () => {
    const add = curry((a: number, b: number) => a + b);
    const add2 = add(2);

    expect(add(1, 2)).toBe(3);
    expect(add(1)(2)).toBe(3);
    expect(add()(1, 2)).toBe(3);
    expect(add()()(1)()(2)).toBe(3);
    expect(add2()(2)).toBe(4);
  });
});
