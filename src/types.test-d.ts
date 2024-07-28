import { describe, it, expect, expectTypeOf } from "vitest";

import { curry } from "./curry.js";
import { pipe } from "./pipe.js";

describe("type inference", () => {
	it("should provide correct types for curry", () => {
		expect.assertions(5);

		const tag = curry((t: string, n: number) => `${t}${String(n)}`);

		expectTypeOf(tag()).parameters.toEqualTypeOf<[string, number]>();
		expectTypeOf(tag()).returns.toBeString();

		expectTypeOf(tag("tag")).parameters.toEqualTypeOf<[number]>();
		expectTypeOf(tag("tag")).returns.toBeString();

		expectTypeOf(tag("tag", 5)).toBeString();
	});

	it("should provide correct types for pipe", () => {
		expect.assertions(2);

		const fn = pipe(
			(s: string) => Number(s),
			(n: number) => ({ result: n * 5 }),
		);

		expectTypeOf(fn).parameters.toEqualTypeOf<[string]>();
		expectTypeOf(fn).returns.toEqualTypeOf<{ result: number }>();
	});

	it("should maintain types for pipe and curry", () => {
		expect.assertions(4);

		const tag = curry((t: string, n: number) => `${t}${String(n)}`);
		const fn = pipe(tag("tag"), (s: string) => ({ tagged: s }));

		expectTypeOf(fn).parameters.toEqualTypeOf<[number]>();
		expectTypeOf(fn).returns.toEqualTypeOf<{ tagged: string }>();

		const fn2 = curry(
			pipe(
				(t: string, n: number) => `${t}${String(n)}`,
				(s: string) => ({ tagged: s }),
			),
		);

		expectTypeOf(fn2("tag")).parameters.toEqualTypeOf<[number]>();
		expectTypeOf(fn2("tag")).returns.toEqualTypeOf<{ tagged: string }>();
	});
});
