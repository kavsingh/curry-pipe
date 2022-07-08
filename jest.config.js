const config = {
	transform: { "^.+\\.[jt]s$": "@swc/jest" },
	testRegex: "^.+\\.test\\.[jt]s?$",
	collectCoverageFrom: ["src/**/*"],
	coveragePathIgnorePatterns: ["/__fixtures__/", "^types.ts$", "^.d.ts$"],
};

module.exports = config;
