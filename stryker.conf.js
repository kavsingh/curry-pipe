/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
	mutate: [
		"src/**/*.ts",
		"!src/**/*@(.test|.spec|.mock).ts",
		"!src/**/*.test-d.ts",
	],
	testRunner: "command",
	commandRunner: { command: "pnpm vitest run" },
	reporters: ["progress", "clear-text", "html"],
	coverageAnalysis: "all",
	// avoid warnings about checking html
	disableTypeChecks: false,
};

export default config;
