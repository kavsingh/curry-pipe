import path from "node:path";

import js from "@eslint/js";
import filenames from "@kavsingh/eslint-plugin-filenames";
import vitest from "@vitest/eslint-plugin";
import { defineConfig } from "eslint/config";
// eslint-disable-next-line import-x/no-unresolved
import compat from "eslint-plugin-compat";
import { flatConfigs as importX } from "eslint-plugin-import-x";
import n from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import security from "eslint-plugin-security";
import globals from "globals";
import { configs as tsEslint } from "typescript-eslint";

const testFileSuffixes = ["test", "spec", "mock"];

function testFilePatterns({ root = "", extensions = "*" } = {}) {
	return [
		`*.{${testFileSuffixes.join(",")}}`,
		"__{test,tests,mocks,fixtures}__/**/*",
		"__{test,mock,fixture}-*__/**/*",
	].map((pattern) => path.join(root, `**/${pattern}.${extensions}`));
}

export default defineConfig(
	{
		ignores: [".vscode/*", "tmp/*", "dist/*", "reports/*"],
	},

	{
		linterOptions: { reportUnusedDisableDirectives: true },
		languageOptions: {
			globals: { ...globals.node },
			parserOptions: { projectService: true },
		},
	},

	js.configs.recommended,
	...tsEslint.strictTypeChecked,
	...tsEslint.stylisticTypeChecked,
	// @ts-expect-error upstream types
	importX.recommended,
	importX.typescript,
	compat.configs["flat/recommended"],
	n.configs["flat/recommended"],
	// eslint-disable-next-line import-x/no-named-as-default-member
	security.configs.recommended,
	filenames.configs.kebab,

	{
		settings: {
			lintAllEsApis: true,
			browserslistOpts: { env: "scripts" },
			node: { version: 24 },
		},
		rules: {
			"camelcase": "off",
			"no-console": "off",
			"no-restricted-syntax": [
				"warn",
				{ selector: "TSEnumDeclaration", message: "Avoid using enums" },
			],
			"no-unreachable": "error",
			"@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/member-ordering": ["warn"],
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true },
			],
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": [
				"error",
				{
					ignoreTypeValueShadow: false,
					ignoreFunctionTypeParameterNameValueShadow: true,
				},
			],
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
			"import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
			"import-x/no-cycle": "error",
			"import-x/no-self-import": "error",
			"import-x/no-unused-modules": "error",
			"import-x/no-useless-path-segments": "error",
			"import-x/order": [
				"warn",
				{
					"alphabetize": { order: "asc" },
					"groups": [
						"builtin",
						"external",
						"internal",
						"parent",
						["sibling", "index"],
						"type",
					],
					"pathGroupsExcludedImportTypes": ["type"],
					"newlines-between": "always",
				},
			],
			"n/no-missing-import": "off",
		},
	},

	{
		files: ["**/*.c[tj]s?(x)"],
		languageOptions: {
			sourceType: "commonjs",
			parserOptions: { sourceType: "commonjs" },
		},
		rules: {
			"@typescript-eslint/no-require-imports": "off",
			"@typescript-eslint/no-var-requires": "off",
		},
	},

	{
		files: ["*.?(m|c)[tj]s?(x)"],
		rules: {
			"filenames/match-exported": "off",
		},
	},

	{
		files: ["src/**/*.?(m|c)[tj]s?(x)"],
		settings: {
			browserslistOpts: { env: "src" },
			node: { version: 20 },
		},
		rules: {
			"no-console": "error",
		},
	},

	{
		files: testFilePatterns(),
		languageOptions: {
			globals: { ...globals.node },
		},
		settings: {
			browserslistOpts: { env: "script" },
			node: { version: 24 },
			vitest: { typecheck: true },
		},
		extends: [vitest.configs.all],
		rules: {
			"no-console": "off",
			"filenames/match-exported": [
				"error",
				{
					transforms: ["kebab"],
					remove: `\\.(${testFileSuffixes.join("|")})$`,
				},
			],
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/unbound-method": "off",
			"vitest/no-disabled-tests": "error",
			"vitest/no-focused-tests": "error",
			"vitest/no-hooks": "off",
			"vitest/require-mock-type-parameters": "off",
		},
	},

	prettierRecommended,

	{
		rules: {
			"curly": ["warn", "multi-line", "consistent"],
			"prettier/prettier": "warn",
		},
	},
);
