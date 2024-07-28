import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			include: ["src/**"],
			exclude: ["src/index.ts", "**/*.test-d.ts"],
		},
	},
});
