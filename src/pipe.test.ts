import { pipe } from './pipe';

describe('pipe', () => {
  it('Composes functions left to right with first fn of any arity', () => {
    const add = (a: number, b: number) => a + b;
    const double = (x: number) => x * 2;
    const addThenDouble = pipe(add, double);

    expect(addThenDouble(1, 2)).toBe(6);
  });
});
