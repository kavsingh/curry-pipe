import { describe, it, expect, expectTypeOf } from "vitest";

import { curry } from "./curry.ts";
import { pipe } from "./pipe.ts";

import type { CurriedFunction1, CurriedFunction2 } from "./curry.ts";

describe("type inference", () => {
	it("should provide correct types for curry", () => {
		expect.hasAssertions();

		const tag = curry((t: string, n: number) => `${t}${String(n)}`);

		expectTypeOf(tag()).parameters.toEqualTypeOf<
			[] | [string] | [string, number]
		>();
		expectTypeOf(tag()).returns.toEqualTypeOf<
			| string
			| CurriedFunction1<number, string>
			| CurriedFunction2<string, number, string>
		>();

		expectTypeOf(tag("tag")).parameters.toEqualTypeOf<[] | [number]>();
		expectTypeOf(tag("tag")).returns.toEqualTypeOf<
			string | CurriedFunction1<number, string>
		>();

		expectTypeOf(tag()).toBeFunction();
		expectTypeOf(tag("tag", 5)).toBeString();
	});

	it("should provide correct types for pipe", () => {
		expect.hasAssertions();

		const fn = pipe(
			(s: string) => Number(s),
			(n: number) => ({ result: n * 5 }),
		);

		expectTypeOf(fn).parameters.toEqualTypeOf<[string]>();
		expectTypeOf(fn).returns.toEqualTypeOf<{ result: number }>();
	});

	it("should maintain types for pipe and curry", () => {
		expect.hasAssertions();

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

		expectTypeOf(fn2("tag")).parameters.toEqualTypeOf<[] | [number]>();
		expectTypeOf(fn2("tag")).returns.toEqualTypeOf<
			{ tagged: string } | CurriedFunction1<number, { tagged: string }>
		>();
	});
});
