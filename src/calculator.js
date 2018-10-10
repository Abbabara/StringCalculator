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
  		if(number.includes('-')){
			throw new Error("Negatives not allowd: " + number);
		}
  		return parseInt(number);
};

//sum function adds all the numbers.
function sum(numberarray){
   	var total = 0;
	for(i = 0; i < numberarray.length ; i++) {
		total += parseInt(numberarray[i]);
	}
	return total;
}

module.exports = add;