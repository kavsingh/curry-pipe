import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		expect: { requireAssertions: true },
		coverage: {
			include: ["src/**"],
			exclude: ["src/index.ts", "**/*.test-d.ts"],
			reportsDirectory: "./reports/coverage",
		},
	},
});
