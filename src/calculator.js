function add(number) {
  	if(number == "") {
  		return 0;
  	}
  	if(number.includes(",")) {
  		var numberarray = number.split(",")
  		return parseInt(numberarray[0]) + parseInt(numberarray[1]);
  	}
  	return parseInt(number);

};

module.exports = add;