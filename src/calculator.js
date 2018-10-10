function add(number) {
  	if(number == "") 
  		return 0;
  	else if(number.includes(",")) {
  		var numberarray = number.split(",")
  		return sum(numberarray);
  	}
  	else
  		return parseInt(number);
};

function sum(numberarray){
   	var total = 0;
	for(i = 0; i < numberarray.length ; i++) {
		total += parseInt(numberarray[i]);
	}
	return total;
}

module.exports = add;