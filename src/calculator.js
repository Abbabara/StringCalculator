//add implemented
function add(number) {
	//first, if the string is empty
  	if(number == "") 
  		return 0;
  	//if the numbers or 2 or higher
  	else if(number.includes(",") || number.includes("\n")) {
  		//make an array with all the numbers, splitting it by "," or by "\n".
  		var numberarray = number.split(/,|\n/g)
  		//calling the sum function.
  		return sum(numberarray);
  	}
  	//if there is only one number
  	else
  		//if the number is negative
  		if(number.includes('-'))
			throw new Error("Negatives not allowed: " + number);
		//if the number is over 1000
		else if(parseInt(number) > 1000) 
			return 0;
		else
  			return parseInt(number);
};

//sum function adds all the numbers.
function sum(numberarray){
	var temp = "";
   	var total = 0; 
   	//go through every number in the array, and adds it up
	for(i = 0; i < numberarray.length ; i++) {
		//if the number is negative, we add it to the temp
		if(numberarray[i].includes("-"))
			temp += numberarray[i] + ",";
		//check if the number is over 1000, changing it to 0 if so
		else if(parseInt(numberarray[i]) > 1000)
			numberarray[i] = 0;
		
		total += parseInt(numberarray[i]);
	}
	//if any numbers were negative, error is thrown.
	if(temp != "") {
		throw new Error("Negatives not allowed: " + temp);
	}
	return total;
}

module.exports = add;