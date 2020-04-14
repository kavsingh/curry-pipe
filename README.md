# @kavsingh/curry-pipe

Provides typed `curry` and `pipe` fns

![CI status](https://github.com/kavsingh/curry-pipe/workflows/CI/badge.svg)

These are very naive, not perf optimised implementations. Best used when that's not a huge issue.
It also does not support `lodash` / `ramda` style curry placeholders.

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
