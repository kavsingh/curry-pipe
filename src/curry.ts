/* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any */

export const curry: Curry = (fn: (...args: any[]) => any) => {
	return function curried(...args: any[]): any {
		return args.length >= fn.length
			? fn(...args)
			: curry(fn.bind(null, ...args));
	};
};

// Taken from @types/lodash
type Curry = {
	<T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
	<T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
	<T1, T2, T3, R>(
		func: (t1: T1, t2: T2, t3: T3) => R,
	): CurriedFunction3<T1, T2, T3, R>;
	<T1, T2, T3, T4, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4) => R,
	): CurriedFunction4<T1, T2, T3, T4, R>;
	<T1, T2, T3, T4, T5, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R,
	): CurriedFunction5<T1, T2, T3, T4, T5, R>;
	(func: (...args: any[]) => any): (...args: any[]) => any;
};

type CurriedFunction1<T1, R> = {
	(): CurriedFunction1<T1, R>;
	(t1: T1): R;
};

type CurriedFunction2<T1, T2, R> = {
	(): CurriedFunction2<T1, T2, R>;
	(t1: T1): CurriedFunction1<T2, R>;
	(t1: T1, t2: T2): R;
};

type CurriedFunction3<T1, T2, T3, R> = {
	(): CurriedFunction3<T1, T2, T3, R>;
	(t1: T1): CurriedFunction2<T2, T3, R>;
	(t1: T1, t2: T2): CurriedFunction1<T3, R>;
	(t1: T1, t2: T2, t3: T3): R;
};

type CurriedFunction4<T1, T2, T3, T4, R> = {
	(): CurriedFunction4<T1, T2, T3, T4, R>;
	(t1: T1): CurriedFunction3<T2, T3, T4, R>;
	(t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): R;
};

type CurriedFunction5<T1, T2, T3, T4, T5, R> = {
	(): CurriedFunction5<T1, T2, T3, T4, T5, R>;
	(t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
	(t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
	(t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
	(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
};
