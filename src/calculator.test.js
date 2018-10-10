const add = require("./calculator"); //import our greeting module

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});