import test from "ava";

import { curry } from "./curry.js";

test("curry", (t) => {
	const add = curry((a: number, b: number) => a + b);
	const add2 = add(2);

	t.is(add(1, 2), 3);
	t.is(add(1)(2), 3);
	t.is(add()(1, 2), 3);
	t.is(add()()(1)()(2), 3);
	t.is(add2()(2), 4);
});
