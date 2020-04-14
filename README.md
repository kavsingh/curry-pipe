# @kavsingh/curry-pipe

Provides typed `curry` and `pipe` fns

![CI status](https://github.com/kavsingh/curry-pipe/workflows/Test/badge.svg)

---

Have a toy typescript project where perf is not important?
Don't want to install bigger, better libraries?
Want curry and pipe functions without the hassle of typing them?

Great!

- Horribly naive, optimised for _absolutely nothing_, but super tiny implementations
- Does not support `lodash` / `ramda` style curry placeholders
- Anonymous functions everywhere

Sold?

`npm i @kavsingh/curry-pipe`

Typings are lifted from [`@types/lodash`](https://www.npmjs.com/package/@types/lodash)

---

Here is the classic simple scenario

```ts
import { curry, pipe } from '@kavsingh/curry-pipe';

const add = curry((x: number, y: number) => x + y);
const multiply = curry((x: number, y: number) => x * y);

// infers (x: number) => number
const plus2Times3 = pipe(add(2), multiply(3));

plus2Times3(3); // 15
```

Dealing with generics needs a BYO signature overload (same with lodash afaik)

```ts
import { curry, pipe } from '@kavsingh/curry-pipe';

const takeN: {
  (n: number): <X>(xs: X[]) => X[];
  <X>(n: number, xs: X[]): X[];
} = curry((n: number, xs: any[]) => xs.slice(0, n));

const range = curry((min: number, max: number) =>
  Array.from({ length: max - min }, (_, i) => i + min),
);

// infers (x: number) => number[]
const why = pipe(range(2), takeN(3));

why(10); // [2, 3, 4]
```
