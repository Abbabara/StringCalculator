function add(number) {
  	if(number == "") {
  		return 0;
  	}
  	else if(number.includes(",")) {
  		var numberarray = number.split(",")
  		var total = 0;
  		for(i = 0; i < numberarray.length ; i++) {
  			total += parseInt(numberarray[i]);
  		}
  		return total;
  	}
  	else {
  		return parseInt(number);
  	}
  	

};

module.exports = add;