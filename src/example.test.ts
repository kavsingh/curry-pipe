import { curry, pipe } from '.';

const clamp = curry((min: number, max: number, value: number) =>
  Math.min(max, Math.max(min, value)),
);

const toRadixString = curry((radix: number, n: number) => n.toString(radix));

const padCharsStart = curry((char: string, length: number, s: string) =>
  s.padStart(length, char),
);

const toUpperCase = (s: string) => s.toUpperCase();

const joinChars = curry((char: string, arr: unknown[]) => arr.join(char));

type Mapper<T, R> = (item: T, index: number, arr: T[]) => R;
const map: {
  <T, R>(mapper: Mapper<T, R>): (arr: T[]) => R[];
  <T, R>(mapper: Mapper<T, R>, arr: T[]): R[];
} = curry((mapper: (...args: any[]) => any, arr: any[]) => arr.map(mapper));

const unshift: {
  <T>(item: T): (arr: T[]) => T[];
  <T>(item: T, arr: T[]): T[];
} = curry((item: any, arr: any[]) => {
  const copy = [...arr];

  copy.unshift(item);

  return copy;
});

const argsToArray: {
  <A1>(): (...args: [A1]) => [A1];
  <A1, A2>(): (...args: [A1, A2]) => [A1, A2];
  <A1, A2, A3>(): (...args: [A1, A2, A3]) => [A1, A2, A3];
  <A1, A2, A3, A4>(): (...args: [A1, A2, A3, A4]) => [A1, A2, A3, A4];
  (): (...args: any[]) => any[];
} = () => (...args: any) => args;

describe('examples', () => {
  describe('RGB to hex', () => {
    const decimalToHex = pipe(
      clamp(0, 255),
      toRadixString(16),
      padCharsStart('0', 2),
      toUpperCase,
    );

    it('Converts decimal value to hex', () => {
      expect(decimalToHex(0)).toBe('00');
      expect(decimalToHex(-1)).toBe('00');
      expect(decimalToHex(255)).toBe('FF');
      expect(decimalToHex(300)).toBe('FF');
    });

    const rgbToHex = pipe(
      argsToArray<number, number, number>(),
      map(decimalToHex),
      unshift('#'),
      joinChars(''),
    );

    it('Converts rgb array to hex', () => {
      expect(rgbToHex(0, 300, 255)).toBe('#00FFFF');
    });
  });
});
