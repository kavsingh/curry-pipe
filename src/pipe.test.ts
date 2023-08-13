import { test } from "node:test";
import assert from "node:assert";

import { pipe } from "./pipe.js";

void test("pipe", () => {
	const add = (a: number, b: number) => a + b;
	const double = (x: number) => x * 2;
	const addThenDouble = pipe(add, double);

	assert.strictEqual(addThenDouble(1, 2), 6);
});
