const add = require("./calculator"); //import our greeting module
 /*
 it("should return ...", () => {
	expect(add("")).toBe();
});
*/


it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

 it("should return the number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});
