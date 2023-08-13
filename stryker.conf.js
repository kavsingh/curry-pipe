module.exports = {
	mutate: ["src/**/*.ts", "!src/**/*@(.test|.spec|.mock).ts"],
	testRunner: "jest",
	plugins: ["@stryker-mutator/jest-runner"],
	reporters: ["progress", "clear-text", "html"],
	coverageAnalysis: "all",
	jest: {
		projectType: "custom",
		config: require("./jest.config.js"),
		enableFindRelatedTests: true,
	},
};
