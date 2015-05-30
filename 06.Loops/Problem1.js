//Write a script that prints all the numbers from 1 to N.
console.log('Problem 1: Numbers');



function probOneFunc(){
	document.getElementById('probOneResult').value ='';
	var number = document.getElementById('probOneNumber').value,
		i,
		output = 0;

	number = +number;

	for (i = 1; i <= number; i += 1){
		document.getElementById('probOneResult').value += i;
		console.log(i);
		if (i < number){
			document.getElementById('probOneResult').value += ', ';
		}
	}
}