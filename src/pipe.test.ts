import test from "ava";

import { pipe } from "./pipe.js";

test("pipe", (t) => {
	const add = (a: number, b: number) => a + b;
	const double = (x: number) => x * 2;
	const addThenDouble = pipe(add, double);

	t.is(addThenDouble(1, 2), 6);
});
