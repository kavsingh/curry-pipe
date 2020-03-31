/* eslint-disable @typescript-eslint/no-explicit-any */

import { pipe } from './pipe';

// This ignore should be pretty safe since this is a thin wrapper around pipe,
// and Pipe types are manually set
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const pipeFromArray: PipeFromArray = (fns: any[]) => pipe(...fns);

// Adapted from @types/lodash
interface PipeFromArray {
  <R1, R2>(fns: [() => R1, (a: R1) => R2]): () => R2;
  <R1, R2, R3>(fns: [() => R1, (a: R1) => R2, (a: R2) => R3]): () => R3;
  <R1, R2, R3, R4>(
    fns: [() => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4],
  ): () => R4;
  <R1, R2, R3, R4, R5>(
    fns: [() => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4, (a: R4) => R5],
  ): () => R5;
  <R1, R2, R3, R4, R5, R6>(
    fns: [
      () => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): () => R6;
  <R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      () => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): () => R7;
  <R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      () => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): () => any;
  <A1, R1, R2>(fns: [(a1: A1) => R1, (a: R1) => R2]): (a1: A1) => R2;
  <A1, R1, R2, R3>(fns: [(a1: A1) => R1, (a: R1) => R2, (a: R2) => R3]): (
    a1: A1,
  ) => R3;
  <A1, R1, R2, R3, R4>(
    fns: [(a1: A1) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4],
  ): (a1: A1) => R4;
  <A1, R1, R2, R3, R4, R5>(
    fns: [
      (a1: A1) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
    ],
  ): (a1: A1) => R5;
  <A1, R1, R2, R3, R4, R5, R6>(
    fns: [
      (a1: A1) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): (a1: A1) => R6;
  <A1, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): (a1: A1) => R7;
  <A1, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): (a1: A1) => any;
  <A1, A2, R1, R2>(fns: [(a1: A1, a2: A2) => R1, (a: R1) => R2]): (
    a1: A1,
    a2: A2,
  ) => R2;
  <A1, A2, R1, R2, R3>(
    fns: [(a1: A1, a2: A2) => R1, (a: R1) => R2, (a: R2) => R3],
  ): (a1: A1, a2: A2) => R3;
  <A1, A2, R1, R2, R3, R4>(
    fns: [(a1: A1, a2: A2) => R1, (a: R1) => R2, (a: R2) => R3, (a: R3) => R4],
  ): (a1: A1, a2: A2) => R4;
  <A1, A2, R1, R2, R3, R4, R5>(
    fns: [
      (a1: A1, a2: A2) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
    ],
  ): (a1: A1, a2: A2) => R5;
  <A1, A2, R1, R2, R3, R4, R5, R6>(
    fns: [
      (a1: A1, a2: A2) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): (a1: A1, a2: A2) => R6;
  <A1, A2, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): (a1: A1, a2: A2) => R7;
  <A1, A2, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): (a1: A1, a2: A2) => any;
  <A1, A2, A3, R1, R2>(fns: [(a1: A1, a2: A2, a3: A3) => R1, (a: R1) => R2]): (
    a1: A1,
    a2: A2,
    a3: A3,
  ) => R2;
  <A1, A2, A3, R1, R2, R3>(
    fns: [(a1: A1, a2: A2, a3: A3) => R1, (a: R1) => R2, (a: R2) => R3],
  ): (a1: A1, a2: A2, a3: A3) => R3;
  <A1, A2, A3, R1, R2, R3, R4>(
    fns: [
      (a1: A1, a2: A2, a3: A3) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
    ],
  ): (a1: A1, a2: A2, a3: A3) => R4;
  <A1, A2, A3, R1, R2, R3, R4, R5>(
    fns: [
      (a1: A1, a2: A2, a3: A3) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
    ],
  ): (a1: A1, a2: A2, a3: A3) => R5;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6>(
    fns: [
      (a1: A1, a2: A2, a3: A3) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): (a1: A1, a2: A2, a3: A3) => R6;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): (a1: A1, a2: A2, a3: A3) => R7;
  <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): (a1: A1, a2: A2, a3: A3) => any;
  <A1, A2, A3, A4, R1, R2>(
    fns: [(a1: A1, a2: A2, a3: A3, a4: A4) => R1, (a: R1) => R2],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
  <A1, A2, A3, A4, R1, R2, R3>(
    fns: [(a1: A1, a2: A2, a3: A3, a4: A4) => R1, (a: R1) => R2, (a: R2) => R3],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
  <A1, A2, A3, A4, R1, R2, R3, R4>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
  <A1, A2, A3, A4, R1, R2>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
  <A1, A2, A3, A4, R1, R2, R3>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
  <A1, A2, A3, A4, R1, R2, R3, R4>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
  <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
    fns: [
      (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
      (a: R1) => R2,
      (a: R2) => R3,
      (a: R3) => R4,
      (a: R4) => R5,
      (a: R5) => R6,
      (a: R6) => R7,
      ...Array<(a: any) => any>
    ],
  ): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
  (fns: Array<(...args: any[]) => any>): (...args: any[]) => any;
}

/* eslint-enable */
