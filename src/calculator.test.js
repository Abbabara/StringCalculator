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
	expect(add("1\n2,3")).toBe(6);
});



/*
test("should return an error, \" x is not a number!\" only checking one input"), () => {
	function addtest() {
		add('k');
	}
	 expect((addtest).toThrowError
	}
    drinkFlavor('octopus');
  }).toThrow();
	
	expect(add("g")).toBe("g is not a number!")
}*/