import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import swc from "rollup-plugin-swc";

const extensions = [".ts", ".js"];

export default [
	{
		input: "./src/index.ts",
		output: [
			{ file: "./dist/index.js", format: "cjs" },
			{ file: "./dist/index.esm.js", format: "es" },
		],
		plugins: [resolve({ extensions }), commonjs(), swc()],
	},
	{
		input: "./tmp/index.d.ts",
		output: [{ file: "./dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
