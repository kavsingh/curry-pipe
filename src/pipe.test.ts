import { describe, it, expect } from "vitest";

import { pipe } from "./pipe.js";

describe("pipe", () => {
	it("should provide a function pipeline", () => {
		expect.assertions(1);

		const add = (a: number, b: number) => a + b;
		const double = (x: number) => x * 2;
		const addThenDouble = pipe(add, double);

		expect(addThenDouble(1, 2)).toBe(6);
	});
});
