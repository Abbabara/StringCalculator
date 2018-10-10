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

it("should return the sum of numbers when there are two numbers in the string", () => {
	expect(add("2,4")).toBe(6);
});

it("should return sumerize multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should return the sum of the numbers, with a new line inbetween too", () => {
	expect(add("1\n2")).toBe(3);
});

it("should return the sum of the numbers, with a new line inbetween too", () => {
	expect(add("1\n2,3")).toBe(6);
});

test("should throw an error", () => {
	function negativetest() {
		add("-1");
	}
	 expect(negativetest).toThrowError("Negatives not allowd: -1");
});

test("should throw an error", () => {
	function negativetest() {
		add("-1,4");
	}
	 expect(negativetest).toThrowError("Negatives not allowd: -1");
});

test("should throw an error", () => {
	function negativetest() {
		add("-1,4,-4");
	}
	 expect(negativetest).toThrowError("Negatives not allowd: -1,-4");
});