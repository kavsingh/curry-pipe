import { defineConfig } from "tsup";

export default defineConfig(() => {
	return {
		entry: ["src/index.ts"],
		format: ["cjs", "esm"],
		dts: true,
		clean: true,
		platform: "neutral",
	};
});
