import { describe, it, expect } from "vitest";

import { curry } from "./curry.js";

describe("curry", () => {
	it("should provide a curried function", () => {
		expect.assertions(5);

		const add = curry((a: number, b: number) => a + b);
		const add2 = add(2);

		expect(add(1, 2)).toBe(3);
		expect(add(1)(2)).toBe(3);
		expect(add()(1, 2)).toBe(3);
		expect(add()()(1)()(2)).toBe(3);
		expect(add2()(2)).toBe(4);
	});
});
