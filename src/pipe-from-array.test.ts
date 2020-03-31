import { pipeFromArray } from './pipe-from-array';

describe('pipeFromArray', () => {
  it('Composes function array left to right with first fn of any arity', () => {
    const add = (a: number, b: number) => a + b;
    const double = (x: number) => x * 2;
    const addThenDouble = pipeFromArray([add, double]);

    expect(addThenDouble(1, 2)).toBe(6);
  });
});
