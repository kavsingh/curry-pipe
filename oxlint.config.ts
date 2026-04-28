import security from "eslint-plugin-security";
import { defineConfig } from "oxlint";

export default defineConfig({
	options: {
		typeAware: true,
		typeCheck: true,
		maxWarnings: 0,
		reportUnusedDisableDirectives: "deny",
	},
	categories: { correctness: "error", suspicious: "error", perf: "error" },
	plugins: ["oxc", "eslint", "typescript", "import", "promise", "unicorn"],
	jsPlugins: ["eslint-plugin-security"],
	ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/reports/**"],
	env: { node: true, browser: false },
	rules: {
		"eslint/curly": ["error", "multi-line", "consistent"],
		"eslint/eqeqeq": "error",
		"eslint/no-use-before-define": "error",
		"typescript/no-explicit-any": "error",
		"import/no-cycle": "error",
		"import/exports-last": "error",
		"unicorn/filename-case": ["error", { cases: { kebabCase: true } }],

		...security.configs.recommended.rules,
	},
	overrides: [
		{
			files: ["./src/**/*"],
			env: { node: false, browser: false },
			rules: {
				"eslint/no-console": "error",
				"import/no-nodejs-modules": "error",
			},
		},

		{
			files: ["./src/**/*.test.{ts,tsx}"],
			env: { node: true, browser: false },
			plugins: ["vitest"],
			rules: {
				"eslint/no-console": "off",
				"vitest/no-disabled-tests": "error",
				"vitest/no-focused-tests": "error",
				"vitest/no-import-node-test": "error",
				"vitest/valid-title": ["error", { ignoreTypeOfDescribeName: true }],
			},
		},
	],
});
