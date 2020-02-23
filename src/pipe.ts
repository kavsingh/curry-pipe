/* eslint-disable @typescript-eslint/no-explicit-any */

export const pipe: Pipe = (fn: any, ...fns: any[]) => (...args: any[]) =>
  fns.reduce((result, currFn) => currFn(result), fn(...args));

// Taken from @types/lodash
interface Pipe {
  <R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
  <R1, R2, R3>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): () => R3;
  <R1, R2, R3, R4>(
    f1: () => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): () => R4;
  <R1, R2, R3, R4, R5>(
    f1: () => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): () => R5;
  <R1, R2, R3, R4, R5, R6>(
    f1: () => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): () => R6;
  <R1, R2, R3, R4, R5, R6, R7>(
    f1: () => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): () => R7;
  <R1, R2, R3, R4, R5, R6, R7>(
    f1: () => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): () => any;
  <A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
  <A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (
    a1: A1,
  ) => R3;
  <A1, R1, R2, R3, R4>(
    f1: (a1: A1) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): (a1: A1) => R4;
  <A1, R1, R2, R3, R4, R5>(
    f1: (a1: A1) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): (a1: A1) => R5;
  <A1, R1, R2, R3, R4, R5, R6>(
    f1: (a1: A1) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): (a1: A1) => R6;
  <A1, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): (a1: A1) => R7;
  <A1, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): (a1: A1) => any;
  <A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (
    a1: A1,
    a2: A2,
  ) => R2;
  <A1, A2, R1, R2, R3>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
  ): (a1: A1, a2: A2) => R3;
  <A1, A2, R1, R2, R3, R4>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): (a1: A1, a2: A2) => R4;
  <A1, A2, R1, R2, R3, R4, R5>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): (a1: A1, a2: A2) => R5;
  <A1, A2, R1, R2, R3, R4, R5, R6>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): (a1: A1, a2: A2) => R6;
  <A1, A2, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): (a1: A1, a2: A2) => R7;
  <A1, A2, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): (a1: A1, a2: A2) => any;
  <A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (
    a1: A1,
    a2: A2,
    a3: A3,
  ) => R2;
  <A1, A2, A3, R1, R2, R3>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
  ): (a1: A1, a2: A2, a3: A3) => R3;
  <A1, A2, A3, R1, R2, R3, R4>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): (a1: A1, a2: A2, a3: A3) => R4;
  <A1, A2, A3, R1, R2, R3, R4, R5>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): (a1: A1, a2: A2, a3: A3) => R5;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): (a1: A1, a2: A2, a3: A3) => R6;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): (a1: A1, a2: A2, a3: A3) => R7;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): (a1: A1, a2: A2, a3: A3) => any;
  <A1, A2, A3, A4, R1, R2>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
  <A1, A2, A3, A4, R1, R2, R3>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
  <A1, A2, A3, A4, R1, R2, R3, R4>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
  <A1, A2, A3, A4, R1, R2>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
  <A1, A2, A3, A4, R1, R2, R3>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
  <A1, A2, A3, A4, R1, R2, R3, R4>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
    f2: (a: R1) => R2,
    f3: (a: R2) => R3,
    f4: (a: R3) => R4,
    f5: (a: R4) => R5,
    f6: (a: R5) => R6,
    f7: (a: R6) => R7,
    ...funcs: Array<(a: any) => any>
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
  (funcs: Array<(...args: any[]) => any>): (...args: any[]) => any;
}

/* eslint-enable */
