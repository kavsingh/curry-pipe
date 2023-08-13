import { test } from "node:test";
import assert from "node:assert";

import { curry } from "./curry.js";

void test("curry", () => {
	const add = curry((a: number, b: number) => a + b);
	const add2 = add(2);

	assert.strictEqual(add(1, 2), 3);
	assert.strictEqual(add(1)(2), 3);
	assert.strictEqual(add()(1, 2), 3);
	assert.strictEqual(add()()(1)()(2), 3);
	assert.strictEqual(add2()(2), 4);
});
