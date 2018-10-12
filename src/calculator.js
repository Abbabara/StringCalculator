function add(number) {
	//first, if the string is empty
 
  	if(number == "") 
  		return 0;
  	
  	//if the numbers or 2 or higher
  	var numberarray = [];

  	if(number.charAt(0) == "/" && number.charAt(1) == "/") {
  		//the new delimeter
		var delimeter = number.charAt(2);
		//cutting the string, so it will become normal string
		var number = number.slice(4, number.length);
		// splitting the string into arrays
		numberarray = number.split(delimeter).join(/[,\n]/);	
	}
  	else 
  		//make an array with all the numbers, splitting it by "," or by "\n".
  			var numberarray = number.split(/[,\n]/);
  	
  	//temparray
  	var temparray = [];

  	// taking out too large numbers
  	temparray = overthousand(numberarray);
  	
  	//if there is no negative numbers, we can return.
  	if(checkNegative(numberarray)) 
  		return sum(temparray);
};

//sum function adds all the numbers.
function sum(numberarray){
   	var total = 0; 
   	
   	//go through every number in the array, and adds it up
	for(i = 0; i < numberarray.length ; i++) {
		if(numberarray[i] == "") 
  			numberarray[i] = '0';
		//if the number is negative, we add it to the temp
		total += parseInt(numberarray[i]);

	}
	//if any numbers were negative, error is thrown.

	return total;
}

function overthousand(numberarray){
	var temp = [];
	j = 0;
	for(var i = 0; i < numberarray.length; i++) {
		// Add all numbers less or equal than 1000 to an array
		if(parseInt(numberarray[i]) <= 1000) {
			temp[j] = parseInt(numberarray[i]);
			j++;
		}
	}
	return temp;
}

function checkNegative(numberarray){
	//the string that holds all the negatives.
	var temp = "";
	//checking all the numbers, and if they are negative, adding them to the string
	for(i = 0; i < numberarray.length ; i++) {
		if(numberarray[i].includes("-"))
			temp += numberarray[i] + ",";
	}	

	if(temp != "") 
		throw new Error("Negatives not allowed: " + temp);

	return true;
}

module.exports = add;