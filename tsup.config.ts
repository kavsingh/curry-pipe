import { defineConfig } from "tsup";

export default defineConfig((options) => {
	return {
		entry: ["src/index.ts"],
		format: ["cjs", "esm"],
		dts: true,
		sourcemap: true,
		clean: true,
		minify: !options.watch,
	};
});
